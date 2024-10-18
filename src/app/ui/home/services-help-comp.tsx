import { cormorantGaramond, roboto } from '../fonts';
import clsx from 'clsx';
import {
  LocalShipping,
  RocketLaunch,
  FlightTakeoff,
  FireTruck,
  Public,
} from '@mui/icons-material';
import Link from 'next/link';

const ServicesWithAnim = () => (
  <>
    <div className="flex flex-col">
      <div id="mail-service-mgt-div">
        <h1
          className={`${clsx(
            'mt-1 text-start text-sm font-black uppercase text-pink-900 md:text-2xl',
            cormorantGaramond.className,
          )}`}
        >
          <span>
            <LocalShipping className="mr-2" />
          </span>
          Mail Room Management
        </h1>
        <p className={`${roboto.className} text-sm text-slate-500 md:text-lg`}>
          XL Express & Logistics manages mailroom for clients with the aim of
          providing better efficiency in recording, collating, sorting and
          distribution of mails.
        </p>
      </div>
      <div
        className={`${roboto.className} text-sm text-slate-500 md:text-lg`}
        id="cargo-div"
      >
        <h1
          className={`${clsx(
            'text-star mt-3 text-sm font-black  uppercase text-pink-900 md:mt-5 md:text-2xl',
            cormorantGaramond.className,
          )}`}
          id="cargo-heading"
        >
          <Public className="mr-2" />
          Cargo clearing and forwarding Services.
        </h1>
        <div>
          <p className="mx-1 text-sm font-medium text-pink-900 md:mx-2 md:text-base md:font-black">
            Our list of service offering for the Cargo Division include:
          </p>
          <ul className=" list-inside list-image-[url('/checked_pink.png')] space-y-0 md:space-y-3">
            <li>Airfreight Import and Export</li>
            <li>Sea freight Import and Export</li>
            <li>Customs Clearance & Brokerage</li>
            <li>Door to Door Import and Export Services</li>
            <li>Packing and Relocation SWarehousing & Managementervices</li>
            <li>Inventory and Warehouse Management</li>
            <li>Cargo Delivery Services</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:space-x-2 md:space-y-0">
      <div id="express-mail-and-courier">
        <h1
          className={`${clsx(
            'mt-2 text-start text-sm font-black uppercase text-pink-900 md:mt-0 md:text-2xl',
            cormorantGaramond.className,
          )}`}
        >
          <span>
            <FlightTakeoff className="mr-2" />
          </span>
          Express Mail & Courier Services
        </h1>
        <p className={`${roboto.className} text-sm text-slate-500 md:text-lg`}>
          Our express division provides door-to-door express delivery of
          documents, parcel and freight. This service covers national, regional
          and global destinations.
        </p>
      </div>
      <div id="bulk-mail-eliveries">
        <h1
          className={`${clsx(
            'mt-3 text-start text-sm font-black uppercase text-pink-900 md:mt-5 md:text-2xl',
            cormorantGaramond.className,
          )}`}
        >
          <span>
            <RocketLaunch className="mr-2" />
          </span>
          Bulk Mail Deliveries
        </h1>
        <p className={`${roboto.className} text-sm text-slate-500 md:text-lg`}>
          The bulk deliveries are for the distribution of high volume mails and
          documents within and outside the country. We handle consignments like
          capital market instruments e.g. Shares certificates, Public Offer
          documents etc
        </p>
      </div>
      <div id="haulage">
        <h1
          className={`${clsx(
            'mt-3 text-start text-sm font-black uppercase text-pink-900 md:mt-5 md:text-2xl',
            cormorantGaramond.className,
          )}`}
        >
          <FireTruck className="mr-2" /> Haulage.
        </h1>
        <p className={`${roboto.className} text-sm text-slate-500 md:text-lg`}>
          XL E&L haul less time sensitive bulky items at competitive rates to
          any destination within Nigeria and West Africa. The quality and
          capacity of the company’s fleet ensure that customers receive
          professional services in this area. The company also has the capacity
          to pick up from locations outside Nigeria within West Africa. All
          company vehicles are fitted with tracking devices to enable live
          tracking of deliveries at anytime should the need arise.
        </p>
      </div>
    </div>
    <div className="mt-4 flex w-full flex-row items-center justify-center gap-2 md:mt-2 md:justify-start md:gap-3">
      <Link
        href="/tracker"
        className="flex h-8 items-center rounded-sm bg-pink-900 px-2 text-xs font-medium text-white shadow-md shadow-gray-400 transition-colors hover:bg-pink-400 hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-200 active:bg-pink-300 disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:rounded-md md:px-4 md:text-base"
      >
        Consignment Tracking Portal
      </Link>
      <Link
        href="#"
        className="flex h-8 items-center rounded-sm bg-green-600 px-2 text-xs font-medium text-white shadow-md shadow-gray-400 transition-colors hover:bg-green-300 hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 active:bg-green-200 disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:rounded-md md:px-4 md:text-base"
      >
        Explore More
      </Link>
    </div>
  </>
);

export default ServicesWithAnim;
