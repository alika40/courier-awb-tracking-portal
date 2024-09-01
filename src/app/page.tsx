// https://android-server.cyclic.app/api/courses

import Link from 'next/link';
import Image from 'next/image';
import { NavHeader } from './ui/header';
import Footer from './ui/footer';
import Home from './ui/home/home';

// Default: Static Site Generation method where data is cached and request is made only once
const fetchData = async () => {
  const response = await fetch(
    'https://android-server.cyclic.app/api/course/5512420',
  );

  const data = await response.json(); // json data format
  return data;
};

// Static data fetching with Revalidation method where data is cached and request is made at an interval
const fetchData1 = async () => {
  const response = await fetch(
    'https://android-server.cyclic.app/api/courses',
    { next: { revalidate: 20 } },
  );

  const data = await response.json(); // json data format
  return data;
};

// Sever-Side Rendering, SSR, method where data is not cached and new data fetched when request is made.
const fetchData2 = async () => {
  const response = await fetch(
    'https://android-server.cyclic.app/api/courses',
    { cache: 'no-store' },
  );

  const data = await response.json(); // json data format
  return data;
};

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <NavHeader />
      <Home />
      <Footer />
    </main>
  );
};

export default Page;
