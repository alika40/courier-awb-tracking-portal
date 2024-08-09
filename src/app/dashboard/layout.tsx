'use client';

import { ReactNode } from '../lib/definitions';
import DashboardContainer from '../ui/dashboard/dashboard';

const DashboardLayout = ({ children }: ReactNode) => (
  <DashboardContainer>{children}</DashboardContainer>
);

export default DashboardLayout;
