'use client';

import Services from './services';
import AboutUs from './about-us';
import ContactUs from './contact-us';
import { NavHeader } from '../header';
import Footer from '../footer';
import Banner from '../../banner';
import useShowActivePathname from '../hooks/useShowActivePathname';
import { formatUrlText } from '@/app/lib/utils';
import SmoothScrollToTop from '@/app/smoothScrollToTop';
import { useSmoothScrollToTop } from '../hooks/useSmoothSrcollToTop';

export default function Home() {
  const { handleClick, smoothScrollHandler, isActive, pathnameOrHash } =
    useShowActivePathname();

  return (
    <main className="mt-14 flex min-h-screen flex-col md:mt-20">
      <NavHeader
        isActive={isActive}
        pathnameOrHash={pathnameOrHash}
        handleClick={handleClick}
        smoothScrollHandler={smoothScrollHandler}
      />
      <HomeWrapper pathnameOrHash={pathnameOrHash} />
      <Footer />
    </main>
  );
}

const HomeWrapper = ({ pathnameOrHash }: { pathnameOrHash: string }) => {
  const { smoothScrollToTopHandler, scrollToTop, onTarget } =
    useSmoothScrollToTop();

  return (
    <>
      <Banner
        current_route={formatUrlText(pathnameOrHash)}
        onTarget={onTarget}
      />

      <main className="flex flex-col items-center justify-center">
        <div>
          <img src="/fast_delivery.jpg" width="100%" height="100%" />
        </div>
        <div className="mt-4 space-y-16 px-8 md:mt-10 md:space-y-32 md:pl-10 md:pr-10">
          <div id="services" className="w-full">
            <Services />
          </div>
          <div id="about_us" className="w-full">
            <AboutUs />
          </div>
          <div id="contact_us" className="w-full">
            <ContactUs />
          </div>
        </div>
      </main>
      <SmoothScrollToTop
        smoothScrollToTopHandler={smoothScrollToTopHandler}
        scrollToTop={scrollToTop}
      />
    </>
  );
};
