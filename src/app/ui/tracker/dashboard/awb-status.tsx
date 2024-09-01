import { TrackAwbNum } from '@/app/lib/definitions';
import { lusitana } from '../../fonts';
import VerticalLinearStepper from '../verticalStepper';
import NotFound from '@/app/dashboard/tracker/[awb_num]/status/not-found';
import clsx from 'clsx';

export const AwbStatus = ({ awb }: { awb: TrackAwbNum }) => (
  <div className="flex h-screen flex-col items-center justify-center">
    <div className="mt-10 w-full">
      <h1
        className={clsx(
          lusitana.className,
          'flex text-xl font-black uppercase text-pink-900 underline decoration-pink-900 decoration-dotted decoration-2 underline-offset-2 md:text-3xl md:decoration-8 md:underline-offset-8',
        )}
      >
        AWB Status
      </h1>
    </div>
    <div className="z-40 mt-4 rounded-sm border border-pink-300 p-4 shadow-lg shadow-pink-400 dark:shadow-pink-800 md:mt-10 md:rounded-md md:p-8">
      <div className="mb-2 flex justify-center">
        <div className="stroke">
          <h2
            className={`${lusitana.className} text-sm font-bold text-pink-600 md:text-3xl`}
          >
            STATUS
          </h2>
        </div>
      </div>
      {awb ? <VerticalLinearStepper awb={awb} /> : <NotFound />}
    </div>
  </div>
);
