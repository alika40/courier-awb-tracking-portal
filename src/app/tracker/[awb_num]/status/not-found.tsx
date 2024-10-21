'use client';

import Link from 'next/link';
import Face from '@mui/icons-material/Face';
import { lusitana } from '@/app/ui/fonts';
import { NavHeader } from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import useShowActivePathname from '@/app/ui/hooks/useShowActivePathname';
import { formatUrlText } from '@/app/lib/utils';
import Banner from '@/app/banner';
import { useSmoothScrollToTop } from '@/app/ui/hooks/useSmoothSrcollToTop';
import SmoothScrollToTop from '@/app/smoothScrollToTop';

const NotFoundWrapper = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/delivery_man.jpg')] bg-cover bg-fixed">
      <div className="mt-8 rounded-sm border border-pink-300 bg-black bg-opacity-75 p-4 md:mt-20 md:rounded-md md:p-8">
        <div className="mb-2 flex justify-center">
          <div className="stroke">
            <h2
              className={`${lusitana.className} text-base font-bold text-pink-600 md:text-3xl`}
            >
              STATUS
            </h2>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-6">
          <Face
            className="text-pink-700"
            sx={{
              fontSize: '48px',
            }}
          />
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-slate-500 md:text-5xl md:font-black">
              404
            </h2>
            <h2 className="text-xl font-semibold text-slate-500 md:text-5xl md:font-black">
              Not Found
            </h2>
            <p className="text-sm font-medium text-pink-700 md:text-lg">
              Could not find the requested AWB.
            </p>
          </div>
          <Link
            href="/tracker"
            className="mt-4 rounded-md bg-pink-900 px-4 py-2 text-sm text-white transition-colors hover:bg-pink-400"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function NotFound() {
  const { handleClick, smoothScrollHandler, isActive, pathnameOrHash } =
    useShowActivePathname();

  const { smoothScrollToTopHandler, scrollToTop, onTarget } =
    useSmoothScrollToTop();

  return (
    <main className="mt-14 flex  min-h-screen flex-col md:mt-20">
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
      <NotFoundWrapper />
      <SmoothScrollToTop
        smoothScrollToTopHandler={smoothScrollToTopHandler}
        scrollToTop={scrollToTop}
      />
      <Footer />
    </main>
  );
}
