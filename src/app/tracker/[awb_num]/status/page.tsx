import { AwbStatus } from '@/app/ui/tracker/awbStatus';
import { awbs, customers } from '@/app/lib/placeholder-data';
import { fetchAwbByAwbNum } from '@/app/lib/data';
import NotFound from './not-found';

// Default: Static Site Generation method where data is cached and request is made only once
const fetchData = async ({ params }: { params: { slug: string } }) => {
  const response = await fetch(
    //"https://android-server.cyclic.app/api/course/5512420"
    `https://android-server.cyclic.app/api/course/${params.slug}`,
    { cache: 'no-store' },
  );

  const data = await response.json(); // json data format
  return data;
};

const Page = async ({ params }: { params: { awb_num: string } }) => {
  const awb_num = params?.awb_num;
  const awb = await fetchAwbByAwbNum(awb_num);

  if (!awb) NotFound;

  return <AwbStatus awb={awb} />;
};

export default Page;
