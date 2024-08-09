import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { DashboardDrawer } from '../dashboard/drawer/drawer';
import {
  DashboardDrawerHeader,
  DrawerHeader,
} from '../dashboard/drawer/Drawer-header';
import Footer from '../footer';
import { ReactNode } from '@/app/lib/definitions';

export default function DashboardContents({ children }: ReactNode) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DashboardDrawerHeader />
        <DashboardDrawer />
        <Box
          component="div"
          className="flex min-h-screen w-full flex-col bg-white dark:bg-black"
        >
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <DrawerHeader />
            <div className="mb-10 mt-5 px-4 md:mb-20 md:mt-10 md:px-10">
              {children}
            </div>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
