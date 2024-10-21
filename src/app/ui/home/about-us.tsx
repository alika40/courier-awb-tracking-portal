import { jf_shadow, roboto, pacifico, cormorantGaramond } from '../fonts';
import clsx from 'clsx';
import styles from './home.module.css';
import { Carousel } from './carousel';
import Card from './card';

const data = {
  name: 'Charles Nwodo Jnr',
  position: 'Chairman/CEO',
  image: '/Charles-Nwodo-jnr.jpg',
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.stroke}>
        <h1
          className={`${clsx(
            'mb-0.5 text-center text-lg font-black uppercase text-pink-900 md:mb-3 md:text-2xl',
            jf_shadow.className,
          )}`}
        >
          About Us
        </h1>
      </div>
      <div
        className={`${roboto.className} w-full space-y-3 text-base text-slate-500 md:space-y-5 md:text-lg`}
      >
        <p>
          XL Express & Logistics Ltd is one of subsidiaries of XL Africa Group,
          previously trading under the name of XL Management Services Limited is
          proudly a Nigerian and Africa focused diversified services group with
          operations in Nigeria, Ghana, Sierra Leone, Liberia and the USA with
          service footprints across the entire West Africa sub-region.
        </p>
        <p>
          With a growing reputation for excellent services, the XL Africa Group
          brand is focused on becoming a regional model for the achievement of
          rapid and sustainable growth in market share and profitability through
          a culture of consistent value creating service delivery to clients in
          all the sectors and countries of operation.
        </p>
      </div>
      <div
        className={`${roboto.className} mt-2 flex flex-col space-y-2 text-slate-500 md:mt-8 md:flex-row md:space-x-5 md:space-y-0`}
      >
        <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0">
          <h1
            className={`${clsx(
              '-mb-0.5 text-center text-base font-black uppercase text-pink-900 md:mb-2 md:text-2xl',
              pacifico.className,
            )}`}
          >
            VISION
          </h1>
          <p className="text-sm md:text-lg">
            To become known and respected for the provision of excellent
            services consistently and to reflect excellence in everything we do
            and in all things that are associated with the XL Africa Group
            brand.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0">
          <h1
            className={`${clsx(
              '-mb-0.5 text-center text-base font-black uppercase text-pink-900 md:mb-2 md:text-2xl',
              pacifico.className,
            )}`}
          >
            MISSION
          </h1>
          <p className="text-sm md:text-lg">
            To create sustainable value for our stakeholders through consistent
            excellent service delivery, respect for the environment and
            aggressive pursuit of profitability through responsible and ethical
            business practices.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-12">
        <h1
          className={`${clsx(
            '-mb-.05 text-start text-base font-black uppercase text-pink-900 md:text-2xl',
            cormorantGaramond.className,
          )}`}
        >
          MEET OUR TEAM
        </h1>
        <p className="text-sm font-semibold text-pink-900">
          Members of the executive team of the group.
        </p>
        <div className="mb-10 mt-5 flex items-center justify-center">
          <Card data={data} />
        </div>
        <div className="mx-auto my-auto mt-4 overflow-hidden rounded">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
