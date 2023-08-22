/* eslint-disable no-irregular-whitespace */
import { random, sample } from 'lodash';
import mock from './mock';
import mockData from '../utils/mock-data';
import { steelProductList } from '../_mock/steel-product';

// ----------------------------------------------------------------------

const PRODUCT_TAGS = ['Thép Hòa Phát', 'Thép lá', 'Thép tròn đặc S45C', 'Mạ kẽm nhúng nóng', 'Tôn lợp, tôn mát'];
export const SUB_CATEGORIES_PRODUCT_I = ['THÉP I (CÁNH CÔN, CẦU TRỤC)', 'THÉP HÌNH I'];
export const SUB_CATEGORIES_PRODUCT_HP = [
  'THÉP HỘP MẠ KẼM',
  'THÉP ỐNG MẠ KẼM',
  'THÉP HỘP ĐEN',
  'THÉP ỐNG ĐEN',
  'ỐNG MẠ KẼM NHÚNG NÓNG',
];

export const PLATE_PRODUCT_PRICE_WITH_VAT = [
  15000, 15000, 15000, 15000, 15000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 18000, 18000, 18000, 18000,
];

const PRODUCT_DESCRIPTION = `
<p><strong><small>MÔ TẢ</small></strong></p>
<p>Thép hình I100 được sản xuất bởi những nhà máy trong nước như thép hình An Khánh, Thép Tisco, Thép Posco...vì thế thị trường thép hình tại Việt Nam hiện tại không phụ thuộc quá nhiều bởi Trung Quốc..
<br /><br />
<p><strong><small> NGUỒN GỐC</small></strong></p>
<p>Công ty cổ phần Thép Công Nghiệp Hà Nội là đại lý cấp 1 thép An Khánh, Tisco, Posco. Ngoài ra chúng tôi còn nhập khẩu trực tiếp các sản phẩm thép hình từ nhiều quốc gia khác trên thế giới như Trung Quốc, Nhật Bản, Hàn Quốc..</p>
`;

// ----------------------------------------------------------------------

export const products = [...Array(46)].map((_, index) => ({
  id: mockData.id(index),
  cover: steelProductList[index].cover,
  images: steelProductList[index].image,
  name: steelProductList[index].name,
  code: `38BEE27${index}`,
  sku: `WW75K521${index}YW/SV`,
  tags: PRODUCT_TAGS,
  price: steelProductList[index].price,
  priceWithVAT:
    (index >= 0 && index < 30 && steelProductList[index].price) ||
    (index >= 30 && index < 46 && PLATE_PRODUCT_PRICE_WITH_VAT[index - 30]),
  type: steelProductList[index].type,
  weight: steelProductList[index].weight,
  priceWithoutVAT: index >= 0 && index < 30 ? steelProductList[index].price : null,
  totalPriceWithoutVAT: index >= 0 && index < 30 ? steelProductList[index].price : null,
  totalPriceWithVAT: index >= 0 && index < 30 ? steelProductList[index].price : null,
  priceSale: steelProductList[index].price,
  totalRating: mockData.number.rating(index),
  totalReview: random(9999),
  ratings: [...Array(5)].map((_, index) => ({
    name: `${index + 1} Sao`,
    starCount: random(9999),
    reviewCount: random(9999),
  })),
  reviews: [...Array(8)].map((_, index) => ({
    id: mockData.id(index),
    name: mockData.name.fullName(index),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
    comment: mockData.text.sentence(index),
    rating: mockData.number.rating(index),
    isPurchased: mockData.boolean(index),
    helpful: random(9999),
    postedAt: mockData.time(index),
  })),
  colors: '#00AB55',
  height: steelProductList[index].length,
  width: 3.5,
  inventoryType: sample(['Còn hàng', 'Hết hàng']),
  collector: sample(['Cường Oanh', 'Long Giang', 'A. Thọ Cbi']),
  sizes: steelProductList[index].size,
  available: random(19, 100),
  description: PRODUCT_DESCRIPTION,
  sold: random(999),
  createdAt: mockData.time(index),
  category: steelProductList[index].category,
  subCategory:
    (steelProductList[index].category === 'Thép hình I' && sample(SUB_CATEGORIES_PRODUCT_I)) ||
    (steelProductList[index].category === 'Thép Hòa Phát' && sample(SUB_CATEGORIES_PRODUCT_HP)) ||
    null,
  unit: steelProductList[index].unit,
  length: steelProductList[index].length,
  formType: steelProductList[index].formType,
}));

// ----------------------------------------------------------------------

mock.onGet('/api/products').reply(200, { products });

// ----------------------------------------------------------------------

mock.onGet('/api/products/product').reply((config) => {
  try {
    const { id } = config.params;
    const product = products.find((_product) => _product.id === id);

    if (!product) {
      return [404, { message: 'Không tìm thấy thông tin sản phẩm' }];
    }

    return [200, { product }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Lỗi hệ thống' }];
  }
}); // ----------------------------------------------------------------------

mock.onGet('/api/products/search').reply((config) => {
  try {
    const { query } = config.params;
    console.log('query: ', query);
    const product = products.find((_product) => _product.name.includes(query));

    if (!product) {
      return [404, { message: 'Không tìm thấy thông tin sản phẩm' }];
    }

    return [200, { product }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Lỗi hệ thống' }];
  }
});
