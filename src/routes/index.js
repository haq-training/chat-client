import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// import MainLayout from '../layouts/main';
// import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// import GuestGuard from '../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// import { PATH_AFTER_LOGIN } from '../config';
import LoadingScreen from '../components/LoadingScreen';
import { DashboardLayout } from '../layouts/dashboard';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes(`/quan-ly`)} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/auth',
      children: [
        {
          path: 'dang-nhap',
          element: <Login />,
        },
        {
          path: 'dang-ky',
          element: <Register />,
        },
        {
          path: 'reset-mat-khau',
          element: <ResetPassword/>
        },
      ],
    },
    // Dashboard Routes
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/chat', element: <Chat /> },
        { path: '/thong-tin-tai-khoan', element: <UserAccount /> },
        { path: '/danh-ba-ban-be', element: <Contacts /> },
        { path: '/muc-ghim', element: <Pinned /> },
      ],
    },

    // Main Routes
    // {
    //   path: '*',
    //   // element: <LogoOnlyLayout />,
    //   children: [
    //     { path: 'coming-soon', element: <ComingSoon /> },
    //     { path: 'maintenance', element: <Maintenance /> },
    //     { path: '500', element: <Page500 /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" replace /> },
    //   ],
    // },
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [{ element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true }],
    // },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));


// MAIN
// const HomePage = Loadable(lazy(() => import('../pages/Home')));
// const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
// const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
// const Page500 = Loadable(lazy(() => import('../pages/Page500')));
// const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// main router
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
const Contacts = Loadable(lazy(() => import('../pages/dashboard/Contacts')));
const Pinned = Loadable(lazy(() => import('../pages/dashboard/Pinned')));
