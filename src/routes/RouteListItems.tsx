import type { RouteItem } from '@/routes/routes.ts';
import { lazy } from 'react';

export const mainRoutesList: RouteItem[] = [
  {
    key: 1,
    name: 'Dashboard',
    path: '/dashboard',
    LazyComponent: lazy(
      () => import('@/pages/Dashboard/Container/DashboardContainer')
    ),
    exact: true,
    isPrivate: true,
  },
  {
    key: 2,
    name: 'Login',
    path: '/',
    LazyComponent: lazy(
      () => import('@pages/Login/container/loginFormContainer.tsx')
    ),
    exact: true,
    isPrivate: false,
  },
  {
    key: 3,
    name: 'Data',
    path: '/data',
    LazyComponent: lazy(() => import('@/pages/Data/Dashboard.tsx')),
    exact: true,
    isPrivate: true,
  },
  {
    key: 4,
    name: 'Not Found',
    path: '*',
    LazyComponent: lazy(() => import('@pages/NotFound/NotFound.tsx')),
    exact: true,
    isPrivate: false,
  },
];
