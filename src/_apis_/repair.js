import { v4 as uuidv4 } from 'uuid';
import { add, set, sub } from 'date-fns';
import { sample } from 'lodash';
import mockData from '../utils/mock-data';
import {
  Driver1ManagerAccount,
  Driver2ManagerAccount,
  Driver3ManagerAccount,
  Driver4ManagerAccount,
} from '../constant';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#94D82D', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E', // theme.palette.error.darker
];

const setColorAndTime = (index) => {
  if (index === 0)
    return {
      textColor: COLOR_OPTIONS[0],
      start: sub(new Date(), { days: 6, hours: 6, minutes: 30 }),
      end: sub(new Date(), { days: 6, hours: 4, minutes: 30 }),
    };
  if (index === 1)
    return {
      textColor: COLOR_OPTIONS[1],
      start: add(new Date(), { days: 2, hours: 0, minutes: 0 }),
      end: add(new Date(), { days: 2, hours: 1, minutes: 0 }),
    };
  if (index === 2)
    return {
      textColor: COLOR_OPTIONS[2],
      start: add(new Date(), { days: 6, hours: 0, minutes: 15 }),
      end: add(new Date(), { days: 6, hours: 0, minutes: 20 }),
    };
  if (index === 3)
    return {
      textColor: COLOR_OPTIONS[5],
      start: sub(new Date(), { days: 12, hours: 0, minutes: 45 }),
      end: sub(new Date(), { days: 12, hours: 0, minutes: 30 }),
    };
  if (index === 4)
    return {
      textColor: COLOR_OPTIONS[5],
      start: add(new Date(), { days: 2, hours: 2, minutes: 30 }),
      end: add(new Date(), { days: 2, hours: 3, minutes: 30 }),
    };
  if (index === 5)
    return {
      textColor: COLOR_OPTIONS[4],
      start: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
      end: sub(new Date(), { days: 3, hours: 3, minutes: 20 }),
    };
  if (index === 6)
    return {
      textColor: COLOR_OPTIONS[0],
      start: set(new Date(), { hours: 10, minutes: 30 }),
      end: set(new Date(), { hours: 13, minutes: 30 }),
    };
  if (index === 7)
    return {
      textColor: COLOR_OPTIONS[3],
      start: add(new Date(), { days: 2, hours: 3, minutes: 30 }),
      end: add(new Date(), { days: 2, hours: 4, minutes: 30 }),
    };
  return {
    textColor: COLOR_OPTIONS[2],
    start: add(new Date(), { days: 2, hours: 3, minutes: 45 }),
    end: add(new Date(), { days: 2, hours: 4, minutes: 50 }),
  };
};
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
const LICENSE_PLATES_VEHICLE = ['29A-12345', '40A-13579', '33A-02468', '30A-66666'];

const events = [...Array(4)].map((_, index) => ({
  id: uuidv4(),
  title: driver[index].driverName,
  driver: driver[index],
  type: sample(['Xe Container', 'Xe Tải']),
  licensePlates: LICENSE_PLATES_VEHICLE[index],
  description: sample(['Thay Lốp', 'Thay Gương', 'Thay Dầu', 'Vá Lốp Xe']),
  allDay: mockData.boolean(index),
  ...setColorAndTime(index),
}));

export default events;
