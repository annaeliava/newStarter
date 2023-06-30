import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/pages/planner`,
        component: React.lazy(() => import('views/app-views/pages/planner')),
    },
    {
        key: 'clients.list',
        path: `${APP_PREFIX_PATH}/clients/list`,
        component: React.lazy(() => import('views/app-views/pages/user-list')),
    },
    {
        key: 'edit.profile',
        path: `${APP_PREFIX_PATH}/edit-profile`,
        component: React.lazy(() => import('views/app-views/pages/setting/EditProfile')),
    }
]