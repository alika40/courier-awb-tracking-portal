import { useEffect, useRef, useState } from 'react';

export const useSmoothScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);
  const [onTarget, setOnTarget] = useState<boolean>(false);
  const timerRef = useRef<any>(undefined);

  const isScrollToTop = (): boolean => {
    // When scrolling reaches 400px of of the screen height  show scrollToTop Button
    const position = window.scrollY;
    return position >= 400;
  };

  const isBannerInView = (): boolean => {
    // When scrolling reaches 100px of of the screen height  show scrollToTop Button
    const position = window.scrollY;
    return position >= 20;
  };

  const smoothScrollToTopHandler = () => {
    // Show button for ScrollToTop
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTopHandler = () => {
    setScrollToTop(isScrollToTop());
  };

  const showBannerHandler = () => {
    setOnTarget(isBannerInView());
  };

  useEffect(() => {
    // Check if the code is running on the client side: NodeJS.Process
    if (process) {
      window.addEventListener(
        'scroll',
        () => {
          showBannerHandler();
          if (timerRef.current !== undefined) {
            clearTimeout(timerRef.current);
          }
          timerRef.current = setTimeout(scrollToTopHandler, 150);
        },
        { passive: true },
      );
    }

    return () => {
      window.removeEventListener('scroll', scrollToTopHandler);
      clearTimeout(timerRef.current);
    };
  }, []);

  return { smoothScrollToTopHandler, scrollToTop, onTarget };
};
