import readFile from './readAuth';

export default {
  jwt: {
    secret: readFile(),
    expiresIn: '1d',
  },
};
