import { clsx } from 'clsx';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol
        className={clsx(
          lusitana.className,
          'flex text-lg sm:text-2xl md:text-4xl',
        )}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active
                ? 'text-gray-400'
                : 'font-bold uppercase text-pink-900 underline decoration-pink-900 decoration-dashed decoration-2 underline-offset-2 md:decoration-8 md:underline-offset-8',
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mr-2 inline-block">:</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
