import _mock, { _userList } from '../_mock';
import { folders } from '../_mock/folders';
import mock from './mock';

export const folder = [...Array(9)].map((_, index) => ({
  folderName: folders[index].folderName,
  keyPath: folders[index].keyPath,
  uploadBy: _userList[1],
  createdAt: _mock.time(index),
}));

mock.onGet('/api/folders/all').reply(200, { folder });
