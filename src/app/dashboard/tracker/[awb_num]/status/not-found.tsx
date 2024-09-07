import Link from 'next/link';
import Face from '@mui/icons-material/Face';

export default function NotFound() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 md:gap-6">
      <Face
        className="text-pink-700"
        sx={{
          fontSize: '48px',
        }}
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="text-xl font-semibold text-slate-500 md:text-5xl md:font-black">
          404
        </h2>
        <h2 className="text-xl font-semibold text-slate-500 md:text-5xl md:font-black">
          Not Found
        </h2>
        <p className="text-sm font-medium text-pink-700 md:text-lg">
          Could not find the requested AWB.
        </p>
      </div>
      <Link
        href="/dashboard/tracker"
        className="mt-4 rounded-md bg-pink-900 px-4 py-2 text-sm text-white transition-colors hover:bg-pink-400"
      >
        Go Back
      </Link>
    </main>
  );
}
