// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative w-full overflow-hidden rounded-xl bg-gray-200 p-2 shadow-sm dark:bg-zinc-700 md:w-1/3`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-300 dark:bg-zinc-800" />
        <div className="ml-2 h-8 w-28 rounded-md bg-gray-300 text-sm font-medium dark:bg-zinc-800" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl  bg-white px-4 py-8 text-center text-2xl">
        <div className="h-8 w-24 rounded-md bg-gray-300 dark:bg-zinc-800" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="mx-auto w-full rounded-sm bg-gray-100 p-2 dark:bg-zinc-600 md:w-[80%] md:rounded-md md:p-5">
      <div className="mx-auto mb-2 h-7 w-28 rounded-sm bg-gray-300 dark:bg-zinc-800" />
      <div
        className={`${shimmer} md:space-around relative flex w-full flex-col justify-between gap-4 overflow-hidden bg-gray-100 dark:bg-zinc-600 md:flex-row md:gap-10`}
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export function UsersTableSkeleton() {
  return (
    <div
      className={`${shimmer} relative mx-auto w-full overflow-hidden rounded-lg bg-gray-200 p-2 dark:bg-zinc-700`}
    >
      <div className="mb-4 mt-4 flex w-full flex-col justify-center">
        <div
          className={`mx-auto h-7 w-64 rounded-md bg-gray-300 text-lg font-bold dark:bg-zinc-800 md:text-xl`}
        />
      </div>
      <div className="h-[200px] w-full overflow-x-auto overflow-y-auto rounded-lg bg-gray-300 dark:bg-zinc-800" />
    </div>
  );
}

export function CustomersTableSkeleton() {
  return (
    <div
      className={`${shimmer} relative mx-auto w-full overflow-hidden rounded-lg bg-gray-200 p-2 dark:bg-zinc-700`}
    >
      <div className="mb-4 mt-4 flex w-full flex-col justify-center">
        <div
          className={`mx-auto h-7 w-64 rounded-md bg-gray-300 text-lg font-bold dark:bg-zinc-800 md:text-xl`}
        />
        <div
          className={`mx-auto mb-1 mt-3 h-10 w-72 rounded-lg bg-gray-100 dark:bg-zinc-600`}
        />
      </div>
      <div className="h-[500px] w-full overflow-x-auto overflow-y-auto rounded-lg bg-gray-300 dark:bg-zinc-800" />
    </div>
  );
}

export function AWBsTableSkeleton() {
  return (
    <div
      className={`${shimmer} relative mx-auto hidden w-full overflow-hidden rounded-lg bg-gray-200 p-2 dark:bg-zinc-700 sm:w-[500px] md:block md:w-[1000px]`}
    >
      <div className="mb-4 mt-4 flex w-full flex-col justify-center">
        <div
          className={`mx-auto h-7 w-1/3 rounded-md bg-gray-300 text-lg font-bold dark:bg-zinc-800 md:text-xl`}
        />
        <div
          className={`mx-auto mb-1 mt-3 h-10 w-1/2 rounded-lg bg-gray-100 dark:bg-zinc-600`}
        />
      </div>
      <div className="h-[500px] w-full overflow-x-auto overflow-y-auto rounded-lg bg-gray-300 dark:bg-zinc-800"></div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-5 mt-4 h-8 w-40 justify-start overflow-hidden rounded-md bg-gray-200 dark:bg-zinc-700 md:mb-10`}
      />
      <div className="flex flex-col items-center justify-center gap-y-7 divide-y-4 divide-dotted divide-gray-300 md:gap-y-14">
        <div className="mx-auto w-full">
          <CardsSkeleton />
        </div>

        <div className="w-full justify-center pt-14">
          <div>
            <UsersTableSkeleton />
          </div>
        </div>

        <div className="hidden w-full justify-center pt-14 md:block">
          <div>
            <CustomersTableSkeleton />
            <div className="mt-2 flex w-full justify-center">
              {/* PaginationCustomer */}
              <div className="mr-5 h-10 w-10 rounded-md bg-gray-200 dark:bg-zinc-700" />
              <div
                className={`${shimmer} relative h-10 w-1/3 overflow-hidden rounded-md bg-gray-200 dark:bg-zinc-700`}
              />
              <div className="ml-5 h-10 w-10 rounded-md bg-gray-200 dark:bg-zinc-700" />
            </div>
          </div>
        </div>

        {/* <div className="hidden w-full justify-center pt-14 md:flex">
          <div>
            <AWBsTableSkeleton />
            <div className="mt-2 flex w-full justify-center">
              <div className="mr-5 h-10 w-10 rounded-md bg-gray-200 dark:bg-zinc-700" />
              <div
                className={`${shimmer} relative h-10 w-1/4 overflow-hidden rounded-md bg-gray-200 dark:bg-zinc-700`}
              />
              <div className="ml-5 h-10 w-10 rounded-md bg-gray-200 dark:bg-zinc-700" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
