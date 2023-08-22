import { sample } from 'lodash';
import _mock from './_mock';

const FOLDERS_NAME = [
  'Tài liệu chung',
  'Tài liệu phòng kinh doanh',
  'Tài liệu phòng kế toán',
  'Tài liệu phòng vận chuyển',
  'Thông tin khách hàng',
  'Hóa đơn',
  'Ảnh công ty',
  'Ảnh Noen 2022',
  'folder4',
];
const KEY_PATH = ['1', '1/Docs'];

export const folders = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  folderName: FOLDERS_NAME[index],
  keyPath: (index >= 0 && index < 4 && KEY_PATH[0]) || (index >= 4 && index < 9 && KEY_PATH[1]) || sample(KEY_PATH),
}));
