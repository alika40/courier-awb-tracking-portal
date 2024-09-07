// import TrackAwbForm from './ui/tracker/track-awb-form';

/**
 *   By marking a component "use client" automatically converts it  to client-side rendering.
 *   All components in app folder in Nextjs are SSR by default except the ones marked "use client".
 *   Rules: Mark a component "use client" if it uses HOOKS and/or has interactivity like event listeners.
 *         Use SSR if component fetches data, stores sensitive data, access backend resources directly or
 *         a large dependency
 */
//"use client";
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import TrackAWBFormAdmin from '../../ui/tracker/dashboard/track-awb-form';

const Page = () => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Portal', href: '/dashboard' },
          {
            label: 'Track AWB.',
            href: '/dashboard/tracker',
            active: true,
          },
        ]}
      />
      <TrackAWBFormAdmin />
    </main>
  );
};

export default Page;
