import clsx from 'clsx';
import { eater, jf_shadow } from './ui/fonts';

const Banner = ({
  current_route,
  onTarget,
}: {
  current_route: string;
  onTarget: boolean;
}) => {
  const slideUp = `transition-all duration-[200ms] ease-in bg-pink-900 underline decoration-black decoration-dashed md:decoration-8 decoration-4 underline-offset-8`;
  const slideDown = `transition-all duration-[200ms] ease-linear underline decoration-pink-500 decoration-dotted decoration-4 underline-offset-8 md:decoration-8 text-pink-500 bg-slate-700`;

  return (
    <div
      className={`z-10 flex h-14 w-full items-center justify-center md:h-28
        ${clsx(onTarget ? slideUp : slideDown)}`}
    >
      <h1
        className={`${clsx(
          'text-lg font-black uppercase md:mb-3 md:text-2xl',
          eater.className,
        )}`}
      >
        {current_route}
      </h1>
    </div>
  );
};

export default Banner;
