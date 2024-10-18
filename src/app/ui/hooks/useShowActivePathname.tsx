import { useEffect, useState } from 'react';

export default function useShowActivePathname() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => setIsActive(() => (isActive ? false : true));
  const [pathnameOrHash, setPathnameOrHash] = useState('');

  const smoothScrollHandler = (urlSegment: string) => {
    // ScrollToView for jump to section
    setPathnameOrHash(urlSegment);

    if (urlSegment) {
      const element = document.querySelector(urlSegment);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'start',
          });
        }, 500);
      }
    }
  };

  useEffect(() => {
    // Check if the code is running on the client side: NodeJS.Process
    if (process) {
      const location = window.location;
      const includesHash = location.href.includes('#');
      if (!includesHash) {
        setPathnameOrHash(location.pathname);
      }
      if (includesHash) {
        setPathnameOrHash(location.hash);
      }
    }
  }, []);

  return {
    handleClick,
    smoothScrollHandler,
    isActive,
    pathnameOrHash,
  };
}
