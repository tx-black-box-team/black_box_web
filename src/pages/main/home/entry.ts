import { Vue, Component } from 'vue-property-decorator'
// import { Action, Getter, State } from 'vuex-class'
import * as HomeRequest from '@/services/home'
@Component
export default class Home extends Vue {

  public homeService: HomeRequest.HomeService = HomeRequest.default
  public search_text: string = ''
  // @Action('home/set_id')
  // public _store_set_id!: (() => Promise<any>) | (() => void) | (() => any)
  // @Getter('home/get_id') public _store_get_id !: string

  public async query_search (query_string: string, callback: any): Promise<void> {
    const params = new HomeRequest.SearchRoleRequest()
    params.name = query_string
    let res: any = await this.homeService.search(params)
    res && (res = res.slice(0, 5))
    res = this.utils.hight_light(query_string, res, 'Name')
    callback(res || [])
  }

  public handleSelect (item: any): void {
    console.log(item)
  }

  public search (): void {
    if (this.search_text) {
      const params = {
        name: 'result',
        params: {
          search: encodeURIComponent(this.search_text)
        }
      }
      this.$router.push(params)
    }
  }

}
