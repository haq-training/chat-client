import { PATH_DOCS, SINGLE_KEY_PATH } from '../../routes/paths';
import { PATH_AFTER_LOGIN } from '../../config';
import Iconify from '../../components/Iconify';
import { Dashboard } from '../../constant';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Trang chủ',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Chức năng',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Tin tức',
        items: [
          { title: 'Bảng tin nội bộ', path: `/${SINGLE_KEY_PATH.menu}/1` },
          { title: 'Quy định, Quy chế', path: `/${SINGLE_KEY_PATH.menu}/${SINGLE_KEY_PATH.regulation}/danh-sach` },
          { title: 'Tuyển dụng', path: `/${SINGLE_KEY_PATH.menu}/${SINGLE_KEY_PATH.recruitment}/danh-sach` },
          {
            title: 'Khen thưởng, Kỷ luật',
            path: `/${SINGLE_KEY_PATH.menu}/${SINGLE_KEY_PATH.rewardDiscipline}/danh-sach`,
          },
        ],
      },
      {
        subheader: 'Tài liệu',
        items: [
          { title: 'Hướng dẫn bán hàng', path: `/${SINGLE_KEY_PATH.menu}/5` },
          { title: 'Hồ sơ năng lực', path: `/${SINGLE_KEY_PATH.menu}/${SINGLE_KEY_PATH.capacityProfile}/danh-sach` },
          { title: 'Hồ sơ nhân viên', path: `/${SINGLE_KEY_PATH.menu}/7` },
          { title: 'Tài liệu khác', path: `/${SINGLE_KEY_PATH.menu}/8` },
        ],
      },
      {
        subheader: Dashboard,
        items: [{ title: Dashboard, path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Hướng dẫn bán hàng',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
];

export default menuConfig;
