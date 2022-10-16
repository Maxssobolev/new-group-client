import { $authHost } from '../host';

export const $authPost = async (apiURL: string, data?: any) =>
  await $authHost.post(apiURL, data).then(res => {
    return res.data;
  });
