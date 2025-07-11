import { Http } from '../utils/fetch';

export function login(data: ILoginWx) {
  return Http.post<IAccount>('/account/loginWx', data);
}

export function info() {
  return Http.get<IAccount>('/account/info');
}

export function refreshToken(refreshToken: string) {
  return Http.post<IAccount>('/account/refreshToken', { refreshToken });
}

export function updateUserInfo(data: any) {
  return Http.post<IAccount>('/account/update',  data );
}
