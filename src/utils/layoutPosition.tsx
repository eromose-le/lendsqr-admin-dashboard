import { useState, useEffect, MutableRefObject } from "react";

/**
 * Custom hook to get the current Y-axis scroll position
 * @returns {number} scrollY - The current Y-axis scroll position
 */
export const useYPosition = (): number => {
  const [scrollY, setScrollY] = useState<number>(0);

  const setYaxis = (): void => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = (): void => {
      window.addEventListener("scroll", setYaxis);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setYaxis);
    };
  }, []);

  return scrollY;
};

/**
 * Function to scroll to a specific element
 * @param refRef - The reference to the element to scroll to
 */
export const executeScrollToRef = (
  refRef: MutableRefObject<HTMLElement | null>
): void => {
  refRef.current?.scrollIntoView();
};
