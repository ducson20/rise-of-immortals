import { ReactNode } from 'react';

import { useEffect } from 'react';
import { useAuth } from '@/hooks';

export interface IProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: IProtectedLayoutProps) {
  // const router = useRouter();
  // const { profile, firstLoading } = useAuth();

  // useEffect(() => {
  //   if (!firstLoading && !profile?.username) {
  //     // router.push('/login');
  //   }
  // }, [profile, firstLoading]);

  // if (!profile?.username) return <div>Loading...</div>;

  return children;
}
