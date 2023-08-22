import { ITimesheetsType, TimesheetsType } from '../constant';

export const formatStatus = (status) => {
  switch (status) {
    case 'approve':
      return 'Được phê duyệt';
    case 'waitApprove':
      return 'Chờ được duyệt';
    case 'notApprove':
      return 'Không được phê duyệt';
    default:
      return '';
  }
};

export const reformatDayOff = (status) => {
  switch (status) {
    case TimesheetsType.dayOff:
      return ITimesheetsType.dayOff;
    case TimesheetsType.work:
      return ITimesheetsType.work;
    default:
      return '';
  }
};
