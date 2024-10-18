import { useEffect, useRef, useState } from 'react';

const useServiceAnim = () => {
  const [inView, setInView] = useState<boolean>(false);
  const elemRef = useRef<HTMLDivElement>(null);

  const isInView = (): boolean => {
    // When scrolling reaches the bottom of 'cargo-heading' in ServiceWithAnim component trigger anim
    const rect =
      elemRef.current!.children[1]!.children[1].firstElementChild!.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    const _isInView: boolean = isInView();
    setInView(_isInView);

    if (_isInView) {
      const elemClickRef = elemRef.current;

      const newspaperSpinning = [
        { transform: 'rotate(180deg) scale(0)' },
        { transform: 'rotate(0) scale(1)' },
      ];

      const newspaperTiming = {
        duration: 900,
        iterations: 1,
      };

      // Animate 'mail-service-mgt-div' from SeeviceWithAnim component
      elemClickRef!.children[0]!.children[0]!.animate(
        // {
        //   opacity: [0, 0.9, 1],
        //   offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
        //   easing: ['ease-in', 'ease-out'],
        // },
        // 2000,
        newspaperSpinning,
        newspaperTiming,
      );

      // Animate 'cargo-div' from SeeviceWithAnim component
      elemClickRef!.children[0]!.children[1]!.animate(
        newspaperSpinning,
        newspaperTiming,
      );

      // Animate 'express-mail-and-courier' from SeeviceWithAnim component
      elemClickRef!.children[1].children[0]!.animate(
        newspaperSpinning,
        newspaperTiming,
      );

      // Animate 'bulk-mail-eliveries' from SeeviceWithAnim component
      elemClickRef!.children[1]!.children[1]!.animate(
        newspaperSpinning,
        newspaperTiming,
      );

      // Animate 'haulage' from SeeviceWithAnim component
      elemClickRef!.children[1]!.children[2]!.animate(
        newspaperSpinning,
        newspaperTiming,
      );

      // Fire once it becomes false, i.e, it's out of view and remove event
      if (!inView) window.removeEventListener('scroll', scrollHandler);
    }
  };

  useEffect(() => {
    setInView(isInView());
    // Check if the code is running on the client side: NodeJS.Process
    if (process) {
      window.addEventListener('scroll', scrollHandler);
    }

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return elemRef;
};

export default useServiceAnim;
