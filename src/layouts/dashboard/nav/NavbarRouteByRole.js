// noinspection DuplicatedCode

import { SSM_PATH_DASHBOARD } from '../../../routes/paths';
import { ICONS } from './constantItems';

export const chat = [
  {
    items: [
      {
        title: 'chat',
        path: SSM_PATH_DASHBOARD.chat,
        icon: ICONS.label,
        children: [
          {
            title: 'muc da ghim',
            path: SSM_PATH_DASHBOARD.pinned,
            icon: ICONS.user,
            children: [
              { title: 'Danh sách da ghim', path: SSM_PATH_DASHBOARD.pinned},
            ],
          },
        ],
      },
      {
        title: 'danh ba',
        path: SSM_PATH_DASHBOARD.contacts,
        icon: ICONS.invoice,
      },
      {
        title: 'thong tin ca nhan',
        path: SSM_PATH_DASHBOARD.userAccount,
        icon: ICONS.truckManagement,
      },
    ],
  },
];
