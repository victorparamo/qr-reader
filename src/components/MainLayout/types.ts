import { ReactNode, ReactElement } from 'react';

export interface DrawerElements {
  name: string;
  route: string;
  icon: ReactElement;
}

export interface MainLayoutProps {
  title: string;
  drawerElements: Array<DrawerElements>;
  children: ReactNode;
}
