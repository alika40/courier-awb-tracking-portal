import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';
import clsx from 'clsx';

export default function SmoothScrollToTop({
  smoothScrollToTopHandler,
  scrollToTop,
}: {
  smoothScrollToTopHandler: () => void;
  scrollToTop: boolean;
}) {
  const slideDownScrollToTop = `-bottom-16 transition-all duration-[800ms] ease-out bg-opacity-100`;
  const slideUpScrollToTop = `bottom-3 md:bottom-8 transition-all duration-[600ms] ease-in bg-opacity-5 hover:bg-opacity-100 hover:text-pink-500 hover:ease-in-out`;

  return (
    <>
      <Link
        href="#"
        className="py-1/3 fixed bottom-3 left-3 z-50 inline-block cursor-pointer rounded-full bg-black bg-opacity-5 px-3 text-green-600 md:bottom-8 md:left-6 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-10 md:[&>svg]:w-10"
      >
        <WhatsApp />
      </Link>
      <button
        onClick={smoothScrollToTopHandler}
        className={`py-1/3 fixed right-3 z-50 inline-block cursor-pointer rounded-md bg-black px-3 text-pink-900 md:right-6 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-10 md:[&>svg]:w-10
          ${clsx(scrollToTop ? slideUpScrollToTop : slideDownScrollToTop)}`}
      >
        {scrollToTop ? <ArrowUpwardOutlined /> : <ArrowDownwardOutlined />}
      </button>
    </>
  );
}
