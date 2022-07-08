import { useState, useEffect } from "react";

export const useMedia = (breakPoints) => {
  const getCurrentBreakPoint = () => {
    const currentWidth = window.innerWidth;

    for (const breakpoint of breakPoints) {
      if (currentWidth >= breakpoint.min && currentWidth <= breakpoint.max) {
        return breakpoint;
      }
    }
    return undefined;
  };

  const [currentBreakPoint, setCurrentBreakPoint] = useState(() =>
    getCurrentBreakPoint()
  );

  const isChange = (breakPoint) => {
    if (
      breakPoint &&
      (currentBreakPoint === undefined ||
        breakPoint.name !== currentBreakPoint.name)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onResize = () => {
    const breakPoint = getCurrentBreakPoint;

    if (isChange(breakPoint)) {
      setCurrentBreakPoint(breakPoint);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return currentBreakPoint;
};
