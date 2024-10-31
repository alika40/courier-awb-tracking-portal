import {
  WhatsApp,
  Facebook,
  // Twitter,
  Instagram,
  YouTube,
  Email,
  Copyright,
  Language,
  Twitter,
} from '@mui/icons-material';
import clsx from 'clsx';
import AppLogo from './app-logo';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const A = ({ children, className, ...rest }: AnchorProps) => (
  <a
    {...rest}
    href="#"
    className={clsx(
      'hover:ease-in-outfocus:text-pink-300 transition duration-200 hover:text-pink-300 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400',
      className,
    )}
  >
    {children}
  </a>
);

/**
 * ***TO KEEP FOOTER AT THE BOTTOM OF THE REGARDLESS OF THE CONTENT SIZE***
 * Wrap Header, Main content, and Footer in a container and apply 'flex', 'flex-col', and 'min-h-screen' to the class.
 * Apply 'mt-auto' to Footer class.
 */

export default function Footer() {
  return (
    <footer className="min-h-[80px] bg-slate-500">
      <div className="footer flex w-full flex-col space-y-10 divide-y-2 divide-solid divide-pink-900 bg-gray-900 md:space-y-10">
        <div className="mt-5 flex flex-col gap-10 md:mt-28 md:grid md:grid-flow-col md:grid-rows-3">
          {/* <!-- Company Logo and Mission Statement --> */}
          <div className="md:row-span-3">
            <About />
          </div>

          {/* <!-- Company Information and Activities --> */}
          <div className="md:col-span-3 md:row-span-3">
            <CompanyInfomation />
          </div>
        </div>

        {/* <!-- Copy Right Reserve --> */}
        <DevCopyright />
      </div>
    </footer>
  );
}

export const About = () => (
  <div className="w-full space-y-2 px-4 md:ml-4 md:items-start md:space-y-8">
    {/* <!-- Compoany Logo --> */}
    <AppLogo className="text-3xl md:text-6xl"> </AppLogo>

    {/* <!-- Company Mission Statement --> */}
    <div className="">
      <h2 className="text-base font-medium text-white md:text-lg md:font-black">
        Mission:
      </h2>
      <p className="mb-2 ml-2 text-sm text-slate-400 md:ml-4 md:text-base">
        Making the world a better place through constructing elegant hierarchies
      </p>
      <h2 className="text-base font-medium text-white md:text-lg md:font-black">
        Office Address:
      </h2>
      <p className="mb-2 ml-2 text-sm text-slate-400 md:ml-4 md:text-base">
        138, Obafemi Awolowo Way, 1st Floor, Unity Hospital building by Balogun
        b/stop, Ikeja
      </p>
      <h2 className="text-base font-medium text-white md:text-lg md:font-black">
        Telephone Numbers:
      </h2>
      <p className="font-mediun ml-2 text-sm text-slate-400 md:text-base">
        0802 2492 478, 0706 7332 973, 0816 0839 548
      </p>
    </div>
    <Icons />
  </div>
);

export const Icons = () => (
  <>
    {/* <!-- Company social media link Icons --> */}
    <div className="flex h-5 items-center space-x-4 md:h-7 md:justify-normal md:space-x-8">
      {/* <!-- Email Icon --> */}
      <A>
        <span className="text-gray-500 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <Email />
        </span>
      </A>
      {/* <!-- WhatsApp Icon --> */}
      <A>
        <span className="text-green-500 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <WhatsApp />
        </span>
      </A>

      {/* <!-- Facebook Icon --> */}
      <A>
        <span className="text-blue-500 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <Facebook />
        </span>
      </A>

      {/* <!-- X or Twitter Icon --> */}
      <A>
        {/* <span className="h-5 w-5 text-blue-500 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <Twitter />
        </span> */}
        <span className="[&>svg]:h-4 [&>svg]:w-4 md:[&>svg]:h-5 md:[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // className="h-4 w-4"
            viewBox="0 0 512 512"
            fill="gray"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </A>

      {/* <!-- Instagram Icon --> */}
      <A>
        <span className="text-gray-500 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <Instagram />
        </span>
      </A>

      {/* <!-- YouTube Icon --> */}
      <A>
        <span className="text-red-700 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <YouTube />
        </span>
      </A>

      {/* <!-- WWW Icon --> */}
      <A>
        <span className="text-gray-500 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-7 md:[&>svg]:w-7">
          <Language />
        </span>
      </A>
    </div>
  </>
);

const CompanyInfomation = () => (
  <div className="grid grid-flow-row grid-cols-4 gap-1 px-4 md:gap-6">
    {/* <!-- Company Solution --> */}
    <div>
      <h2 className="text-base font-medium text-white underline underline-offset-4 md:text-lg md:font-black">
        Solutions
      </h2>
      <ul className="space-y-1 text-sm text-slate-400 md:space-y-5 md:text-base">
        <li className="my-2 md:mt-5">
          <A>Marketing</A>
        </li>
        <li>
          <A>Analytics</A>
        </li>
        <li>
          <A>Commerce</A>
        </li>
        <li>
          <A>Insights</A>
        </li>
      </ul>
    </div>

    {/* <!-- Company Support --> */}
    <div>
      <h2 className="text-base font-medium text-white underline underline-offset-4 md:text-lg md:font-black">
        Support
      </h2>
      <ul className="space-y-2 text-sm text-slate-400 md:space-y-5 md:text-base">
        <li className="my-2 md:my-5">
          <A>Pricing</A>
        </li>
        <li>
          <A>Documentation</A>
        </li>
        <li>
          <A>Guides</A>
        </li>
        <li>
          <A>API Status</A>
        </li>
      </ul>
    </div>

    {/* <!-- Company --> */}
    <div>
      <h2 className="text-base font-medium text-white underline underline-offset-4 md:text-lg md:font-black">
        Company
      </h2>
      <ul className="space-y-2 text-sm text-slate-400 md:space-y-5 md:text-base">
        <li className="my-2 md:my-5">
          <A>About</A>
        </li>
        <li>
          <A>Jobs</A>
        </li>
        <li>
          <A>Press</A>
        </li>
        <li>
          <A>Partners</A>
        </li>
      </ul>
    </div>

    {/* <!-- Legal --> */}
    <div>
      <h2 className="text-base font-medium text-white underline underline-offset-4 md:text-lg md:font-black">
        Legal
      </h2>
      <ul className="space-y-2 text-sm text-slate-400 md:space-y-5 md:text-base">
        <li className="my-2 md:my-5">
          <A>Claim</A>
        </li>
        <li>
          <A>Privacy</A>
        </li>
        <li>
          <A>Terms</A>
        </li>
      </ul>
    </div>
  </div>
);

const DevCopyright = () => (
  <div className="flex w-full flex-col items-center justify-center p-4 md:p-8">
    <div className="mr-2 text-center text-sm font-semibold text-slate-500 md:text-base">
      Trailblazer, Inc. 1004, Heaven Gate, Jupiter.
    </div>
    <div className="item-center mt-2 flex w-full flex-row items-center justify-center">
      <div>
        <span className="text-xs text-slate-500 md:text-sm">Copyright</span>
        <sup className="text-pink-900 [&>svg]:h-3 [&>svg]:w-3 md:[&>svg]:h-4 md:[&>svg]:w-4">
          <Copyright />
        </sup>
      </div>
      <div>
        <span className="text-xs font-semibold text-pink-900 md:text-sm">
          {new Date().getFullYear()}
        </span>
        <span className="mr-2 text-xs text-slate-500 md:text-sm">.</span>
        <span className="text-xs text-slate-500 md:text-sm">
          All rights reserved.
        </span>
      </div>
    </div>
  </div>
);
