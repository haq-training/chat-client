export const formatType = (type) => {
  switch (type) {
    case 'repair':
      return 'Sửa chữa';
    case 'maintenance':
      return 'Bảo trì';
    default:
      return '';
  }
};

export const reformatType = (type) => {
  switch (type) {
    case 'Sửa chữa':
      return 'repair';
    case 'Bảo trì':
      return 'maintenance';
    default:
      return '';
  }
};

export const reFormatTypeVehicle = (type) => {
  switch (type) {
    case 'Container':
      return 'container';
    case 'Xe tải':
      return 'truck';
    default:
      return '';
  }
};
