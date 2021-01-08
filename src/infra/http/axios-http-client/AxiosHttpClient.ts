import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http/HttpClient'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      const { url, method, body, headers } = data
      axiosResponse = await axios.request({
        url,
        method,
        data: body,
        headers,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
