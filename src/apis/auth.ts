import { ENDPOINTS } from '../endpoints';
import { BaseResponseData, LoginRequest, LoginResponse } from '../types';

export const login = async (payload: LoginRequest): Promise<BaseResponseData<LoginResponse>> => fetch(
  ENDPOINTS.LOGIN,
  {
    method: 'POST',
    body: JSON.stringify(payload),
  }
).then((res) => res.json());