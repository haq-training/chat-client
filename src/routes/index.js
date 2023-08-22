import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// import MainLayout from '../layouts/main';
// import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// import GuestGuard from '../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// import { PATH_AFTER_LOGIN } from '../config';
import LoadingScreen from '../components/LoadingScreen';
import { SINGLE_KEY_PATH } from './paths';
// import { DashboardLayout } from '../layouts/dashboard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// import { Role } from '../constant';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes(`/${SINGLE_KEY_PATH.dashboard}`)} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: SINGLE_KEY_PATH.auth,
      children: [
        {
          path: SINGLE_KEY_PATH.login,
          element: (
            // <GuestGuard>
              <Login />
            // </GuestGuard>
          ),
        },
        {
          path: SINGLE_KEY_PATH.register,
          element: (
            // <GuestGuard>
              <Register />
            // </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    // {
    //   path: SINGLE_KEY_PATH.dashboard,
    //   element: (
    //     <AuthGuard>
    //       <DashboardLayout />
    //     </AuthGuard>
    //   ),
    //   children: [
    //     { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}`,
    //       element: (
    //         <Navigate
    //           to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.user}/danh-sach`}
    //           replace
    //         />
    //       ),
    //     },
    //     // Menu hành chính
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.user}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.user}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'tao-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <UserCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         { path: 'danh-sach', element: <UserList /> },
    //         { path: 'cards', element: <UserCards /> },
    //         {
    //           path: ':id/chinh-sua',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <UserUpdate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.timesheets}`,
    //       element: <Timesheets />,
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.staff}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.staff}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         { path: 'danh-sach', element: <StaffList /> },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.blog}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.blog}/tat-ca-bai-viet`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         { path: 'tat-ca-bai-viet', element: <BlogPosts /> },
    //         { path: 'bai-viet/:idNews', element: <BlogPost /> },
    //         { path: 'tao-bai-viet-moi', element: <BlogNewPost /> },
    //         { path: ':idNews/cap-nhat', element: <BlogNewPost /> },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.regulation}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.regulation}/ds-noi-quy`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'tao-quy-dinh-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <RegulationNew />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         { path: 'ds-noi-quy', element: <CompanyRegulations /> },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <RegulationNewEdit />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.rewardDiscipline}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.rewardDiscipline}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         { path: 'danh-sach', element: <RewardAndDisciplines /> },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <RewardAndDisciplineEdit />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-khen-thuong-ky-luat-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <RewardAndDisciplineNew />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.salesGuide}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.salesGuide}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         { path: 'danh-sach', element: <SalesGuides /> },
    //         {
    //           path: 'tao-huong-dan-ban-hang',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <SalesGuideNewEdit />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <SalesGuideUpdate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.capacityProfile}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.capacityProfile}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         { path: 'danh-sach', element: <CapacityProfiles /> },
    //         {
    //           path: 'tao-ho-so-nang-luc-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <CapacityProfileNewEdit />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <CapacityProfileEdit />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.recruitment}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.recruitment}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         { path: 'danh-sach', element: <Recruitments /> },
    //         {
    //           path: 'tao-tuyen-dung-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <RecruitmentNewEdit />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <RecruitmentUpdate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.administrative}/${SINGLE_KEY_PATH.files}`,
    //       element: <FilesFolder />,
    //     },
    //     { path: `${SINGLE_KEY_PATH.administrative}/calendar`, element: <Calendar /> },
    //     // Menu bán hàng
    //     {
    //       path: `${SINGLE_KEY_PATH.rootSaleMenu}`,
    //       element: (
    //         <Navigate
    //           to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.sale}/danh-sach`}
    //           replace
    //         />
    //       ),
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.priceList}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.priceList}/bao-gia-chung`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'bao-gia-chung',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <GeneralPriceList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'bao-gia-thep/:id/:name',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <PriceList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-moi-danh-muc-sp',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director]}>
    //               <CategoryProductCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'bao-gia-thep/bao-gia-hinh-anh/:id',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <PriceListImage />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.customer}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.customer}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <CustomerList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-moi',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <CustomerCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.sale}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.sale}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <OrderList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-bao-gia',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.sales]}>
    //               <CreateNewQuotationVer2 />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[
    //                 Role.admin,
    //                 Role.director,
    //                 Role.accountant,
    //                 Role.sales,
    //                 Role.driver,
    //                 Role.transporterManager,
    //               ]}
    //             >
    //               <OrderDetails />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.deliveryOrderForSale}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootSaleMenu}/${SINGLE_KEY_PATH.deliveryOrderForSale}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}
    //             >
    //               <DeliveryOrderList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         { path: ':id', element: <ComingSoon /> },
    //         { path: ':id/cap-nhat', element: <ComingSoon /> },
    //       ],
    //     },
    //     { path: `${SINGLE_KEY_PATH.rootSaleMenu}/tra-cuoc-van-chuyen`, element: <CheckFreight /> },
    //     { path: `${SINGLE_KEY_PATH.rootSaleMenu}/tra-cuu-don-trong`, element: <CheckProductWeight /> },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootSaleMenu}/ton-kho`,
    //       element: (
    //         <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.accountant, Role.sales, Role.manager]}>
    //           <Inventory />
    //         </RoleBasedGuard>
    //       ),
    //     },
    //
    //     // Menu vận tải
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}`,
    //       element: (
    //         <Navigate
    //           to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.deliveryOrder}/danh-sach`}
    //           replace
    //         />
    //       ),
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.transportation}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.transportation}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[
    //                 Role.admin,
    //                 Role.director,
    //                 Role.transporterManager,
    //                 Role.driver,
    //                 Role.assistantDriver,
    //               ]}
    //             >
    //               <TransitCarList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <TransitCarCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         { path: ':id', element: <ComingSoon /> },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <TransitCarCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.collectionOrder}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.collectionOrder}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[
    //                 Role.admin,
    //                 Role.director,
    //                 Role.transporterManager,
    //                 Role.driver,
    //                 Role.assistantDriver,
    //               ]}
    //             >
    //               <CollectionOrderList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-lenh-gom-hang',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <CreateCollectionOrder />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <CreateCollectionOrder />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.driver}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.driver}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <DriverList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <DriverCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <DriverCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.deliveryOrder}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.deliveryOrder}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[
    //                 Role.admin,
    //                 Role.director,
    //                 Role.transporterManager,
    //                 Role.driver,
    //                 Role.assistantDriver,
    //               ]}
    //             >
    //               <DeliveryOrderList />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         { path: ':id', element: <ComingSoon /> },
    //         { path: ':id/cap-nhat', element: <ComingSoon /> },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.repairCalendar}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.repairCalendar}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[
    //                 Role.admin,
    //                 Role.director,
    //                 Role.transporterManager,
    //                 Role.driver,
    //                 Role.assistantDriver,
    //               ]}
    //             >
    //               <RepairCalendar />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.driver]}>
    //               <RepairCalendarCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.driver]}>
    //               <RepairCalendarCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //     {
    //       path: `${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.reportDrivingRoute}`,
    //       children: [
    //         {
    //           element: (
    //             <Navigate
    //               to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}/${SINGLE_KEY_PATH.reportDrivingRoute}/danh-sach`}
    //               replace
    //             />
    //           ),
    //           index: true,
    //         },
    //         {
    //           path: 'danh-sach',
    //           element: (
    //             <RoleBasedGuard
    //               accessibleRoles={[
    //                 Role.admin,
    //                 Role.director,
    //                 Role.transporterManager,
    //                 Role.driver,
    //                 Role.assistantDriver,
    //               ]}
    //             >
    //               <DrivingRoute />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: 'tao-lo-trinh-moi',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <DrivingRouteCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //         {
    //           path: ':id/cap-nhat',
    //           element: (
    //             <RoleBasedGuard accessibleRoles={[Role.admin, Role.director, Role.transporterManager]}>
    //               <DrivingRouteCreate />
    //             </RoleBasedGuard>
    //           ),
    //         },
    //       ],
    //     },
    //
    //     { path: 'tinh-luong', element: <Payroll /> },
    //     { path: 'luong-theo-doanh-thu', element: <ComingSoon /> },
    //     { path: SINGLE_KEY_PATH.app, element: <GeneralApp /> },
    //     { path: SINGLE_KEY_PATH.userAccount, element: <UserAccount /> },
    //     {
    //       path: SINGLE_KEY_PATH.repairCost,
    //       children: [
    //         {
    //           element: (
    //             <Navigate to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.repairCost}/danh-sach`} replace />
    //           ),
    //           index: true,
    //         },
    //         { path: ':id', element: <RepairCostDetail /> },
    //       ],
    //     },
    //     {
    //       path: SINGLE_KEY_PATH.product,
    //       children: [
    //         {
    //           element: <Navigate to={`/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.product}/danh-sach`} replace />,
    //           index: true,
    //         },
    //         { path: 'danh-sach', element: <EcommerceProductList /> },
    //         { path: 'shop', element: <SteelProductShop /> },
    //         { path: ':id', element: <EcommerceProductDetails /> },
    //         { path: 'tao-moi', element: <EcommerceProductCreate /> },
    //         { path: ':id/chinh-sua', element: <EcommerceProductCreate /> },
    //         { path: 'checkout', element: <EcommerceCheckout /> },
    //       ],
    //     },
    //   ],
    // },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
// const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
// const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// MAIN
// const HomePage = Loadable(lazy(() => import('../pages/Home')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

