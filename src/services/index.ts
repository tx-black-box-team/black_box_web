import Axios from 'axios'
import { Loading, Message } from 'element-ui'
import { loading_options } from '@/beans'

interface HttpBase {
  http: any,
  get (str: string, data: object, resolve: any, reject: any): void,
  delete (str: string, data: object, resolve: any, reject: any): void,
  put (str: string, data: object, resolve: any, reject: any): void,
  post (str: string, data: object, resolve: any, reject: any): void
}

class AxiosUtil {
  public static axios: any = null
  public static http_count: number = 0
  public static loading: any
  public static getInstance (): any {
    if (!this.axios) {
      this.axios = Axios
      this.axios.timeout = 45000
      this.axios.interceptors.request.use((config: any) => {
        const is_search = config.method === 'get' && config.url === '/api/SearchRole'
        if (this.http_count === 0 && is_search) {
          this.loading = Loading.service(loading_options)
        }
        return config
      }, (error: any) => {
        if (this.http_count > 0) {
          this.loading.close()
        }
        this.http_count--
        return Promise.reject(error)
      })
      this.axios.interceptors.response.use((response: any) => {
        this.http_count--
        if (this.http_count <= 0) {
          this.loading.close()
        }
        return response
      }, (error: any) => {
        if (this.http_count > 0) {
          this.loading.close()
        }
        this.http_count--
        if (error.response) {
          switch (error.response.status) {
            case 401:
            case 403:
              Message.error('无权限操作')
              break
          }
        }
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
