'use client';

import { lusitana } from './fonts';
import clsx from 'clsx';
import AppLogo from './app-logo';
// import { usePathname } from 'next/navigation';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const A = ({ children, className, ...rest }: AnchorProps) => (
  <a
    {...rest}
    // href="#"
    className={`${clsx(
      ' text-white transition duration-200 hover:text-pink-300 hover:ease-in-out focus:text-pink-300 disabled:text-black/30 motion-reduce:transition-none  dark:hover:text-neutral-300 dark:focus:text-neutral-300 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400',
      className,
      lusitana.className,
    )}`}
  >
    {children}
  </a>
);

export const NavHeader = ({
  isActive,
  pathnameOrHash,
  handleClick,
  smoothScrollHandler,
}: {
  isActive: boolean;
  pathnameOrHash: string;
  smoothScrollHandler: (text: string) => void;
  handleClick: () => void;
}) => {
  const slideUp = `-translate-y-44 transition duration-[700ms] ease-in md:translate-y-0 md:transition-none bg-opacity-0`;
  const slideDown = `translate-y-44 border-t border-double border-pink-400 py-3 transition duration-[600ms] 
                      ease-linear md:translate-y-0 md:border-t-0 md:transition-none bg-opacity-100`;

  return (
    // <!--Main Navigation-->
    <header>
      <nav className="shadow-black/1 fixed top-0 z-20 w-full bg-pink-900 shadow-md">
        <div className="flex h-14 w-full flex-col md:h-20 md:flex-row md:items-center">
          {/* <!-- Hamburger button for mobile view --> */}
          <div className="flex flex-row justify-start py-2">
            <button
              className="first-letter block border-0 bg-transparent px-2 md:hidden"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClick}
            >
              <div id="toggle-btn" className={`${clsx(isActive && 'active')}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* <!-- Collapsible navigation container --> */}
            {/* <!-- Logo --> */}
            <div className="ml-1 md:ml-6">
              <AppLogo className="text-2xl md:text-3xl"> </AppLogo>
            </div>
          </div>
          <div
            className={`!visible absolute -top-32 w-full items-center bg-pink-900 text-sm md:relative md:top-0 md:!flex md:basis-auto
            ${clsx(isActive ? slideDown : slideUp)}`}
          >
            {/* <!-- Left navigation links --> */}
            <ul className="list-style-none ml-4 mr-auto flex flex-col space-y-3 pl-0 md:flex-row md:space-y-0 md:text-base">
              <li>
                {/* <!-- Home link --> */}
                <A
                  className={`${clsx(pathnameOrHash === '/' && 'text-opacity-50')}`}
                  href="/"
                  onClick={handleClick}
                >
                  Home
                </A>
              </li>
              <li>
                {/* <!-- Portal link --> */}
                <A
                  className={`${clsx(pathnameOrHash === '/tracker' && 'text-opacity-50')}`}
                  href="/tracker"
                  onClick={handleClick}
                >
                  Tracking Portal
                </A>
              </li>
              {/* <!-- Services link --> */}
              <li>
                <A
                  className={`${clsx(pathnameOrHash === '#services' && 'text-opacity-50')}`}
                  href="/#services"
                  onClick={() => {
                    handleClick();
                    smoothScrollHandler('#services');
                  }}
                >
                  Services
                </A>
              </li>
              {/* <!-- About me link --> */}
              <li>
                <A
                  className={`${clsx(pathnameOrHash === '#about_us' && 'text-opacity-50')}`}
                  href="/#about_us"
                  onClick={() => {
                    handleClick();
                    smoothScrollHandler('#about_us');
                  }}
                >
                  About Us
                </A>
              </li>
              {/* <!-- Contact link --> */}
              <li>
                <A
                  className={`${clsx(pathnameOrHash === '#contact_us' && 'text-opacity-50')}`}
                  href="/#contact_us"
                  onClick={() => {
                    handleClick();
                    smoothScrollHandler('#contact_us');
                  }}
                >
                  Contact Us
                </A>
              </li>
              <li>
                <A
                  className={`${clsx(pathnameOrHash === '/dashboard' && 'text-opacity-50')}`}
                  href="/dashboard"
                  onClick={handleClick}
                >
                  Dashboard
                </A>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
