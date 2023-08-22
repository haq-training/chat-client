import { sample } from 'lodash';
import _mock from './_mock';
import mockData from '../utils/mock-data';

const PRODUCT_NAME = [
  'Thép I cánh côn Ia 400x150x10x18x12m',
  'Thép I cánh côn Ia 300x150x10x16x12m',
  'Thép hình I 100 x 55 x 4.5 x 6m',
  'Thép hình I 120 x 64 x 4.8 x 6m',
  'Thép hình I 350 x 175 x 7 x 11 x 12m',
  'Thép hình U 100 x 46 x 4.5 x 6m',
  'Thép hình U 80 x 36 x 4.0 x 6m',
  'Thép hình U 100 x 50 x 5 x 6m',
  'Thép hình U 125 x 65 x 6 x 6m',
  'Thép hình U 150 x 75 x 6.5 x 12m',
  'Thép hình H 100 x 100 x 6 x 8 x 12m',
  'Thép hình H 125 x 125 x 6.5 x 9 x 12m',
  'Thép hình H 250 x 250 x 9 x 14 x 12m',
  'Thép hình H 440 x 300 x 11 x 18 x 12m',
  'Thép hình H 350 x 350 x 12 x 19 x 12m',
  'Tôn Nhám 3.0 x 1500 x 6000',
  'Tôn Nhám 4.0 x 1500 x 6000',
  'Tôn Nhám 5.0 x 1500 x 6000',
  'Tôn Nhám 6.0 x 1500 x 6000',
  'Tôn Nhám 8.0 x 1500 x 6000',
  'Hộp đen 300 x 300 x 8',
  'Thép ống đen 88.3 x 5.2 x 6m',
  'Hộp đen 400 x 400 x 10',
  'Hộp đen 350 x 350 x 8',
  'Hộp đen 350 x 350 x 6',
  'Thép ống đen 88.3 x 5.0 x 6m',
  'Thép ống mạ kẽm 21,2 x 1,1 x 6m',
  'Thép ống mạ kẽm nhúng nóng 21,2 x 2.1 x 6m',
  'Thép U 400 x 100 x 10.5 x 12m',
  'Thép hình I 100 x 55 x 4.5 x 6m',
  'Thép tấm (SS400/Q345) 3.0 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 4.0 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 5.0 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 6.0 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 8.0 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 10 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 12 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 14 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 16 x 1500 x 6000',
  'Thép tấm (SS400/Q345) 18 x 1500 x 6000',
  'Thép tấm (Q345/SS400) 20 x 2000 x 6000',
  'Thép tấm (Q345/SS400) 25 x 2000 x 6000',
  'Thép tấm (Q345/SS400) 30 x 2000 x 6000',
  'Thép tấm (Q345/SS400) 35 x 2000 x 6000',
  'Thép tấm (Q345/SS400) 40 x 2000 x 6000',
  'Thép tấm (Q345/SS400) 50 x 2000 x 6000',
];

export const STEEL_PRODUCT_CATEGORY = ['Thép hình I', 'Thép hình U', 'Thép hình H', 'Thép tấm nhám', 'Thép Hòa Phát'];
export const PRODUCT_LENGTH = [
  12, 12, 6, 6, 12, 6, 6, 6, 6, 12, 12, 12, 12, 12, 6, 6, 6, 6, 6, 12, 6, 6, 6, 6, 6, 12, 6, 6, 12, 6, 6, 6, 6, 6, 6, 6,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
];
export const PRODUCT_PRICE = [
  26364, 14545, 14091, 12000, 19091, 16364, 17273, 18818, 15909, 21363, 19000, 16000, 20000, 22000, 25000, 17000, 15000,
  15252, 17091, 18273, 12545, 16346, 23535, 14650, 20500, 15555, 16923, 12345, 23456, 12020, 3179165, 4238887, 5298609,
  6358330, 8477774, 10597217, 12716661, 14836104, 19217365, 21624636, 32028942, 40036178, 50869130, 59023312, 67825507,
  84781884,
];
export const PRODUCT_WEIGHT = [
  239.4, 309.6, 380.7, 450.9, 592.2, 235.4, 300.6, 380, 250.9, 392.2, 250, 329, 385.7, 456.7, 567.8, 432.1, 321, 345.7,
  459.9, 292.2, 229.4, 209.6, 280.7, 350.9, 492.2, 439.4, 319.6, 280.7, 150.9, 152.2, 211.95, 282.6, 353.25, 423.9,
  565.2, 706.5, 847.8, 989.1, 1130.4, 1272, 1884, 2355, 2826, 3279, 3768, 4710,
];

export const FILTER_QUOTE_OPTIONS = ['Cây', 'Tấm', 'Cái', 'Chiếc', 'Mét', 'kg'];

export const steelProductList = [...Array(46)].map((_, index) => ({
  id: _mock.id(index),
  name: PRODUCT_NAME[index],
  category:
    (index >= 0 && index < 5 && STEEL_PRODUCT_CATEGORY[0]) ||
    (index >= 5 && index < 10 && STEEL_PRODUCT_CATEGORY[1]) ||
    (index >= 10 && index < 15 && STEEL_PRODUCT_CATEGORY[2]) ||
    (index >= 15 && index < 20 && STEEL_PRODUCT_CATEGORY[3]) ||
    (index >= 20 && index < 30 && STEEL_PRODUCT_CATEGORY[4]) ||
    (index >= 30 && index < 46 && 'Thép tấm'),
  price: PRODUCT_PRICE[index],
  weight: PRODUCT_WEIGHT[index],
  size: '6',
  cover:
    (index >= 0 && index < 30 && mockData.image.steelProduct(index)) ||
    (index >= 30 && index < 46 && mockData.image.steelProduct(index - 30)),
  image: [...Array(4)].map((_, idx) => {
    if (index >= 30) {
      return mockData.image.steelProduct(index - (idx + 26));
    }
    if (index > 26 && idx > 0) {
      return mockData.image.steelProduct(index - idx);
    }
    return mockData.image.steelProduct(idx + index);
  }),
  unit: sample(FILTER_QUOTE_OPTIONS),
  type: (index >= 0 && index < 30 && 'Thép hình') || (index >= 30 && index < 46 && 'Thép tấm'),
  length: PRODUCT_LENGTH[index],
  formType: (index >= 0 && index < 30 && 'Thuế VAT') || (index >= 30 && index < 46 && 'Đơn trọng'),
}));
