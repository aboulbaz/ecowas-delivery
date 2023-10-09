import axios, { Method, ResponseType } from "axios";
import { env } from "node:process";

interface Request {
  method: Method;
  endPoint: string;
  data?: any;
  params?: any;
  responseType?: ResponseType;
}

export class HttpClient {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async onSuccess(result: any) {
    return result.data;
  }

  async request({ method, endPoint, data, params, responseType }: Request) {
    const url = /^https?:\/\//.test(endPoint)
      ? endPoint
      : `${this.baseUrl}${endPoint}`;
    return await axios({
      method,
      url,
      responseType,
      data,
      params,
    }).then(this.onSuccess);
  }

  async get(endPoint: string, params?: any, responseType?: ResponseType) {
    return await this.request({
      method: "get",
      endPoint,
      params,
      responseType,
    });
  }

  async post(
    endPoint: string,
    data: any,
    params: any = undefined,
    responseType: ResponseType
  ) {
    return this.request({
      method: "post",
      endPoint,
      data,
      params,
      responseType,
    });
  }
}

export const EcowasClient = new HttpClient(process.env.API_URL);
