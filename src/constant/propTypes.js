// noinspection DuplicatedCode

import PropTypes from 'prop-types';

export const salePropTypes = () =>
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
    fullName: PropTypes.string,
    userName: PropTypes.string,
  });

export const driverPropTypes = () =>
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
    fullName: PropTypes.string,
    userName: PropTypes.string,
  });

export const customerPropTypes = () =>
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    deliveryAddress: PropTypes.string,
    avatarUrl: PropTypes.string,
    company: PropTypes.shape({
      id: PropTypes.number.isRequired,
      companyName: PropTypes.string,
      companyPhoneNumber: PropTypes.string,
      otherPhone: PropTypes.string,
      address: PropTypes.string,
    }),
  });

export const productPropTypes = () =>
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    name: PropTypes.string,
    updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    width: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number,
    code: PropTypes.string,
    available: PropTypes.number,
    type: PropTypes.string,
    unit: PropTypes.string,
    formType: PropTypes.string,
  });

export const orderPropTypes = () =>
  PropTypes.shape({
    orderId: PropTypes.number.isRequired,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    status: PropTypes.string,
    discount: PropTypes.number,
    VAT: PropTypes.number,
    freightPrice: PropTypes.number,
    invoiceNo: PropTypes.string.isRequired,
    reportingValidityAmount: PropTypes.number,
    deliveryMethodDescription: PropTypes.string,
    percentOfAdvancePayment: PropTypes.number,
    executionTimeDescription: PropTypes.string,
    freightMessage: PropTypes.string,
    deliverAddress: PropTypes.string,
    totalMoney: PropTypes.number,
    sale: salePropTypes().isRequired,
    customer: customerPropTypes().isRequired,
    itemGroupList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        orderDetailList: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            quantity: PropTypes.number,
            priceProduct: PropTypes.number,
            description: PropTypes.string,
            product: productPropTypes(),
          })
        ),
      })
    ),
    deliverOrderList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string,
        deliveryDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      })
    ),
    paymentList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
    driver: driverPropTypes(),
  });
