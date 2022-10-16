import { AxiosRequestConfig } from 'axios';
import { $host } from '../host';

export const $hostPost = async (apiURL: string, data?: any) =>
  await $host.post(apiURL, data).then(res => {
    return res.data;
  });
