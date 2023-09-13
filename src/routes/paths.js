// ----------------------------------------------------------------------
function path(root, subLink) {
  return `${root}${subLink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const SINGLE_KEY_PATH = {
  dashboard: 'dashboard',
  auth: 'auth',
  login: 'login',
  register: 'register',
  verify: 'verify',
  resetPassword: 'reset-password',
  app: 'app',
  userAccount: 'thong-tin-tai-khoan',
  product: 'san-pham',
  user: 'nguoi-dung',
  chat: 'chat',
  contacts: 'danh-ba',
};

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, `/dang-nhap`),
  register: path(ROOTS_AUTH, `/dang-ky`),
  resetPassword: path(ROOTS_AUTH, `/doi-mat-khau`),
  logout: path(ROOTS_AUTH, `/dang-xuat`),
};

export const PATH_DOCS = 'https://tcn.techbyq.app/';

export const SSM_PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,

  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
  },
  chat: path(ROOTS_DASHBOARD, '/chat'),
  userAccount: path(ROOTS_DASHBOARD, `/thong-tin-tai-khoan`),
  contacts: path(ROOTS_DASHBOARD, '/danh-ba-ban-be'),
  pinned: path(ROOTS_DASHBOARD, '/muc-ghim'),
};
