import Axios from 'axios'

interface HttpBase {
  http: any,
  get (str: string, data: object, resolve: any, reject: any): void,
  delete (str: string, data: object, resolve: any, reject: any): void,
  put (str: string, data: object, resolve: any, reject: any): void,
  post (str: string, data: object, resolve: any, reject: any): void
}

class AxiosUtil {
  private static axios: any = null
  public static getInstance (): any {
    if (!this.axios) {
      this.axios = Axios
      this.axios.timeout = 45000
      this.axios.interceptors.request.use((config: any) => {
        return config
      }, (error: any) => {
        return Promise.reject(error)
      })
      this.axios.interceptors.response.use((response: any) => {
        return response
      }, (error: any) => {
        return Promise.reject(error)
      })
    }
    return this.axios
  }
}

export default class BaseService implements HttpBase {
  public http: any = null
  constructor () {
    this.http = AxiosUtil.getInstance()
  }

  public get (str: string, data: object, resolve: any, reject: any): void {
    this.http.get(str, {
      params: data || {}
    }).then((res: any) => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(null)
      }
    })
  }

  public delete (str: string, data: object, resolve: any, reject: any): void {
    this.http.delete(str, {
      params: data || {}
    }).then((res: any) => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(null)
      }
    })
  }

  public put (str: string, data: object, resolve: any, reject: any): void {
    this.http.put(str, data).then((res: any) => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(null)
      }
    })
  }

  public post (str: string, data: object, resolve: any, reject: any): void {
    this.http.post(str, data).then((res: any) => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(null)
      }
    })
  }
}
