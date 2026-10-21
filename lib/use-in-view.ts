"use client";

import { useEffect, useState, type RefObject } from "react";

/* Two flags for media that should not cost anything off screen (performance pass, 20 Oct):
   `near` turns true once the element comes within `margin` (200 px) of the viewport and stays true (attach
   the source then), `visible` follows whether it is on screen now (play / pause). Without
   IntersectionObserver both are true. */
export function useInView<T extends Element>(ref: RefObject<T | null>, margin = "200px") {
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;
    const nearIo = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        setNear(true);
        nearIo.disconnect();
      }
    }, { rootMargin: margin });
    const visIo = new IntersectionObserver((es) => setVisible(es.some((e) => e.isIntersecting)), { threshold: 0.05 });
    nearIo.observe(el);
    visIo.observe(el);
    return () => {
      nearIo.disconnect();
      visIo.disconnect();
    };
  }, [ref, margin]);
  // Without IntersectionObserver (very old browsers) treat the element as on screen.
  const noIo = typeof window !== "undefined" && !("IntersectionObserver" in window);
  return { near: near || noIo, visible: visible || noIo };
}
