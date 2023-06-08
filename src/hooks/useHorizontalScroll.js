import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const onWheel = (event) => {
        if (event.deltaY === 0) return;

        event.preventDefault();

        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
          behavior: "smooth",
        });
      };

      element.addEventListener("wheel", onWheel);

      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elementRef;
}
