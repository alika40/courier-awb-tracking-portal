import { AwbStatus } from '@/app/ui/tracker/dashboard/awb-status';
import { fetchAwbByAwbNum } from '@/app/lib/data';
import NotFound from './not-found';

const Page = async ({ params }: { params: { awb_num: string } }) => {
  const awb_num = params?.awb_num;
  const awb = await fetchAwbByAwbNum(awb_num);

  if (!awb) NotFound;

  return <AwbStatus awb={awb} />;
};

export default Page;
