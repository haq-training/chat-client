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
  userAccount: 'thong-tin',
  user: 'nguoi-dung',
  chat: 'chat',
  contacts: 'danh-ba',
  call: 'goi-dien',
  pinned: 'muc-ghim',
  settings: 'cai-dat',
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
  userAccount: path(ROOTS_DASHBOARD, `/thong-tin`),
  contacts: path(ROOTS_DASHBOARD, '/danh-ba'),
  pinned: path(ROOTS_DASHBOARD, '/muc-ghim'),
  call: path(ROOTS_DASHBOARD, '/goi-dien'),
  settings: path(ROOTS_DASHBOARD, '/cai-dat'),
};
