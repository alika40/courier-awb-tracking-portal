import { AwbStatus } from '@/app/ui/tracker/awbStatus';
import { awbs, customers } from '@/app/lib/placeholder-data';

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
  const filteredAwb = awbs.filter((awb) => awb.awb_num === params.awb_num);
  // console.log(filteredAwb[0]);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return <AwbStatus awb={filteredAwb[0]} />;
};

export default Page;
