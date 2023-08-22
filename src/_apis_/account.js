// noinspection JSCheckFunctionSignatures

import { v4 as uuidv4 } from 'uuid';
import fakeRequest from '../utils/fakeRequest';
import { sign, verify } from '../utils/jwt';
import mock from './mock';
import {
  AdminAccount,
  AssistantDriver1ManagerAccount,
  AssistantDriver2ManagerAccount,
  DirectorAccount,
  Driver1ManagerAccount,
  Driver2ManagerAccount,
  Driver3ManagerAccount,
  Driver4ManagerAccount,
  ManagerAccount,
  saleUserList,
  TransporterManagerAccount,
} from '../constant';

// ----------------------------------------------------------------------

const JWT_SECRET = 'secret-key';
const JWT_EXPIRES_IN = '5 days';

export const users = [
  AdminAccount,
  DirectorAccount,
  ManagerAccount,
  ...saleUserList,
  TransporterManagerAccount,
  Driver1ManagerAccount,
  Driver2ManagerAccount,
  Driver3ManagerAccount,
  Driver4ManagerAccount,
  AssistantDriver1ManagerAccount,
  AssistantDriver2ManagerAccount,
].map((user) => ({
  id: user?.id,
  displayName: user.displayName,
  email: user.email,
  password: user.password,
  photoURL: user.photoURL,
  phoneNumber: '+84 555666888',
  country: 'Việt Nam',
  address: 'Hà Nội',
  state: 'Hà Nội',
  city: 'Hà Nội',
  zipCode: '100000',
  about: 'Giới thiệu.',
  role: user.role,
  status: user.status,
}));

export const dummyOrgchart = {
  id: 1,
  name: 'Giám đốc',
  title: 'quanly-demo@tcn.com.vn',
  children: [
    {
      id: 1,
      name: 'Quản lý',
      title: 'admin-demo@tcn.com.vn',
      children: [
        {
          id: 1,
          name: 'Nhân viên phòng kế toán',
          title: 'ketoan2-demo@tcn.com.vn',
          children: [
            {
              id: 2,
              name: 'Nhân viên phòng kế toán',
              title: 'ketoan-demo@tcn.com.vn',
            },
          ],
        },
        {
          id: 3,
          name: 'Nhân viên phòng kinh doanh',
          title: 'dieuvan-demo@tcn.com.vn',
          children: [
            {
              id: 5,
              name: 'Nhân viên phòng kinh doanh',
              title: 'kinhdoanh1-demo@tcn.com.vn',
              children: [
                {
                  id: 6,
                  name: 'Nhân viên phòng kinh doanh',
                  title: 'ketoan-demo@tcn.com.vn',
                  children: [
                    {
                      id: 7,
                      name: 'Nhân viên phòng kinh doanh',
                      title: 'kinhdoanh1-demo@tcn.com.vn',
                      children: [
                        {
                          id: 8,
                          name: 'Nhân viên phòng kinh doanh',
                          title: 'ketoan-demo@tcn.com.vn',
                          children: [
                            {
                              id: 9,
                              name: 'Nhân viên phòng kinh doanh',
                              title: 'dieuvan-demo@tcn.com.vn',
                              children: [
                                {
                                  id: 10,
                                  name: 'Nhân viên phòng kinh doanh',
                                  title: 'kinhdoanh1-demo@tcn.com.vn',
                                  children: [
                                    {
                                      id: 11,
                                      name: 'Nhân viên phòng kinh doanh',
                                      title: 'ketoan-demo@tcn.com.vn',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 12,
          name: 'Nhân viên phòng vận chuyển',
          title: 'dieuvan-demo@tcn.com.vn',
          children: [
            {
              id: 1,
              name: 'Nhân viên lái xe',
              title: 'laixe1-demo@tcn.com.vn',
              children: [
                {
                  id: 2,
                  name: 'Nhân viên lái xe',
                  title: 'laixe2-demo@tcn.com.vn',
                  children: [
                    {
                      id: 3,
                      name: 'Nhân viên lái xe',
                      title: 'laixe3-demo@tcn.com.vn',
                      children: [
                        {
                          id: 5,
                          name: 'Nhân viên lái xe',
                          title: 'laixe4-demo@tcn.com.vn',
                          children: [
                            {
                              id: 4,
                              name: 'Nhân viên phụ xe',
                              title: 'phuxe1-demo@tcn.com.vn',
                              children: [
                                {
                                  id: 6,
                                  name: 'Nhân viên phụ xe',
                                  title: 'phuxe2-demo@tcn.com.vn',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Quản lý',
      title: 'quanly-demo@tcn.com.vn',
    },
  ],
};

// ----------------------------------------------------------------------

mock.onPost('/api/account/login').reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password } = JSON.parse(config.data);
    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return [400, { message: 'There is no user corresponding to the email address.' }];
    }

    if (user.password !== password) {
      return [400, { message: 'Wrong password' }];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onPost('/api/account/register').reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password, firstName, lastName } = JSON.parse(config.data);
    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [400, { message: 'There already exists an account with the given email address.' }];
    }

    user = {
      id: uuidv4(),
      displayName: `${firstName} ${lastName}`,
      email,
      password,
      photoURL: null,
      phoneNumber: null,
      country: null,
      address: null,
      state: null,
      city: null,
      zipCode: null,
      about: null,
      role: 'user',
      isPublic: true,
    };

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/account/my-account').reply((config) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Authorization token missing' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const data = verify(accessToken, JWT_SECRET);
    const email = typeof data === 'object' ? data?.userId : '';
    const user = users.find((_user) => _user.id === email);

    if (!user) {
      return [401, { message: 'Invalid authorization token' }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
