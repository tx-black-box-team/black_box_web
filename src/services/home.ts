import Service from './'

interface HomeBase<T> {
  search (data: object): Promise<T>
}

export class RoleParams {
  constructor (role: string) {
    this.role_id = role
  }

  public role_id ?: string = ''
}

export class SearchRoleRequest {
  public name ?: string | Array<string | null> = ''
  public PageIndex ?: number | string = 1
}

export class HomeService extends Service implements HomeBase<any> {
  constructor () {
    super()
  }

  public search (data: SearchRoleRequest): Promise<any[]> {
    return new Promise((resolve: (() => void), reject: (() => void)) => {
      super.get('/api/Search', data, resolve, reject)
    })
  }

  public role_analysis (data: RoleParams): Promise<any> {
    return new Promise((resolve: (() => void), reject: (() => void)) => {
      super.get('/local/parse/base', data, resolve, reject)
    })
  }
}

export default new HomeService()
