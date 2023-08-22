export const formatAddressWorking = (address) => {
  switch (address) {
    case 'haDong':
      return 'Hà Đông';
    case 'longBien':
      return 'Long Biên';
    default:
      return 'Hà Đông';
  }
};
export const AddressWorking = [
  { name: 'Hà Đông', label: 'Hà Đông' },
  { name: 'Long Biên', label: 'Long Biên' },
];
