import { random, sample } from 'lodash';
import {
  Driver1ManagerAccount,
  Driver2ManagerAccount,
  Driver3ManagerAccount,
  Driver4ManagerAccount,
} from '../constant';
import mockData from '../utils/mock-data';
import _mock from './_mock';

export const driver = [Driver1ManagerAccount, Driver2ManagerAccount, Driver3ManagerAccount, Driver4ManagerAccount].map(
  (user) => ({
    id: user?.id,
    driverName: user.displayName,
    email: user.email,
    password: user.password,
    photoURL: user.photoURL,
    phoneNumber: '+84 555666888',
    address: 'Hà Nội',
    city: 'Hà Nội',
    about: 'Giới thiệu.',
    role: user.role,
    status: user.status,
  })
);

const WEIGHT_VEHICLE = [2.5, 3.5, 5, 30];
const LICENSE_PLATES_VEHICLE = ['29A-12345', '40A-13579', '33A-02468', '30A-66666'];

export const vehicles = [...Array(4)].map((_, index) => ({
  id: `vehicle-${index + 1}`,
  driver: driver[index],
  type: sample(['Xe Container', 'Xe Tải']),
  weight: WEIGHT_VEHICLE[index],
  licensePlates: LICENSE_PLATES_VEHICLE[index],
  registerDate: mockData.time(index),
  renewRegisterDate: mockData.time(index),
  repairStartTime: mockData.time(index),
  repairEndTime: mockData.time(index),
  note: '',
  repairDate: mockData.time(index),
  repairCost: mockData.number.price(index + 1),
  image: {
    vehicleImage: [...Array(4)].map((_, idx) => `/static/mock-images/transit-car/vehicle_${idx + 1}.jpg`),
    registrationImage: [...Array(3)].map((_, idx) => `/static/mock-images/registration/registration_${idx + 1}.jpg`),
    licenseImage: [...Array(2)].map((_, idx) => `/static/mock-images/driving-license/license_${idx + 1}.jpg`),
  },
  repairFee: 0,
}));

export const drivingRoute = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  driver: driver[index],
  type: sample(['Xe Container', 'Xe Tải']),
  licensePlates: LICENSE_PLATES_VEHICLE[index],
  distance: random(10, 20),
  numberDeliveries: random(5, 10),
  fuel: random(3, 10),
  pointGo: 'Công ty CP Thép Công Nghiệp HN',
  pointEnd: _mock.address.fullAddress(index),
}));
