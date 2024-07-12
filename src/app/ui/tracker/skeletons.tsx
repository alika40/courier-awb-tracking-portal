// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function AWBTrackerSkeleton() {
  return (
    <div
      className={`${shimmer} relative mx-auto overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm md:mt-20 md:h-[350px] md:max-w-[450px] md:rounded-md`}
    >
      <div className="flex justify-center md:mt-8">
        <div className="stroke">
          <h2 className="bg-gray-200 text-sm font-bold  md:p-8">
            {'  '} {'  '}
          </h2>
          <div className="w-full">
            <div className=" w-25 mb-8 mt-8 h-5 bg-gray-200 text-lg font-black" />
            <div className=" mb-2 h-5 w-20 bg-gray-200 text-lg font-black" />
            <div className=" text-mediun mb-8 h-10 w-full bg-gray-200 font-black" />
            <div className=" mb-8 h-5 w-20 bg-gray-200 text-lg font-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
