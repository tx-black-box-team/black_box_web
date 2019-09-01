import { Vue, Component } from 'vue-property-decorator'
import { Scroll, Row, Col } from 'iview'
import * as HomeRequest from '@/services/home'

@Component({
  components: {
    'i-scroll': Scroll,
    'i-row': Row,
    'i-col': Col
  }
})
export default class Result extends Vue {

  public homeService: HomeRequest.HomeService = HomeRequest.default
  public page_index: number = 1
  public search_text: string | Array<string | null> = ''
  public table_data: any[] = []
  public span: number = 3

  public async query_search (query_string: string, callback: any): Promise<void> {
    const params = new HomeRequest.SearchRoleRequest()
    params.name = query_string
    let res: any = await this.homeService.searchRole(params)
    res && (res = res.slice(0, 5))
    callback(res || [])
  }

  public async search (): Promise<void> {
    if (!this.search_text) {
      this.reset_search()
    } else {
      const params = new HomeRequest.SearchRoleRequest()
      params.name = this.search_text
      params.PageIndex = this.page_index
      this.table_data = [...this.table_data, ...(await this.homeService.searchRole(params))]
    }
  }

  public handle_select (): void {
    console.log(this.search_text)
  }

  public reset_search (): void {
    this.$router.push('/')
  }

  public handle_reachBottom (): void {
    this.page_index++
    this.search()
  }

  public mounted (): void {
    const { search = '' } = this.$route.query
    if (search) {
      this.search_text = search
      this.search()
    }
  }
}
