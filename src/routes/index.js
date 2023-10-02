import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
import { PATH_AFTER_LOGIN } from '../config';
import { SINGLE_KEY_PATH } from './paths';
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
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'dang-ky',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'doi-mat-khau', element: <ResetPassword /> },
      ],
    },
    // Dashboard Routes
    {
      path: SINGLE_KEY_PATH.dashboard,
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: 'app', element: <GeneralApp /> },
        { path: 'cai-dat', element: <Settings /> },
        { path: 'goi-dien', element: <Call /> },
        { path: 'thong-tin', element: <UserAccount /> },
        { path: 'danh-ba', element: <Contacts /> },
        { path: 'muc-ghim', element: <BookMark /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true }],
    },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
// main router
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const Contacts = Loadable(lazy(() => import('../pages/dashboard/Contacts')));
const BookMark = Loadable(lazy(() => import('../pages/dashboard/BookMark')));
const Settings = Loadable(lazy(() => import('../pages/dashboard/Settings')));
const Call = Loadable(lazy(() => import('../pages/dashboard/Call')));
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
