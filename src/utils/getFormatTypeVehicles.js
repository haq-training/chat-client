export const formatType = (type) => {
  switch (type) {
    case 'container':
      return 'Xe Container';
    case 'truck':
      return 'Xe Tải';
    default:
      return '';
  }
};

export const reformatType = (type) => {
  switch (type) {
    case 'Xe Container':
      return 'container';
    case 'Xe Tải':
      return 'truck';
    default:
      return '';
  }
};
