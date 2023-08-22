import {
  accountantNavConfig,
  adminNavConfig,
  directorNavConfig,
  driverNavConfig,
  salesNavConfig,
  transporterManagerNavConfig,
} from './NavbarRouteByRole';
import { Role } from '../../../constant';

// ----------------------------------------------------------------------

const commonNavConfig = (user) => {
  switch (user?.role) {
    case Role.admin:
      return adminNavConfig;
    case Role.director:
      return directorNavConfig;
    case Role.accountant:
      return accountantNavConfig;
    case Role.sales:
      return salesNavConfig;
    case Role.transporterManager:
      return transporterManagerNavConfig;
    case Role.driver:
      return driverNavConfig;
    default:
      return [];
  }
};

export default commonNavConfig;
