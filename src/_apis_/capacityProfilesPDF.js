/* eslint-disable no-irregular-whitespace */
import { paramCase } from 'change-case';
import mockData from '../utils/mock-data';
import { capacityProfile } from '../_mock/capacity-profile';
import _mock from '../_mock';
import mock from './mock';

export const _deliveryPaperPDFs = [...Array(5)].map((_, index) => ({
  name: _mock.papersPDF.name(index),
  file: _mock.papersPDF.file(index),
}));

export const capacityProfiles = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: capacityProfile[index].title,
  content: capacityProfile[index].content,
  imagePDf: _mock.image.PDF(index),
  name: _deliveryPaperPDFs[index].name,
  file: _deliveryPaperPDFs[index].file,
  createdAt: _mock.time(index),
  updatedAt: _mock.time(index),
}));
// ----------------------------------------------------------------------

mock.onGet('/api/capacityProfiles/all').reply(200, { capacityProfiles });
// ----------------------------------------------------------------------

mock.onGet('/api/capacityProfiles/capacityProfile').reply((config) => {
  try {
    const { id } = config.params;

    const capacityProfile = capacityProfiles.find((_capacityProfile) => paramCase(_capacityProfile.id) === id);

    if (!capacityProfile) {
      return [404, { message: 'Post not found' }];
    }

    return [200, { capacityProfile }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
// ----------------------------------------------------------------------

mock.onGet('/api/capacityProfiles/search').reply((config) => {
  try {
    const { query } = config.params;
    const cleanQuery = query.toLowerCase().trim();
    const results = [];

    // eslint-disable-next-line consistent-return
    capacityProfiles.forEach((regulation) => {
      if (!query) {
        return results.push(regulation);
      }

      if (regulation.title.toLowerCase().includes(cleanQuery)) {
        return results.push(regulation);
      }
    });

    return [200, { results }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
// ----------------------------------------------------------------------
