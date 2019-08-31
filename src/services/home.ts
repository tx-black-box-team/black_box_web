import Service from './'

interface HomeBase<T> {
  searchRole (data: object): Promise<T>
}

export class SearchRoleRequest {
  public name ?: string
  public PageIndex ?: number | string = 1
}

export class HomeService extends Service implements HomeBase<any> {
  constructor () {
    super()
  }

  public searchRole (data: SearchRoleRequest): Promise<object | null> {
    return new Promise((resolve: (() => void), reject: (() => void)) => {
      super.get('/api/SearchRole', data, resolve, reject)
    })
  }
}

export default new HomeService()
