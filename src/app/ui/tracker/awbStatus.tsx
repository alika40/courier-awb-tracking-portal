import { TrackAwbNum, ReactNode } from '@/app/lib/definitions';
import VerticalLinearStepper from './verticalStepper';
import { lusitana } from '../fonts';
import { NavHeader } from '../header';
import Footer from '../footer';

// interface ChildrenProps extends ReactNode {
//   awb: TrackAwbNum;
// }

const AwbStatusWrapper = ({ awb }: { awb: TrackAwbNum }) => (
  <main className="flex min-h-screen items-center justify-center">
    <div className="rounded-sm border border-pink-300 bg-black bg-opacity-90 p-4 md:rounded-md md:p-8">
      <div className="mb-2 flex justify-center">
        <div className="stroke">
          <h2
            className={`${lusitana.className} text-base font-bold text-pink-600 md:text-3xl`}
          >
            STATUS
          </h2>
        </div>
      </div>
      <VerticalLinearStepper awb={awb} />
    </div>
  </main>
);

export const AwbStatus = ({ awb }: { awb: TrackAwbNum }) => (
  <main className="flex min-h-screen flex-col bg-[url('/delivery_man.jpg')] bg-cover bg-fixed">
    <NavHeader />
    <div className="mt-10 md:mb-10 md:mt-24">
      <AwbStatusWrapper awb={awb} />
    </div>
    <Footer />
  </main>
);
