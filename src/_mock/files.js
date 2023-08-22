import { sample } from 'lodash';

const KEY_PATH = ['1', '1/Docs'];

export const files = [...Array(9)].map((_, index) => ({
  fileName: `File${index + 1}`,
  keyPath: (index >= 0 && index < 4 && KEY_PATH[0]) || (index >= 4 && index < 9 && KEY_PATH[1]) || sample(KEY_PATH),
  size: `${index + 1} Mb`,
}));
