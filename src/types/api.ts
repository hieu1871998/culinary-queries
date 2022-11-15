export interface BaseResponseData<T> {
  responseData?: T;
  error?: ResponseError;
}

export interface BaseResponse<T> {
  data: {
    responseData: T;
    error?: ResponseError;
  };
}

export interface ResponseError {
  message: string;
  code: number | string;
}
