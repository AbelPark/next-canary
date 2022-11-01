import $axios from './api';

export async function fetchData() {
  const res = $axios.get('/v2/home/art');
  const { data } = await res;
  return data;
}

export function sleep(ms = 3000): Promise<void> {
  console.log('Kindly remember to remove `sleep`');
  return new Promise((resolve) => setTimeout(resolve, ms));
}
