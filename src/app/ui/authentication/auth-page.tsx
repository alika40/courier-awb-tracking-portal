'use client';

import Banner from '@/app/banner';
import { NavHeader } from '../header';
import useShowActivePathname from '../hooks/useShowActivePathname';
import { useSmoothScrollToTop } from '../hooks/useSmoothSrcollToTop';
import { formatUrlText } from '@/app/lib/utils';
import SmoothScrollToTop from '@/app/smoothScrollToTop';
import Footer from '../footer';
import { ReactNode } from '@/app/lib/definitions';

export const AuthPage = ({ children }: ReactNode) => {
  const { handleClick, smoothScrollHandler, isActive, pathnameOrHash } =
    useShowActivePathname();

  const { smoothScrollToTopHandler, scrollToTop, onTarget } =
    useSmoothScrollToTop();

  return (
    <>
      <NavHeader
        isActive={isActive}
        pathnameOrHash={pathnameOrHash}
        handleClick={handleClick}
        smoothScrollHandler={smoothScrollHandler}
      />
      <Banner
        current_route={formatUrlText(pathnameOrHash)}
        onTarget={onTarget}
      />

      <section>{children}</section>

      <SmoothScrollToTop
        smoothScrollToTopHandler={smoothScrollToTopHandler}
        scrollToTop={scrollToTop}
      />
      <Footer />
    </>
  );
};
