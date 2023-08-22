// noinspection DuplicatedCode

import { SSM_PATH_DASHBOARD } from '../../../routes/paths';
import { ICONS } from './constantItems';

export const adminNavConfig = [
  {
    items: [
      {
        title: 'Hành chính',
        path: SSM_PATH_DASHBOARD.administrative,
        icon: ICONS.label,
        children: [
          {
            title: 'Lý lịch nhân viên',
            path: SSM_PATH_DASHBOARD.user.root,
            icon: ICONS.user,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.user.new },
            ],
          },
          { title: 'Bảng chấm công', icon: ICONS.calendar, path: SSM_PATH_DASHBOARD.timesheets },
          {
            title: 'Quy định, Quy chế',
            path: SSM_PATH_DASHBOARD.regulation.root,
            icon: ICONS.lock,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.regulation.new },
            ],
          },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
            icon: ICONS.kanban,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.rewardDiscipline.new },
            ],
          },
          {
            title: 'Hướng dẫn bán hàng',
            path: SSM_PATH_DASHBOARD.salesGuide.root,
            icon: ICONS.chat,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.salesGuide.new },
            ],
          },
          {
            title: 'Hồ sơ năng lực',
            path: SSM_PATH_DASHBOARD.capacityProfile.root,
            icon: ICONS.folder,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.capacityProfile.new },
            ],
          },
          {
            title: 'Bảng tin nội bộ',
            icon: ICONS.blog,
            path: SSM_PATH_DASHBOARD.blog.root,
            children: [
              { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
            ],
          },

          { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },

          { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },

          {
            title: 'Tuyển dụng',
            path: SSM_PATH_DASHBOARD.recruitment.root,
            icon: ICONS.mail,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.recruitment.new },
            ],
          },

          { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
        ],
      },
      {
        title: 'Bán hàng',
        path: SSM_PATH_DASHBOARD.rootSaleMenu,
        icon: ICONS.invoice,
        children: [
          { title: 'Tồn kho', path: SSM_PATH_DASHBOARD.inventory, icon: ICONS.inventory },
          { title: 'Bảng giá chung', path: SSM_PATH_DASHBOARD.priceList.root, icon: ICONS.priceList },
          {
            title: 'Khách hàng',
            path: SSM_PATH_DASHBOARD.customer.root,
            icon: ICONS.customer,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.customer.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.customer.new },
            ],
          },
          { title: 'Tất cả đơn hàng', path: SSM_PATH_DASHBOARD.saleAndMarketing.list, icon: ICONS.orderList },
          {
            title: 'Lệnh xuất hàng ',
            path: SSM_PATH_DASHBOARD.deliveryOrderForSale.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrderForSale.list }],
          },
          { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
          { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
        ],
      },
      {
        title: 'vận tải',
        path: SSM_PATH_DASHBOARD.rootTruckingMenu,
        icon: ICONS.truckManagement,
        children: [
          {
            title: 'Lệnh xuất hàng',
            path: SSM_PATH_DASHBOARD.deliveryOrder.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrder.list }],
          },
          {
            title: 'Lệnh gom hàng ',
            path: SSM_PATH_DASHBOARD.collectionOrder.root,
            icon: ICONS.cart,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.collectionOrder.list }],
          },
          {
            title: 'Xe, Phương tiện',
            path: SSM_PATH_DASHBOARD.transportation.root,
            icon: ICONS.forklift,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.transportation.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.transportation.new },
            ],
          },
          {
            title: 'Lái xe, phụ xe',
            path: SSM_PATH_DASHBOARD.driver.root,
            icon: ICONS.driver,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.driver.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.driver.new },
            ],
          },
          {
            title: 'Lộ trình giao hàng',
            path: SSM_PATH_DASHBOARD.reportDrivingRoute.root,
            icon: ICONS.route,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.reportDrivingRoute.list }],
          },
          { title: 'Lịch sửa chữa', path: SSM_PATH_DASHBOARD.repairCalendar.root, icon: ICONS.calendar },
        ],
      },
    ],
  },
];

export const directorNavConfig = [
  {
    items: [
      {
        title: 'Hành chính',
        path: SSM_PATH_DASHBOARD.administrative,
        icon: ICONS.label,
        children: [
          {
            title: 'Lý lịch nhân viên',
            path: SSM_PATH_DASHBOARD.user.root,
            icon: ICONS.user,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.user.new },
            ],
          },
          { title: 'Bảng chấm công', icon: ICONS.calendar, path: SSM_PATH_DASHBOARD.timesheets },
          {
            title: 'Quy định, Quy chế',
            path: SSM_PATH_DASHBOARD.regulation.root,
            icon: ICONS.lock,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.regulation.new },
            ],
          },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
            icon: ICONS.kanban,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.rewardDiscipline.new },
            ],
          },
          {
            title: 'Hướng dẫn bán hàng',
            path: SSM_PATH_DASHBOARD.salesGuide.root,
            icon: ICONS.chat,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.salesGuide.new },
            ],
          },
          {
            title: 'Hồ sơ năng lực',
            path: SSM_PATH_DASHBOARD.capacityProfile.root,
            icon: ICONS.folder,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.capacityProfile.new },
            ],
          },
          {
            title: 'Bảng tin nội bộ',
            icon: ICONS.blog,
            path: SSM_PATH_DASHBOARD.blog.root,
            children: [
              { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
            ],
          },

          { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },

          { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },

          {
            title: 'Tuyển dụng',
            path: SSM_PATH_DASHBOARD.recruitment.root,
            icon: ICONS.mail,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.recruitment.new },
            ],
          },

          { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
        ],
      },
      {
        title: 'Bán hàng',
        path: SSM_PATH_DASHBOARD.rootSaleMenu,
        icon: ICONS.invoice,
        children: [
          { title: 'Tồn kho', path: SSM_PATH_DASHBOARD.inventory, icon: ICONS.inventory },
          { title: 'Bảng giá chung', path: SSM_PATH_DASHBOARD.priceList.root, icon: ICONS.priceList },
          {
            title: 'Khách hàng',
            path: SSM_PATH_DASHBOARD.customer.root,
            icon: ICONS.customer,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.customer.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.customer.new },
            ],
          },
          { title: 'Tất cả đơn hàng', path: SSM_PATH_DASHBOARD.saleAndMarketing.list, icon: ICONS.orderList },
          {
            title: 'Lệnh xuất hàng ',
            path: SSM_PATH_DASHBOARD.deliveryOrderForSale.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrderForSale.list }],
          },
          { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
          { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
        ],
      },
      {
        title: 'vận tải',
        path: SSM_PATH_DASHBOARD.rootTruckingMenu,
        icon: ICONS.truckManagement,
        children: [
          {
            title: 'Lệnh xuất hàng',
            path: SSM_PATH_DASHBOARD.deliveryOrder.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrder.list }],
          },
          {
            title: 'Xe, Phương tiện',
            path: SSM_PATH_DASHBOARD.transportation.root,
            icon: ICONS.forklift,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.transportation.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.transportation.new },
            ],
          },
          {
            title: 'Lái xe, phụ xe',
            path: SSM_PATH_DASHBOARD.driver.root,
            icon: ICONS.driver,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.driver.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.driver.new },
            ],
          },
          {
            title: 'Lộ trình giao hàng',
            path: SSM_PATH_DASHBOARD.reportDrivingRoute.root,
            icon: ICONS.route,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.reportDrivingRoute.list }],
          },
          { title: 'Lịch sửa chữa', path: SSM_PATH_DASHBOARD.repairCalendar.root, icon: ICONS.calendar },
        ],
      },
    ],
  },
];

export const accountantNavConfig = [
  {
    items: [
      {
        title: 'Hành chính',
        path: SSM_PATH_DASHBOARD.administrative,
        icon: ICONS.label,
        children: [
          {
            title: 'Lý lịch nhân viên',
            path: SSM_PATH_DASHBOARD.user.root,
            icon: ICONS.user,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list }],
          },
          { title: 'Bảng chấm công', path: SSM_PATH_DASHBOARD.timesheets, icon: ICONS.calendar },
          {
            title: 'Quy định, Quy chế',
            path: SSM_PATH_DASHBOARD.regulation.root,
            icon: ICONS.lock,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list }],
          },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
            icon: ICONS.kanban,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list }],
          },
          {
            title: 'Hướng dẫn bán hàng',
            path: SSM_PATH_DASHBOARD.salesGuide.root,
            icon: ICONS.chat,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list }],
          },
          {
            title: 'Hồ sơ năng lực',
            path: SSM_PATH_DASHBOARD.capacityProfile.root,
            icon: ICONS.folder,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list }],
          },
          {
            title: 'Bảng tin nội bộ',
            icon: ICONS.blog,
            path: SSM_PATH_DASHBOARD.blog.root,
            children: [
              { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
            ],
          },

          { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },

          { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },

          {
            title: 'Tuyển dụng',
            path: SSM_PATH_DASHBOARD.recruitment.root,
            icon: ICONS.mail,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list }],
          },

          { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
        ],
      },
      {
        title: 'Bán hàng',
        path: SSM_PATH_DASHBOARD.rootSaleMenu,
        icon: ICONS.invoice,
        children: [
          { title: 'Tồn kho', path: SSM_PATH_DASHBOARD.inventory, icon: ICONS.inventory },
          { title: 'Bảng giá chung', path: SSM_PATH_DASHBOARD.priceList.root, icon: ICONS.priceList },
          { title: 'Theo dõi đơn hàng', path: SSM_PATH_DASHBOARD.saleAndMarketing.list, icon: ICONS.orderList },
          {
            title: 'Lệnh xuất hàng',
            path: SSM_PATH_DASHBOARD.deliveryOrderForSale.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrderForSale.list }],
          },
          { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
          { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
        ],
      },
    ],
  },
];

export const salesNavConfig = [
  {
    items: [
      {
        title: 'Hành chính',
        path: SSM_PATH_DASHBOARD.administrative,
        icon: ICONS.label,
        children: [
          {
            title: 'Lý lịch nhân viên',
            path: SSM_PATH_DASHBOARD.user.root,
            icon: ICONS.user,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list }],
          },
          { title: 'Bảng chấm công', path: SSM_PATH_DASHBOARD.timesheets, icon: ICONS.calendar },
          {
            title: 'Quy định, Quy chế',
            path: SSM_PATH_DASHBOARD.regulation.root,
            icon: ICONS.lock,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list }],
          },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
            icon: ICONS.kanban,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list }],
          },
          {
            title: 'Hướng dẫn bán hàng',
            path: SSM_PATH_DASHBOARD.salesGuide.root,
            icon: ICONS.chat,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list }],
          },
          {
            title: 'Hồ sơ năng lực',
            path: SSM_PATH_DASHBOARD.capacityProfile.root,
            icon: ICONS.folder,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list }],
          },
          {
            title: 'Bảng tin nội bộ',
            icon: ICONS.blog,
            path: SSM_PATH_DASHBOARD.blog.root,
            children: [
              { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
            ],
          },

          { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },

          { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },

          {
            title: 'Tuyển dụng',
            path: SSM_PATH_DASHBOARD.recruitment.root,
            icon: ICONS.mail,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list }],
          },

          { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
        ],
      },
      {
        title: 'Bán hàng',
        path: SSM_PATH_DASHBOARD.rootSaleMenu,
        icon: ICONS.invoice,
        children: [
          { title: 'Tồn kho', path: SSM_PATH_DASHBOARD.inventory, icon: ICONS.inventory },
          { title: 'Bảng giá chung', path: SSM_PATH_DASHBOARD.priceList.root, icon: ICONS.priceList },
          {
            title: 'Khách hàng',
            path: SSM_PATH_DASHBOARD.customer.root,
            icon: ICONS.customer,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.customer.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.customer.new },
            ],
          },
          { title: 'BÁO GIÁ', path: SSM_PATH_DASHBOARD.saleAndMarketing.newQuotation, icon: ICONS.note },
          { title: 'THEO DÕI ĐƠN HÀNG', path: SSM_PATH_DASHBOARD.saleAndMarketing.list, icon: ICONS.orderList },
          {
            title: 'Lệnh xuất hàng',
            path: SSM_PATH_DASHBOARD.deliveryOrderForSale.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrderForSale.list }],
          },
          { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
          { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
        ],
      },
    ],
  },
];

export const transporterManagerNavConfig = [
  {
    items: [
      {
        title: 'Hành chính',
        path: SSM_PATH_DASHBOARD.administrative,
        icon: ICONS.label,
        children: [
          {
            title: 'Lý lịch nhân viên',
            path: SSM_PATH_DASHBOARD.user.root,
            icon: ICONS.user,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list }],
          },
          { title: 'Bảng chấm công', path: SSM_PATH_DASHBOARD.timesheets, icon: ICONS.calendar },
          {
            title: 'Quy định, Quy chế',
            path: SSM_PATH_DASHBOARD.regulation.root,
            icon: ICONS.lock,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list }],
          },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
            icon: ICONS.kanban,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list }],
          },
          {
            title: 'Hướng dẫn bán hàng',
            path: SSM_PATH_DASHBOARD.salesGuide.root,
            icon: ICONS.chat,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list }],
          },
          {
            title: 'Hồ sơ năng lực',
            path: SSM_PATH_DASHBOARD.capacityProfile.root,
            icon: ICONS.folder,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list }],
          },
          {
            title: 'Bảng tin nội bộ',
            icon: ICONS.blog,
            path: SSM_PATH_DASHBOARD.blog.root,
            children: [
              { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
            ],
          },

          { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },

          { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },

          {
            title: 'Tuyển dụng',
            path: SSM_PATH_DASHBOARD.recruitment.root,
            icon: ICONS.mail,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list }],
          },

          { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
        ],
      },
      {
        title: 'vận tải',
        path: SSM_PATH_DASHBOARD.rootTruckingMenu,
        icon: ICONS.truckManagement,
        children: [
          {
            title: 'Lệnh xuất hàng',
            path: SSM_PATH_DASHBOARD.deliveryOrder.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrder.list }],
          },
          {
            title: 'Lệnh gom hàng ',
            path: SSM_PATH_DASHBOARD.collectionOrder.root,
            icon: ICONS.cart,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.collectionOrder.list }],
          },
          {
            title: 'Xe, Phương tiện',
            path: SSM_PATH_DASHBOARD.transportation.root,
            icon: ICONS.forklift,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.transportation.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.transportation.new },
            ],
          },
          {
            title: 'Lái xe, phụ xe',
            path: SSM_PATH_DASHBOARD.driver.root,
            icon: ICONS.driver,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.driver.list },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.driver.new },
            ],
          },
          {
            title: 'Lộ trình giao hàng',
            path: SSM_PATH_DASHBOARD.reportDrivingRoute.root,
            icon: ICONS.route,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.reportDrivingRoute.list }],
          },
          { title: 'Lịch sửa chữa', path: SSM_PATH_DASHBOARD.repairCalendar.root, icon: ICONS.calendar },
          { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
          { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
        ],
      },
    ],
  },
];

export const driverNavConfig = [
  {
    items: [
      {
        title: 'Hành chính',
        path: SSM_PATH_DASHBOARD.administrative,
        icon: ICONS.label,
        children: [
          {
            title: 'Lý lịch nhân viên',
            path: SSM_PATH_DASHBOARD.user.root,
            icon: ICONS.user,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.user.list }],
          },
          { title: 'Bảng chấm công', path: SSM_PATH_DASHBOARD.timesheets, icon: ICONS.calendar },
          {
            title: 'Quy định, Quy chế',
            path: SSM_PATH_DASHBOARD.regulation.root,
            icon: ICONS.lock,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.regulation.list }],
          },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: SSM_PATH_DASHBOARD.rewardDiscipline.root,
            icon: ICONS.kanban,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.rewardDiscipline.list }],
          },
          {
            title: 'Hướng dẫn bán hàng',
            path: SSM_PATH_DASHBOARD.salesGuide.root,
            icon: ICONS.chat,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.salesGuide.list }],
          },
          {
            title: 'Hồ sơ năng lực',
            path: SSM_PATH_DASHBOARD.capacityProfile.root,
            icon: ICONS.folder,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.capacityProfile.list }],
          },
          {
            title: 'Bảng tin nội bộ',
            icon: ICONS.blog,
            path: SSM_PATH_DASHBOARD.blog.root,
            children: [
              { title: 'Tin tức mới', path: SSM_PATH_DASHBOARD.blog.posts },
              { title: 'Tạo mới', path: SSM_PATH_DASHBOARD.blog.new },
            ],
          },

          { title: 'Thư viện', path: SSM_PATH_DASHBOARD.files.root, icon: ICONS.folder },

          { title: 'sơ đồ nhân sự', path: SSM_PATH_DASHBOARD.staff.root, icon: ICONS.menuItem },

          {
            title: 'Tuyển dụng',
            path: SSM_PATH_DASHBOARD.recruitment.root,
            icon: ICONS.mail,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.recruitment.list }],
          },

          { title: 'Lịch làm việc', path: SSM_PATH_DASHBOARD.calendar, icon: ICONS.calendar },
        ],
      },
      {
        title: 'vận tải',
        path: SSM_PATH_DASHBOARD.rootTruckingMenu,
        icon: ICONS.truckManagement,
        children: [
          {
            title: 'Lệnh xuất hàng',
            path: SSM_PATH_DASHBOARD.deliveryOrder.root,
            icon: ICONS.fastDelivery,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.deliveryOrder.list }],
          },
          {
            title: 'Lệnh gom hàng ',
            path: SSM_PATH_DASHBOARD.collectionOrder.root,
            icon: ICONS.cart,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.collectionOrder.list }],
          },
          {
            title: 'Xe, Phương tiện',
            path: SSM_PATH_DASHBOARD.transportation.root,
            icon: ICONS.forklift,
            children: [
              { title: 'Danh sách', path: SSM_PATH_DASHBOARD.transportation.list },
            ],
          },
          {
            title: 'Lộ trình giao hàng',
            path: SSM_PATH_DASHBOARD.reportDrivingRoute.root,
            icon: ICONS.route,
            children: [{ title: 'Danh sách', path: SSM_PATH_DASHBOARD.reportDrivingRoute.list }],
          },
          { title: 'Lịch sửa chữa', path: SSM_PATH_DASHBOARD.repairCalendar.root, icon: ICONS.calendar },
          { title: 'Tra cước vận chuyển', path: SSM_PATH_DASHBOARD.checkFreight, icon: ICONS.shippingCost },
          { title: 'Tra cứu đơn trọng', path: SSM_PATH_DASHBOARD.checkProductWeight, icon: ICONS.kilogram },
        ],
      },
    ],
  },
];
