"use client";

import {RefObject, useEffect, useState} from "react";

/**
 * Custom hook to check if an element is visible on the screen using IntersectionObserver.
 *
 * @param ref - The ref of the element to observe.
 * @returns Whether the element is intersecting with the viewport.
 */
export function useIsVisible<T extends Element>(ref: RefObject<T>): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}
