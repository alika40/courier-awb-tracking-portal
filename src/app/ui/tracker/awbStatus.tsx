'use client';

import { TrackAwbNum } from '@/app/lib/definitions';
import VerticalLinearStepper from './verticalStepper';
import { lusitana } from '../fonts';
import { NavHeader } from '../header';
import Footer from '../footer';
import useShowActivePathname from '../hooks/useShowActivePathname';
import { useSmoothScrollToTop } from '../hooks/useSmoothSrcollToTop';
import SmoothScrollToTop from '@/app/smoothScrollToTop';
import Banner from '@/app/banner';
import { formatUrlText } from '@/app/lib/utils';

// interface ChildrenProps extends ReactNode {
//   awb: TrackAwbNum;
// }

const AwbStatusWrapper = ({ awb }: { awb: TrackAwbNum }) => (
  <main className="flex min-h-screen items-center justify-center">
    <div className="rounded-sm border border-pink-300 bg-black bg-opacity-90 p-4 md:rounded-md md:p-8">
      <div className="mb-2 flex justify-center">
        <div className="stroke">
          <h2
            className={`${lusitana.className} text-base font-bold text-pink-600 md:text-3xl`}
          >
            STATUS
          </h2>
        </div>
      </div>
      <VerticalLinearStepper awb={awb} />
    </div>
  </main>
);

export const AwbStatus = ({ awb }: { awb: TrackAwbNum }) => {
  const { handleClick, smoothScrollHandler, isActive, pathnameOrHash } =
    useShowActivePathname();

  const { smoothScrollToTopHandler, scrollToTop, onTarget } =
    useSmoothScrollToTop();

  return (
    <main className="mt-14 flex  min-h-screen flex-col bg-[url('/background-network.jpg')] bg-cover bg-fixed md:mt-20">
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

      <AwbStatusWrapper awb={awb} />

      <SmoothScrollToTop
        smoothScrollToTopHandler={smoothScrollToTopHandler}
        scrollToTop={scrollToTop}
      />
      <Footer />
    </main>
  );
};
