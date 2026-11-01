"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

/* Card que inclina em 3D seguindo o mouse, com reflexo dourado. */
export default function Tilt3D({
  children,
  className = "",
  max = 8,
  ...rest
}: Omit<HTMLMotionProps<"div">, "children"> & { children?: ReactNode; max?: number }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 220, damping: 20 });
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(212,170,122,0.16), transparent 55%)`
  );

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  if (reduce) {
    return (
      <motion.div className={className} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...rest}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d", ...rest.style }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: glare }}
      />
    </motion.div>
  );
}
