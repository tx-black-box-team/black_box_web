import { Vue, Component } from 'vue-property-decorator'
import { Scroll, Row, Col } from 'iview'

@Component({
  components: {
    'i-scroll': Scroll,
    'i-row': Row,
    'i-col': Col
  }
})
export default class Result extends Vue {

  public search_text: string | Array<string | null> = ''
  public table_data: any[][] = [[]]

  public query_search (query_string: string, cb: any): void {
    const restaurants: any = []
    cb(restaurants)
  }

  public search (): void {
    if (!this.search_text) {
      this.$router.push('/')
    }
  }

  public handle_select (): void {
    console.log(this.search_text)
  }

  public reset_search (): void {
    this.$router.push('/')
  }

  public handle_reachBottom (): void {
    console.log(this)
  }

  public mounted (): void {
    const { search = '' } = this.$route.query
    if (search) {
      this.search_text = search
    }
  }
}
