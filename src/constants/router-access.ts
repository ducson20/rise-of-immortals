import { lazy } from 'react';
import { SCREEN_LAYOUT } from '@/constants/index';

const authRoutes = [
  {
    path: '/',
    component: lazy(() => import('@/views/home/Home')),
    layout: SCREEN_LAYOUT.defaultLayout,
  },
];

export { authRoutes };
