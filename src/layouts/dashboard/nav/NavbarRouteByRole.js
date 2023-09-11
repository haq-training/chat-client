// // noinspection DuplicatedCode

// import { SSM_PATH_DASHBOARD } from '../../../routes/paths';
// import { ICONS } from './constantItems';
//
// export const chat = [
//   {
//     items: [
//       {
//         title: 'Hành chính',
//         path: SSM_PATH_DASHBOARD.administrative,
//         icon: ICONS.label,
//         children: [
//           {
//             title: 'Lý lịch nhân viên',
//             path: SSM_PATH_DASHBOARD.user.root,
//             icon: ICONS.user,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.user.new },
//             ],
//           },
//           { title: 'Bảng chấm công', icon: ICONS.calendar, path: SSM_PATH_DASHBOARD.timesheets },
//           {
//             title: 'Quy định, Quy chế',
//             path: SSM_PATH_DASHBOARD.regulation.root,
//             icon: ICONS.lock,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.regulation.new },
//             ],
//           },
//           {
//             title: 'Khen thưởng, Kỷ luật',
//             path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
//             icon: ICONS.kanban,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.rewardDiscipline.new },
//             ],
//           },
//           {
//             title: 'Hướng dẫn bán hàng',
//             path: SSM_PATH_DASHBOARD.salesGuide.root,
//             icon: ICONS.chat,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.salesGuide.new },
//             ],
//           },
//           {
//             title: 'Hồ sơ năng lực',
//             path: SSM_PATH_DASHBOARD.capacityProfile.root,
//             icon: ICONS.folder,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.capacityProfile.new },
//             ],
//           },
//           {
//             title: 'Bảng tin nội bộ',
//             icon: ICONS.blog,
//             path: SSM_PATH_DASHBOARD.blog.root,
//             children: [
//               { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
//             ],
//           },
//
//           { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },
//
//           { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },
//
//           {
//             title: 'Tuyển dụng',
//             path: SSM_PATH_DASHBOARD.recruitment.root,
//             icon: ICONS.mail,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.recruitment.new },
//             ],
//           },
//
//           { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
//         ],
//       },
//       {
//         title: 'Bán hàng',
//         path: SSM_PATH_DASHBOARD.rootSaleMenu,
//         icon: ICONS.invoice,
//         children: [
//           { title: 'Tồn kho', path: SSM_PATH_DASHBOARD.inventory, icon: ICONS.inventory },
//           { title: 'Bảng giá chung', path: SSM_PATH_DASHBOARD.priceList.root, icon: ICONS.priceList },
//           {
//             title: 'Khách hàng',
//             path: SSM_PATH_DASHBOARD.customer.root,
//             icon: ICONS.customer,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.customer.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.customer.new },
//             ],
//           },
//           { title: 'Tất cả đơn hàng', path: SSM_PATH_DASHBOARD.saleAndMarketing.list, icon: ICONS.orderList },
//           {
//             title: 'Lệnh xuất hàng ',
//             path: SSM_PATH_DASHBOARD.deliveryOrderForSale.root,
//             icon: ICONS.fastDelivery,
//             children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrderForSale.list }],
//           },
//           { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
//           { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
//         ],
//       },
//       {
//         title: 'vận tải',
//         path: SSM_PATH_DASHBOARD.rootTruckingMenu,
//         icon: ICONS.truckManagement,
//         children: [
//           {
//             title: 'Lệnh xuất hàng',
//             path: SSM_PATH_DASHBOARD.deliveryOrder.root,
//             icon: ICONS.fastDelivery,
//             children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrder.list }],
//           },
//           {
//             title: 'Lệnh gom hàng ',
//             path: SSM_PATH_DASHBOARD.collectionOrder.root,
//             icon: ICONS.cart,
//             children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.collectionOrder.list }],
//           },
//           {
//             title: 'Xe, Phương tiện',
//             path: SSM_PATH_DASHBOARD.transportation.root,
//             icon: ICONS.forklift,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.transportation.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.transportation.new },
//             ],
//           },
//           {
//             title: 'Lái xe, phụ xe',
//             path: SSM_PATH_DASHBOARD.driver.root,
//             icon: ICONS.driver,
//             children: [
//               { title: 'Danh sách', path: SSM_PATH_DASHBOARD.driver.list },
//               { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.driver.new },
//             ],
//           },
//           {
//             title: 'Lộ trình giao hàng',
//             path: SSM_PATH_DASHBOARD.reportDrivingRoute.root,
//             icon: ICONS.route,
//             children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.reportDrivingRoute.list }],
//           },
//           { title: 'Lịch sửa chữa', path: SSM_PATH_DASHBOARD.repairCalendar.root, icon: ICONS.calendar },
//         ],
//       },
//     ],
//   },
// ];

import React from 'react';
import { styled } from '@mui/material/styles';

// CSS cho BodyStyle
const BodyStyle = styled('body')(({ theme }) => ({
  fontFamily: 'Lato, sans-serif',
  fontSize: '100%',
  overflowY: 'scroll',
  msTextSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  backgroundColor: '#fefefe',
}));

// CSS cho LinkStyle
const LinkStyle = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  transition: 'all 0.6s ease',

  '&:hover': {
    transition: 'all 0.6s ease',
  },
}));

// CSS cho AppStyle
const AppStyle = styled('section')(({ theme }) => ({
  height: '100vh',
}));

// CSS cho SidebarStyle
const SidebarStyle = styled('aside')(({ theme }) => ({
  position: 'absolute',
  width: '17em',
  height: '100%',
  top: 0,
  overflow: 'hidden',
  backgroundColor: '#19222a',
  WebkitTransform: 'translateZ(0)',
  visibility: 'visible',
  WebkitBackfaceVisibility: 'hidden',
}));

// CSS cho HeaderStyle trong .sidebar
const HeaderStyle = styled('header')(({ theme }) => ({
  backgroundColor: '#09f',
  width: '100%',
  display: 'block',
  padding: '0.75em 1em',
}));

// CSS cho SidebarNavStyle
const SidebarNavStyle = styled('nav')(({ theme }) => ({
  position: 'fixed',
  backgroundColor: '#19222a',
  height: '100%',
  fontWeight: 400,
  fontSize: '1.2em',
  paddingBottom: '6em',
  zIndex: 9,
  overflow: 'hidden,auto',
  WebkitOverflowScrolling: 'touch',
}));

// CSS cho UlStyle trong .sidebar-nav
const UlStyle = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'block',
  padding: 0,
  margin: 0,
}));

// CSS cho LiStyle trong .sidebar-nav
const LiStyle = styled('li')(({ theme }) => ({
  marginLeft: 0,
  paddingLeft: 0,
  display: 'inline-block',
  width: '100%',
}));

// CSS cho NavLinkStyle trong .sidebar-nav ul li
const NavLinkStyle = styled('a')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '0.75em',
  padding: '1.05em 1em',
  position: 'relative',
  display: 'block',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    transition: 'all 0.6s ease',
  },
}));

// CSS cho IStyle trong .sidebar-nav ul li
const IStyle = styled('i')(({ theme }) => ({
  fontSize: '1.8em',
  paddingRight: '0.5em',
  width: '9em',
  display: 'inline',
  verticalAlign: 'middle',
}));

// CSS cho AfterStyle của a trong .sidebar-nav ul li
const AfterStyle = styled('div')(({ theme }) => ({
  content: "'\\f125'",
  fontFamily: 'ionicons',
  fontSize: '0.5em',
  width: '10px',
  color: '#fff',
  position: 'absolute',
  right: '0.75em',
  top: '45%',
}));

// CSS cho NavFlyoutStyle
const NavFlyoutStyle = styled('div')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: '#080d11',
  zIndex: 9,
  left: '2.5em',
  top: 0,
  height: '100vh',
  transform: 'translateX(100%)',
  transition: 'all 0.5s ease',
}));

// CSS cho hover của NavFlyoutLinkStyle trong .nav-flyout
const NavFlyoutLinkStyle = styled('a')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
}));

// CSS cho hover của LiHoverStyle trong .sidebar-nav
const LiHoverStyle = styled('li')(({ theme }) => ({
  '& .nav-flyout': {
    transform: 'translateX(0)',
    transition: 'all 0.5s ease',
  },
}));

function Sidebar() {
  return (
    <>
      <BodyStyle>Your body content here</BodyStyle>
      <LinkStyle>Your link content here</LinkStyle>
      <AppStyle>
        <SidebarStyle>
          <HeaderStyle>Menu</HeaderStyle>
          <SidebarNavStyle>
            <UlStyle>
              <LiStyle>
                <NavLinkStyle href="#">
                  <IStyle className="ion-bag" /> <span>Shop</span>
                </NavLinkStyle>
                <NavFlyoutStyle>
                  <LiStyle>
                    <NavLinkStyle href="#">
                      <IStyle className="ion-ios-color-filter-outline" />
                      Derps
                    </NavLinkStyle>
                  </LiStyle>
                  <LiStyle>
                    <NavLinkStyle href="#">
                      <IStyle className="ion-ios-clock-outline" />
                      Times
                    </NavLinkStyle>
                  </LiStyle>
                  <LiStyle>
                    <NavLinkStyle href="#">
                      <IStyle className="ion-android-star-outline" />
                      Hates
                    </NavLinkStyle>
                  </LiStyle>
                  <LiStyle>
                    <NavLinkStyle href="#">
                      <IStyle className="ion-heart-broken" />
                      Beat
                    </NavLinkStyle>
                  </LiStyle>
                </NavFlyoutStyle>
              </LiStyle>
              <LiStyle>
                <NavLinkStyle href="#">
                  <IStyle className="ion-ios-medical-outline" /> <span className="">Cocaine</span>
                </NavLinkStyle>
              </LiStyle>
            </UlStyle>
          </SidebarNavStyle>
        </SidebarStyle>
      </AppStyle>
    </>
  );
}

export default Sidebar;
