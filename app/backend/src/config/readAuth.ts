import { resolve } from 'path';
import { readFileSync } from 'fs';

function readFileSecret(): string | void {
  readFileSync(
    resolve(__dirname, '..', '..', 'jwt.evaluation.key'),
    { encoding: 'utf8', flag: 'r' },
  ).trim();
}

export default readFileSecret;
