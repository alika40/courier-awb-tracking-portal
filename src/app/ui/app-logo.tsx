// import Image from 'next/image';
// import styles from '../page.module.css';
// import nextLogo from '../../../public/next.svg';
import clsx from 'clsx';
import { lusitana } from './fonts';

interface HeadElemProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

const AppLogo = ({ children, className, ...rest }: HeadElemProps) => (
  <>
    {/* image import method  */}
    {/* <div className={styles.center}> */}
    {/* <Image
          className={styles.logo}
          src={nextLogo}
          alt="Next.js Logo"
          width={80}
          height={37}
          priority
        /> */}
    {/* image dir passed to src directly method  */}
    {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
    {/* image import method  */}
    {/* <Image
          className={styles.logo}
          src={nextLogo}
          alt="Next.js Logo"
          width={80}
          height={37}
          priority
        /> */}
    {/* </div> */}
    <h2
      {...rest}
      className={clsx(
        `${lusitana.className} whitespace-nowrap font-bold text-white`,
        className,
      )}
    >
      <span className="text-slate-400">e</span>
      <span className=" text-pink-600">X</span>
      <span className="text-slate-400">L</span>
    </h2>
    {children}
  </>
);

export default AppLogo;
