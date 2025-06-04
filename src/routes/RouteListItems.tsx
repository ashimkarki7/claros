import type {RouteItem} from '@/routes/routes.ts';
import {lazy} from 'react';

export const mainRoutesList: RouteItem[] = [
    {
        key: 1,
        name: "Dashboard",
        path: "/dashboard",
        LazyComponent:  lazy(()=> import("@/pages/Dashboard/Dashboard.tsx")),
        exact: true,
        isPrivate: true,
    },
    {
            key: 2,
        name: "Login",
        path: "/",
        LazyComponent:  lazy(()=> import("@/pages/Login/Login.tsx")),
        exact: true,
        isPrivate: false,
    },
];