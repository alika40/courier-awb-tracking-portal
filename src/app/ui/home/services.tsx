import { jf_shadow, roboto } from '../fonts';
import clsx from 'clsx';
import styles from './home.module.css';
import ServicesWithAnim from './services-help-comp';
import useServiceAnim from '../hooks/useServiceAnim';

const Services = () => {
  const elemRef = useServiceAnim();

  return (
    <>
      <div className={styles.stroke}>
        <h1
          className={`${clsx(
            'mb-0.5 text-center text-lg font-black uppercase text-pink-900 md:mb-3 md:text-2xl',
            jf_shadow.className,
          )}`}
        >
          Services
        </h1>
      </div>

      <p className={`${roboto.className} text-base text-slate-500 md:text-lg`}>
        We have grown our National Distribution Footprint and through alliance
        with our foreign partners, developed an international delivery
        capability that is efficient and cost effective. The following are the
        services of XL Express and Logistics.
      </p>

      <div
        ref={elemRef}
        className={`${roboto.className} mt-3 grid grid-flow-row grid-cols-1 gap-2 text-slate-500 md:mt-8 md:grid-cols-2 md:gap-4`}
      >
        <ServicesWithAnim />
      </div>
    </>
  );
};

export default Services;
