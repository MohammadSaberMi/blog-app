import http from './httpServices';

export async function singinApi(data) {
  return http.post(`/user/signup`, data).then(({ data }) => data);
}
