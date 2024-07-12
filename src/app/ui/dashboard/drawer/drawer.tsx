import { handleSignOut } from '@/app/lib/actions/authentication/actionManager';
import { DashboardDrawerContent } from './drawer-content';
import { DrawerState } from './drawer-style';

export const DashboardDrawer = ({ open, setOpen }: DrawerState) => {
  return (
    <DashboardDrawerContent
      open={open}
      setOpen={setOpen}
      actionDispatch={handleSignOut}
    />
  );
};
