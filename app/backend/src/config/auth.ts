import { readFileSync } from 'fs';
import { join } from 'path';

export default {
  jwt: {
    secret:
      readFileSync(join(__dirname, '..', '..', 'jwt.evaluation.key'), 'utf8').trim(),
    expiresIn: '1d',
  },
};
