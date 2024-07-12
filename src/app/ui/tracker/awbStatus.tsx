import { AWBInputData, ReactNode } from '@/app/lib/definitions';
import VerticalLinearStepper from './verticalStepper';
import { lusitana } from '../fonts';
import NotFound from '@/app/tracker/[awb_num]/status/not-found';
import { NavHeader } from './header';
import Footer from '../footer';

interface ChildrenProps extends ReactNode {
  awb: AWBInputData;
}

const AwbStatusWrapper = ({ children }: ChildrenProps) => (
  <>
    <div className="flex min-h-screen flex-col">
      <NavHeader />
      {children}
      <Footer />
    </div>
  </>
);

export const AwbStatus = ({ awb }: { awb: AWBInputData }) => (
  <AwbStatusWrapper awb={awb}>
    <main className="flex h-screen items-center justify-center bg-[url('/delivery_man.jpg')] bg-cover bg-fixed">
      <div className="mt-8 rounded-sm border border-pink-300 bg-black bg-opacity-75 p-4 md:mt-20 md:rounded-md md:p-8">
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
    </main>
  </AwbStatusWrapper>
);
