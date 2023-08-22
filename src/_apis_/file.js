import mockData from '../utils/mock-data';
import { files } from '../_mock/files';
import _mock, { _userList } from '../_mock';
import mock from './mock';

export const file = [...Array(9)].map((_, index) => ({
  id: mockData.id(index),
  fileName: files[index].fileName,
  keyPath: files[index].keyPath,
  uploadBy: _userList[1],
  size: files[index].size,
  url: 'abc',
  createdAt: _mock.time(index),
  updatedAt: _mock.time(index),
}));

mock.onGet('/api/files/all').reply(200, { file });
