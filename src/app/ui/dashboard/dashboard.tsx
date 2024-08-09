import { createContext } from 'react';
import useDrawerToggle from '../hooks/useDrawerToggle';
import { DrawerState } from './drawer/drawer-style';
import DashboardContents from './dashboard-contents';
import { ReactNode } from '@/app/lib/definitions';

export const DashboardContext = createContext<DrawerState>({
  open: false,
  setOpen: () => false,
});

export default function DashboardContainer({ children }: ReactNode) {
  const { open, setOpen } = useDrawerToggle();
  const provider = { open, setOpen };

  return (
    <DashboardContext.Provider value={provider}>
      <DashboardContents>{children}</DashboardContents>
    </DashboardContext.Provider>
  );
}
