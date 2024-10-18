import { ReactNode } from '../lib/definitions';

export default function AuthenticationLayout({ children }: ReactNode) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
