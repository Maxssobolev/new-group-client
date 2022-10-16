import { $authHost } from '../host';

export const $authGet = async (apiURL: string) =>
  await $authHost.get(apiURL).then(res => {
    return res.data;
  });
