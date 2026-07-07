import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Sophisticated hero: a dotted globe (threat-intel / global security vibe) with
// slowly orbiting rings and a faint particle atmosphere. Refined, slow, elegant.
// Crimson + platinum. Drop public/avatar.glb to swap the globe for your model.
export function initScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  const sizes = { w: window.innerWidth, h: window.innerHeight };

  const camera = new THREE.PerspectiveCamera(45, sizes.w / sizes.h, 0.1, 100);
  camera.position.set(0, 0, 10);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(sizes.w, sizes.h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const CRIMSON = new THREE.Color("#ff2e4d");
  const PLATINUM = new THREE.Color("#e8e6e3");

  const rig = new THREE.Group();
  rig.rotation.z = -0.25;
  scene.add(rig);

  const globe = new THREE.Group();
  rig.add(globe);

  // --- Dotted globe (fibonacci sphere) ---
  const R = 2.6;
  const N = 1600;
  const gpos = new Float32Array(N * 3);
  const gcol = new Float32Array(N * 3);
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = phi * i;
    gpos[i * 3] = Math.cos(th) * rad * R;
    gpos[i * 3 + 1] = y * R;
    gpos[i * 3 + 2] = Math.sin(th) * rad * R;
    const c = Math.random() < 0.12 ? CRIMSON : PLATINUM;
    gcol[i * 3] = c.r;
    gcol[i * 3 + 1] = c.g;
    gcol[i * 3 + 2] = c.b;
  }
  const gGeo = new THREE.BufferGeometry();
  gGeo.setAttribute("position", new THREE.BufferAttribute(gpos, 3));
  gGeo.setAttribute("color", new THREE.BufferAttribute(gcol, 3));
  const globePts = new THREE.Points(
    gGeo,
    new THREE.PointsMaterial({ size: 0.032, vertexColors: true, transparent: true, opacity: 0.9 })
  );
  globe.add(globePts);

  // faint wireframe shell for structure
  const shell = new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(R * 0.995, 3)),
    new THREE.LineBasicMaterial({ color: PLATINUM, transparent: true, opacity: 0.04 })
  );
  globe.add(shell);

  // --- Orbiting rings ---
  const rings: THREE.Mesh[] = [];
  const ringConfigs = [
    { r: 3.5, tilt: [0.4, 0, 0.2] },
    { r: 4.1, tilt: [1.2, 0.5, 0] },
    { r: 4.7, tilt: [-0.6, 1.0, 0.4] },
  ];
  for (const cfg of ringConfigs) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(cfg.r, 0.006, 8, 160),
      new THREE.MeshBasicMaterial({ color: CRIMSON, transparent: true, opacity: 0.5 })
    );
    ring.rotation.set(cfg.tilt[0], cfg.tilt[1], cfg.tilt[2]);
    rig.add(ring);
    rings.push(ring);
    // a small "satellite" node riding each ring
    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 12, 12),
      new THREE.MeshBasicMaterial({ color: PLATINUM })
    );
    node.userData.ring = cfg.r;
    ring.add(node);
  }

  // --- Atmosphere particles ---
  const AP = 600;
  const apos = new Float32Array(AP * 3);
  for (let i = 0; i < AP; i++) {
    const rr = 6 + Math.random() * 8;
    const a = Math.random() * Math.PI * 2;
    const b = Math.acos(Math.random() * 2 - 1);
    apos[i * 3] = Math.sin(b) * Math.cos(a) * rr;
    apos[i * 3 + 1] = Math.sin(b) * Math.sin(a) * rr;
    apos[i * 3 + 2] = Math.cos(b) * rr;
  }
  const apGeo = new THREE.BufferGeometry();
  apGeo.setAttribute("position", new THREE.BufferAttribute(apos, 3));
  const atmosphere = new THREE.Points(
    apGeo,
    new THREE.PointsMaterial({ color: PLATINUM, size: 0.02, transparent: true, opacity: 0.3 })
  );
  scene.add(atmosphere);

  // Optional avatar swap
  new GLTFLoader().load(
    "./avatar.glb",
    (gltf) => {
      const m = gltf.scene;
      const box = new THREE.Box3().setFromObject(m);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const s = 4.4 / Math.max(size.x, size.y, size.z);
      m.scale.setScalar(s);
      m.position.sub(center.multiplyScalar(s));
      globePts.visible = false;
      shell.visible = false;
      globe.add(m);
      scene.add(new THREE.AmbientLight(0xffffff, 1));
      const l = new THREE.PointLight(CRIMSON, 3, 30);
      l.position.set(4, 3, 5);
      scene.add(l);
    },
    undefined,
    () => {}
  );

  // --- Interaction ---
  const mouse = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
    mouse.x = (e.clientX / sizes.w - 0.5) * 2;
    mouse.y = (e.clientY / sizes.h - 0.5) * 2;
  });
  let scrollY = 0;
  window.addEventListener("scroll", () => (scrollY = window.scrollY / window.innerHeight));

  window.addEventListener("resize", () => {
    sizes.w = window.innerWidth;
    sizes.h = window.innerHeight;
    camera.aspect = sizes.w / sizes.h;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.w, sizes.h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const clock = new THREE.Clock();
  const tick = () => {
    const t = clock.getElapsedTime();
    globe.rotation.y = t * 0.08;
    shell.rotation.y = -t * 0.05;
    rings.forEach((ring, i) => {
      ring.rotation.z += 0.0015 * (i + 1);
      const node = ring.children[0] as THREE.Mesh;
      const a = t * (0.5 + i * 0.2);
      node.position.set(Math.cos(a) * (node.userData.ring as number), Math.sin(a) * (node.userData.ring as number), 0);
    });
    atmosphere.rotation.y = t * 0.02;

    // Smooth parallax + gentle scroll drift
    rig.rotation.x += (mouse.y * 0.2 - rig.rotation.x - 0.1) * 0.03;
    rig.position.x += (mouse.x * 0.5 - rig.position.x) * 0.03;
    rig.position.y = scrollY * 1.5;
    camera.position.z = 10 + scrollY * 2;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();
}
