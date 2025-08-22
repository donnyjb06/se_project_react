const API_KEY = '423225afe75e918fc11f1b4c26ddfac1';

const BASE_URL = import.meta.env.MODE === 'production' 
  ? 'https://api.wtwr.blueshadows.cl'
  : 'http://localhost:3001'

const LOCATION = {
  latitude: '30.3462371',
  longitude: '-94.1875574',
};

export { API_KEY, LOCATION, BASE_URL };
