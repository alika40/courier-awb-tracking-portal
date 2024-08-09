import { handleSignOut } from '@/app/lib/actions/authentication/actionManager';
import { DashboardDrawerContent } from './drawer-content';
// import { DrawerState } from './drawer-style';

export const DashboardDrawer = () => {
  return <DashboardDrawerContent actionDispatch={handleSignOut} />;
};
