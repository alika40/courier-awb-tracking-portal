import { jf_shadow, cormorantGaramond, roboto, fastOne } from '../fonts';
import { Icons } from '../footer';
import clsx from 'clsx';
import styles from './home.module.css';

const ContactUs = () => {
  return (
    <>
      <div className={styles.stroke}>
        <h1
          className={`${clsx(
            'mb-0.5 text-center text-lg font-black uppercase text-pink-900 md:mb-3 md:text-2xl',
            jf_shadow.className,
          )}`}
        >
          Contact Us
        </h1>
      </div>
      {/* <!-- Company Address and Social Icons --> */}
      <div className="">
        <div>
          <h2
            className={`${cormorantGaramond.className} text-lg font-bold text-slate-600 md:text-2xl`}
          >
            Office Address:
          </h2>
          <p
            className={`${roboto.className} md:lg mb-2 ml-2 text-base text-slate-500 md:ml-4`}
          >
            138, Obafemi Awolowo Way, 1st Floor, Unity Hospital building by
            Balogun b/stop, Ikeja.
          </p>
          <h2
            className={`${cormorantGaramond.className} text-lg font-bold text-slate-600 md:text-2xl`}
          >
            Telephone Numbers:
          </h2>
          <p
            className={`${fastOne.className} ml-2 text-base text-slate-600 md:text-lg`}
          >
            0802 2492 478, 0706 7332 973, 0816 0839 548.
          </p>
        </div>
        <div className="mb-6 mt-2 md:mb-8">
          <Icons />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
