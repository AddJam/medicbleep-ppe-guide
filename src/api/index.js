import { create } from 'apisauce';
import config from '../config';
const {token} = config;

const api = create({
  baseURL: 'https://getshippin.com',
  headers: { 
    accept: 'application/json',
    contentType: 'application/json',
    authorization: `Bearer ${token}`,
    },
});

const ApiCall = (callBack) => {
    api
    .get('/api/apps/14/items')
    .then(response => {
        return callBack(response);
    });
};

export default ApiCall;