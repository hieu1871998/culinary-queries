import { BaseResponseData, LoginRequest, LoginResponse, ResponseError } from '../types';
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { login } from '../apis/auth';

export const useLoginMutation = (
  options?: UseMutationOptions<BaseResponseData<LoginResponse>, ResponseError, LoginRequest>
) => useMutation(
  (params: LoginRequest) => login(params),
  options
);