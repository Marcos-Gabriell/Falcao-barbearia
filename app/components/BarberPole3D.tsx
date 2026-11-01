"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* ─── TEXTURA DAS LISTRAS (preto · dourado · creme) ─────────────────────── */
function createStripeTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const colors = ["#0b0b0b", "#c99a52", "#f5f1eb", "#c99a52"];
  const band = size / 4;

  ctx.fillStyle = "#0b0b0b";
  ctx.fillRect(0, 0, size, size);

  // Listras diagonais a 45° que fecham o padrão nas bordas (tile perfeito)
  for (let i = -8; i < 8; i++) {
    ctx.fillStyle = colors[((i % 4) + 4) % 4];
    ctx.beginPath();
    ctx.moveTo(i * band, 0);
    ctx.lineTo(i * band + band, 0);
    ctx.lineTo(i * band + band + size, size);
    ctx.lineTo(i * band + size, size);
    ctx.closePath();
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2.2);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

/* ─── COMPONENTE ─────────────────────────────────────────────────────────── */
export default function BarberPole3D({ className = "", onReady }: { className?: string; onReady?: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    /* renderer */
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // sem WebGL: o componente simplesmente não aparece
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    /* cena + câmera */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.2, 11);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    /* materiais */
    const stripeTexture = createStripeTexture();
    const gold = new THREE.MeshStandardMaterial({ color: "#c99a52", metalness: 1, roughness: 0.22 });
    const darkMetal = new THREE.MeshStandardMaterial({ color: "#151515", metalness: 0.9, roughness: 0.35 });
    const stripes = new THREE.MeshStandardMaterial({ map: stripeTexture, roughness: 0.38, metalness: 0.1 });
    const glass = new THREE.MeshPhysicalMaterial({
      color: "#ffffff",
      metalness: 0,
      roughness: 0.04,
      transparent: true,
      opacity: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      envMapIntensity: 1.6,
    });

    /* geometria do poste */
    const pole = new THREE.Group();
    const H = 3.6; // altura do cilindro listrado

    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, H, 64, 1, true), stripes);
    pole.add(core);

    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, H, 64, 1, true), glass);
    pole.add(tube);

    const addCap = (y: number, dir: 1 | -1) => {
      const cap = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.06, 20, 64), gold);
      ring.rotation.x = Math.PI / 2;
      cap.add(ring);

      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.82, 0.32, 64), darkMetal);
      base.position.y = dir * 0.2;
      cap.add(base);

      const trim = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.045, 16, 64), gold);
      trim.rotation.x = Math.PI / 2;
      trim.position.y = dir * 0.36;
      cap.add(trim);

      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(0.66, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2),
        gold
      );
      dome.position.y = dir * 0.36;
      if (dir === -1) dome.rotation.x = Math.PI;
      dome.scale.y = 0.55;
      cap.add(dome);

      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 16), gold);
      knob.position.y = dir * 0.82;
      cap.add(knob);

      cap.position.y = y;
      pole.add(cap);
    };
    addCap(H / 2, 1);
    addCap(-H / 2, -1);

    pole.rotation.z = -0.12;
    scene.add(pole);

    /* luzes de recorte (rim light dourado) */
    const key = new THREE.DirectionalLight("#fff4e2", 1.4);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight("#d4aa7a", 30, 20);
    rim.position.set(-3, 1, -2);
    scene.add(rim);
    scene.add(new THREE.AmbientLight("#ffffff", 0.25));

    /* interação: mouse no desktop, rolagem no celular */
    const target = { x: 0, y: 0 };
    let scrollSpin = 0;
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    const onScroll = () => {
      scrollSpin = window.scrollY * 0.004;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    /* resize */
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    /* loop — pausa quando sai da tela */
    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(mount);

    const clock = new THREE.Clock();
    let frame = 0;
    const render = () => {
      frame = requestAnimationFrame(render);
      if (!visible) return;
      const t = clock.getElapsedTime();

      stripeTexture.offset.y -= 0.0035;
      pole.rotation.y += (target.x + scrollSpin - pole.rotation.y) * 0.04;
      pole.rotation.x += (target.y - pole.rotation.x) * 0.04;
      pole.position.y = Math.sin(t * 0.9) * 0.08;

      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      render();
    }
    onReadyRef.current?.();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      io.disconnect();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) obj.geometry.dispose();
      });
      [gold, darkMetal, stripes, glass].forEach((m) => m.dispose());
      stripeTexture.dispose();
      envTexture.dispose();
      pmrem.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden />;
}
