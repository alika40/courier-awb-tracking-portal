import { ReactNode } from '../lib/definitions';
import Footer from '../ui/footer';
import { NavHeader } from '../ui/tracker/header';

export default function AuthenticationLayout({ children }: ReactNode) {
  return (
    <>
      <NavHeader />
      <section
      // className="mx-4 mt-14"
      >
        {children}
      </section>
      <Footer />
    </>
  );
}
