import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request... could be implemented here if needed

export default instance;