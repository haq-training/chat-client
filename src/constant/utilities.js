export const OrderStatusArr = [
  'Tạo mới',
  'Báo giá - Chăm sóc KH',
  'Chốt đơn - Tạo lệnh xuất hàng',
  'Đang giao hàng',
  'Giao hàng thành công',
  'Xác nhận thanh toán và hồ sơ',
  // 'Chưa thanh toán',
  // 'Quá hạn',
  'Đang thanh toán',
  'Đơn hàng hoàn thành',
];

export const OrderStatus = {
  new: OrderStatusArr[0],
  quotationAndDeal: OrderStatusArr[1],
  newDeliverExport: OrderStatusArr[2],
  inProgress: OrderStatusArr[3],
  deliverSuccess: OrderStatusArr[4],
  // unpaid: OrderStatusArr[6],
  // overdue: OrderStatusArr[7],
  confirmByAccProcessing: OrderStatusArr[5],
  paid: OrderStatusArr[6],
  completed: OrderStatusArr[7],
};

export const DeliveryStatus = {
  new: 'Tạo mới',
  inProgress: 'Đang giao hàng',
  deliverySuccess: 'Giao hàng thành công',
  confirmByAccProcessing: 'Xác nhận thanh toán và hồ sơ',
  completed: 'Hoàn thành đơn hàng',
};

export const AllLabel = 'Tất cả';

export const TimesheetsType = {
  dayOff: 'Ngày nghỉ',
  work: 'Ngày làm việc',
};
export const rowsPerPageOptions = [10, 25, 50, 100];

export const StatusTimesheets = {
  waitApprove: 'waitApprove',
  approve: 'approve',
  notApprove: 'notApprove',
};

export const ITimesheetsType = {
  dayOff: 'dayOff',
  work: 'work',
};
