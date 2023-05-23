import axios from 'axios';

const defaultUrl = 'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1';

// Create a default axios instance
const instance = axios.create({
  baseURL: defaultUrl,
});

// Create a request middleware to handle error codes
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

const get = async (param: string) => {
  return await instance.get(`/quotes?symbols=${param}`);
};

const getAll = async () => {
  return await instance.get(`/quotes?symbols=FTSE:FSI,EURUSD,GBPUSD,INX:IOM,IB.1:IEU,AAPL,GOOGL`);
};

export { instance as client, get, getAll }
