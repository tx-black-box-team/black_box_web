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
  public is_all: boolean = false

  public async query_search (query_string: string, callback: any): Promise<void> {
    const params = new HomeRequest.SearchRoleRequest()
    params.name = query_string
    let res: any = await this.homeService.search(params)
    res && (res = res.slice(0, 5))
    res = this.utils.hight_light(query_string, res, 'Name')
    callback(res || [])
  }

  public async search (): Promise<void> {
    if (!this.search_text) {
      this.reset_search()
    } else {
      if (!this.is_all) {
        const params = new HomeRequest.SearchRoleRequest()
        params.name = this.search_text
        params.PageIndex = this.page_index
        const res = await this.homeService.search(params)
        res.length &&
          (this.table_data = [...this.table_data, ...(res)]) ||
          (this.is_all = true)
      } else {
        this.$message.warning('已经到底了~~')
      }
    }
  }

  public search_enter () {
    this.reset_params()
    this.search()
  }

  public reset_params () {
    this.is_all = false
    this.table_data = []
    this.page_index = 1
  }

  public handle_select (): void {
    console.log(this.search_text)
  }

  public reset_search (): void {
    this.reset_params()
    this.$router.push('/')
  }

  public handle_reachBottom (): void {
    this.page_index++
    this.search()
  }

  public mounted (): void {
    const { search = '' } = this.$route.params
    if (search) {
      this.search_text = decodeURIComponent(search)
      this.search()
    }
  }
}
