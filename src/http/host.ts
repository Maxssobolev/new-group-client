import axios, { AxiosRequestConfig } from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: AxiosRequestConfig) => {
  // @ts-ignore: Unreachable code error
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

const tokenErrorInterceptor = (error: any) => {
  //если с сервера пришел статус "не авторизован", то удаляем все и редиректим на страницу авторизации
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    //return window.location.replace('/login?reason=unauth');
  }
  return Promise.reject(error);
};

$authHost.interceptors.request.use(authInterceptor);
$authHost.interceptors.response.use(response => response, tokenErrorInterceptor);

export { $host, $authHost };
