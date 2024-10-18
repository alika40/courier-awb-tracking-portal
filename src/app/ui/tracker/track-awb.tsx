'use client';

import SmoothScrollToTop from '@/app/smoothScrollToTop';
import Footer from '../footer';
import { NavHeader } from '../header';
import useShowActivePathname from '../hooks/useShowActivePathname';
import TrackAWBFormCustomer from './track-awb-form';
import { useSmoothScrollToTop } from '../hooks/useSmoothSrcollToTop';
import Banner from '@/app/banner';
import { formatUrlText } from '@/app/lib/utils';

export const TrackAwb = () => {
  const { handleClick, smoothScrollHandler, isActive, pathnameOrHash } =
    useShowActivePathname();

  const { smoothScrollToTopHandler, scrollToTop, onTarget } =
    useSmoothScrollToTop();

  return (
    <main className="mt-14 flex min-h-screen flex-col md:mt-20">
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
      <TrackAWBFormCustomer />
      <SmoothScrollToTop
        smoothScrollToTopHandler={smoothScrollToTopHandler}
        scrollToTop={scrollToTop}
      />
      <Footer />
    </main>
  );
};
