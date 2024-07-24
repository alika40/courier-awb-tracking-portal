import {
  FoodBankSharp,
  CloudCircle,
  AccountBalance,
} from '@mui/icons-material';
import { roboto } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';
import clsx from 'clsx';
import { fetchAwbCardData, fetchCustomersCardData } from '@/app/lib/data';

const iconMap = {
  customers: CloudCircle,
  pending: AccountBalance,
  awbs: FoodBankSharp,
  over_due: FoodBankSharp,
};

export default async function CardWrapperCustomers() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const { numberOfCustomers, numberOfAwbs, totalPendingAwbs } =
    await fetchCustomersCardData();

  return (
    <div className="mx-auto w-full rounded-sm bg-gray-100 p-2 md:w-[80%] md:rounded-md md:p-5">
      <h3
        className={clsx(
          roboto.className,
          'mb-2 text-center text-lg font-bold text-gray-500 underline underline-offset-4 md:mb-4 md:text-xl',
        )}
      >
        Slapshots
      </h3>
      <div className="md:space-around flex w-full flex-col justify-between gap-4 md:flex-row md:gap-10">
        {/* NOTE: comment in this code when you get to this point in the course */}
        <Card
          title="Total Corporate Customer"
          value={numberOfCustomers}
          type="customers"
        />
        <Card
          title="Total AWBs For The Past One Month"
          value={numberOfAwbs}
          type="awbs"
        />
        <Card
          title="A Month Pending Transactions"
          value={totalPendingAwbs}
          type="pending"
        />
      </div>
    </div>
  );
}

export async function CardWrapper({ customer_id }: { customer_id: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const { numberOfOverDueAwbs, numberOfAwbs, totalPendingAwbs } =
    await fetchAwbCardData(customer_id);

  return (
    <div className="mx-auto w-full rounded-sm bg-gray-100 p-2 md:w-[80%] md:rounded-md md:p-5">
      <h3
        className={clsx(
          roboto.className,
          'mb-2 text-center text-lg font-bold text-gray-500 underline underline-offset-4 md:mb-4 md:text-xl',
        )}
      >
        Slapshots
      </h3>
      <div className="md:space-around flex w-full flex-col justify-between gap-4 md:flex-row md:gap-10">
        {/* NOTE: comment in this code when you get to this point in the course */}
        <Card
          title="Total AWBs For The Past One Month."
          value={numberOfAwbs}
          type="awbs"
        />
        <Card
          title="One Month Pending Transactions"
          value={totalPendingAwbs}
          type="pending"
        />
        <Card
          title="Total Over Due AWBs"
          value={numberOfOverDueAwbs}
          type="over_due"
        />
      </div>
    </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'customers' | 'awbs' | 'pending' | 'over_due';
}) {
  const Icon = iconMap[type];

  return (
    <div className="w-full rounded-xl bg-pink-300 p-4 shadow-sm md:w-1/3">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-pink-900" /> : null}
        <h3 className="ml-2 text-sm font-medium text-pink-900">{title}</h3>
      </div>
      <p
        className={`${roboto.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl font-black text-pink-900`}
      >
        {value}
      </p>
    </div>
  );
}
