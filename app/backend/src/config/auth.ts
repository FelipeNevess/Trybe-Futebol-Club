import { readFileSync } from 'fs';
import { resolve } from 'path';

export default {
  jwt: {
    secret:
      readFileSync(
        resolve(__dirname, '..', '..', 'jwt.evaluation.key'),
        { encoding: 'utf8' },
      ).trim(),
    expiresIn: '1d',
  },
};
