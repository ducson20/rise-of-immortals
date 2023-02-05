import { ReactNode, ReactElement } from 'react';
import { Header, Footer, ProtectedRouter } from '@/components/layouts';
import { Box } from '@mui/material';
export interface IDefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps): ReactElement {
  return (
    <>
      <Header />
      <Box component="main"> {children}</Box>
      <Footer />
    </>
  );
}
