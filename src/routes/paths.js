// ----------------------------------------------------------------------
export const SINGLE_KEY_PATH = {
  dashboard: 'dashboard',
  administrative: 'hanh-chinh',
  rootSaleMenu: 'ban-hang',
  rootTruckingMenu: 'van-tai',
  auth: 'auth',
  login: 'login',
  loginUnprotected: 'login-unprotected',
  register: 'register',
  registerUnprotected: 'register-unprotected',
  verify: 'verify',
  resetPassword: 'reset-password',
  app: 'app',
  userAccount: 'thong-tin-tai-khoan',
  product: 'san-pham',
  user: 'nguoi-dung',
  customer: 'khach-hang',
  sale: 'ban-hang',
  blog: 'blog',
  transportation: 'xe-phuong-tien',
  driver: 'lai-phu-xe',
  deliveryOrder: 'lenh-xuat-hang',
  collectionOrder: 'lenh-gom-hang',
  deliveryOrderForSale: 'xuat-hang-cho-ban-hang',
  priceList: 'bang-gia-chung',
  staff: 'nhan-vien',
  menu: 'pages',
  regulation: 'quy-dinh-quy-che',
  capacityProfile: 'ho-so-nang-luc',
  rewardDiscipline: 'khen-thuong-ky-luat',
  files: 'files',
  recruitment: 'tuyen-dung',
  repairCost: 'chi-phi-sua-chua',
  repairCalendar: 'lich-sua-chua',
  reportDrivingRoute: 'lo-trinh-lai-xe',
  checkFreight: 'tra-cuoc-van-chuyen',
  checkProductWeight: 'tra-cuu-don-trong',
  salesGuide: 'huong-dan-ban-hang',
  timesheets: 'bang-cham-cong',
  inventory: 'ton-kho',
};

function path(root, subLink) {
  return `${root}${subLink}`;
}

const ROOTS_AUTH = `/${SINGLE_KEY_PATH.auth}`;
const ROOTS_DASHBOARD = `/${SINGLE_KEY_PATH.dashboard}`;
const ROOTS_MENU = `/${SINGLE_KEY_PATH.menu}`;
const ADMINISTRATIVE_MENU = `/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.administrative}`;
const ROOT_SALE_MENU = `/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootSaleMenu}`;
const ROOT_TRUCKING_MENU = `/${SINGLE_KEY_PATH.dashboard}/${SINGLE_KEY_PATH.rootTruckingMenu}`;

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, `/${SINGLE_KEY_PATH.login}`),
  register: path(ROOTS_AUTH, `/${SINGLE_KEY_PATH.register}`),
  loginUnprotected: path(ROOTS_AUTH, `/${SINGLE_KEY_PATH.loginUnprotected}`),
  registerUnprotected: path(ROOTS_AUTH, `/${SINGLE_KEY_PATH.registerUnprotected}`),
  verify: path(ROOTS_AUTH, `/${SINGLE_KEY_PATH.verify}`),
  resetPassword: path(ROOTS_AUTH, `/${SINGLE_KEY_PATH.resetPassword}`),
};

export const PATH_MENU = {
  regulation: {
    root: path(ROOTS_MENU, `/${SINGLE_KEY_PATH.regulation}`),
    list: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.regulation}/ds-noi-quy`),
    view: (id) => path(ROOTS_MENU, `/${SINGLE_KEY_PATH.regulation}/${id}`),
  },
  rewardDiscipline: {
    root: path(ROOTS_MENU, `/${SINGLE_KEY_PATH.rewardDiscipline}`),
    view: (id) => path(ROOTS_MENU, `/${SINGLE_KEY_PATH.rewardDiscipline}/${id}`),
  },
  capacityProfile: {
    root: path(ROOTS_MENU, `/${SINGLE_KEY_PATH.capacityProfile}`),
    view: (id) => path(ROOTS_MENU, `/${SINGLE_KEY_PATH.capacityProfile}/${id}`),
  },
  recruitment: {
    root: path(ROOTS_MENU, `/${SINGLE_KEY_PATH.recruitment}`),
    view: (id) => path(ROOTS_MENU, `/${SINGLE_KEY_PATH.recruitment}/${id}`),
  },
};

export const PATH_DOCS = 'https://tcn.techbyq.app/';

export const SSM_PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  administrative: ADMINISTRATIVE_MENU,
  rootSaleMenu: ROOT_SALE_MENU,
  rootTruckingMenu: ROOT_TRUCKING_MENU,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    salaryBySale: path(ROOTS_DASHBOARD, '/luong-theo-doanh-thu'),
  },
  calendar: path(ADMINISTRATIVE_MENU, '/calendar'),
  payRoll: path(ROOTS_DASHBOARD, '/tinh-luong'),
  repairCost: {
    root: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.repairCost}`),
    list: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.repairCost}/danh-sach`),
    new: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.repairCost}/tao-moi`),
    view: (id) => path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.repairCost}/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.repairCost}/${id}/cap-nhat`),
  },
  repairCalendar: {
    root: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.repairCalendar}`),
    new: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.repairCalendar}/tao-moi`),
    list: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.repairCalendar}/danh-sach`),
    edit: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.repairCalendar}/${id}/cap-nhat`),
  },
  userAccount: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.userAccount}`),
  priceList: {
    root: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.priceList}/bao-gia-chung`),
    priceListProduct: (id, name) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.priceList}/bao-gia-thep/${id}/${name}`),
    new: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.priceList}/tao-moi-danh-muc-sp`),
    priceListImage: (id) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.priceList}/bao-gia-thep/bao-gia-hinh-anh/${id}`),
  },
  user: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}/tao-moi`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}/danh-sach`),
    cards: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}/cards`),
    profile: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}/profile`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}/${id}/chinh-sua`),
    demoEdit: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.user}/reece-chung/chinh-sua`),
  },
  transportation: {
    root: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.transportation}`),
    list: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.transportation}/danh-sach`),
    new: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.transportation}/tao-moi`),
    view: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.transportation}/${id}`),
    edit: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.transportation}/${id}/cap-nhat`),
    demoEdit: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.transportation}/vehicle-1/cap-nhat`),
  },
  driver: {
    root: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.driver}`),
    list: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.driver}/danh-sach`),
    new: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.driver}/tao-moi`),
    view: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.driver}/${id}`),
    edit: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.driver}/${id}/cap-nhat`),
    demoEdit: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.driver}/driver-id-02/cap-nhat`),
  },

  deliveryOrder: {
    root: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.deliveryOrder}`),
    list: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.deliveryOrder}/danh-sach`),
    view: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.deliveryOrder}/${id}`),
    edit: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.deliveryOrder}/${id}/cap-nhat`),
    demoEdit: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.deliveryOrder}/3/cap-nhat`),
  },

  collectionOrder: {
    root: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.collectionOrder}`),
    list: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.collectionOrder}/danh-sach`),
    view: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.collectionOrder}/${id}`),
    edit: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.collectionOrder}/${id}/cap-nhat`),
    new: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.collectionOrder}/tao-lenh-gom-hang`),
  },

  deliveryOrderForSale: {
    root: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.deliveryOrderForSale}`),
    list: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.deliveryOrderForSale}/danh-sach`),
    view: (id) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.deliveryOrderForSale}/${id}`),
    edit: (id) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.deliveryOrderForSale}/${id}/cap-nhat`),
    demoEdit: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.deliveryOrderForSale}/3/cap-nhat`),
  },

  product: {
    root: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}`),
    shop: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/shop`),
    list: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/danh-sach`),
    checkout: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/checkout`),
    new: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/tao-moi`),
    view: (id) => path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/${id}/chinh-sua`),
    demoEdit: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5/chinh-sua`),
    demoView: path(ROOTS_DASHBOARD, `/${SINGLE_KEY_PATH.product}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1`),
  },
  saleAndMarketing: {
    root: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}`),
    list: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/danh-sach`),
    new: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/tao-moi`),
    newQuotation: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/tao-bao-gia`),
    view: (id) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/${id}`),
    edit: (id) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/${id}/cap-nhat`),
    paid: (id) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/${id}/thanh-toan`),
    demoEdit: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/cap-nhat`),
    demoView: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.sale}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5`),
  },
  customer: {
    root: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.customer}`),
    list: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.customer}/danh-sach`),
    new: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.customer}/tao-moi`),
    edit: (name) => path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.customer}/${name}/cap-nhat`),
    demoEdit: path(ROOT_SALE_MENU, `/${SINGLE_KEY_PATH.customer}/reece-chung/cap-nhat`),
  },
  staff: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.staff}`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.staff}/danh-sach`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.staff}/tao-moi`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.staff}/${id}/cap-nhat`),
    demoEdit: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.staff}/reece-chung/cap-nhat`),
  },
  blog: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.blog}`),
    posts: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.blog}/tat-ca-bai-viet`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.blog}/tao-bai-viet-moi`),
    view: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.blog}/bai-viet/${id}`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.blog}/${id}/cap-nhat`),
    demoView: path(
      ADMINISTRATIVE_MENU,
      `/${SINGLE_KEY_PATH.blog}/bai-viet/apply-these-7-secret-techniques-to-improve-event`
    ),
  },
  regulation: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.regulation}`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.regulation}/ds-noi-quy`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.regulation}/tao-quy-dinh-moi`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.regulation}/${id}/cap-nhat`),
    view: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.regulation}/${id}`),
    demoEdit: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.regulation}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/cap-nhat`),
  },
  rewardDiscipline: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.rewardDiscipline}`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.rewardDiscipline}/danh-sach`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.rewardDiscipline}/tao-khen-thuong-ky-luat-moi`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.rewardDiscipline}/${id}/cap-nhat`),
    demoEdit: path(
      ADMINISTRATIVE_MENU,
      `/${SINGLE_KEY_PATH.rewardDiscipline}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5/cap-nhat`
    ),
  },
  recruitment: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.recruitment}`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.recruitment}/danh-sach`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.recruitment}/tao-tuyen-dung-moi`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.recruitment}/${id}/cap-nhat`),
    demoEdit: path(
      ADMINISTRATIVE_MENU,
      `/${SINGLE_KEY_PATH.recruitment}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5/cap-nhat`
    ),
  },
  files: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.files}`),
  },
  capacityProfile: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.capacityProfile}`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.capacityProfile}/danh-sach`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.capacityProfile}/tao-ho-so-nang-luc-moi`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.capacityProfile}/${id}/cap-nhat`),
    demoEdit: path(
      ADMINISTRATIVE_MENU,
      `/${SINGLE_KEY_PATH.capacityProfile}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/cap-nhat`
    ),
  },
  salesGuide: {
    root: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.salesGuide}`),
    list: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.salesGuide}/danh-sach`),
    new: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.salesGuide}/tao-huong-dan-ban-hang`),
    edit: (id) => path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.salesGuide}/${id}/cap-nhat`),
    demoEdit: path(ADMINISTRATIVE_MENU, `/${SINGLE_KEY_PATH.salesGuide}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/cap-nhat`),
  },
  reportDrivingRoute: {
    root: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.reportDrivingRoute}`),
    list: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.reportDrivingRoute}/danh-sach`),
    new: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.reportDrivingRoute}/tao-lo-trinh-moi`),
    edit: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.reportDrivingRoute}/${id}/cap-nhat`),
    view: (id) => path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.reportDrivingRoute}/${id}`),
    demoView: path(ROOT_TRUCKING_MENU, `/${SINGLE_KEY_PATH.reportDrivingRoute}/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5`),
  },
  checkFreight: path(ROOT_SALE_MENU, '/tra-cuoc-van-chuyen'),
  checkProductWeight: path(ROOT_SALE_MENU, '/tra-cuu-don-trong'),
  timesheets: path(ADMINISTRATIVE_MENU, '/bang-cham-cong'),
  inventory: path(ROOT_SALE_MENU, '/ton-kho'),
};
