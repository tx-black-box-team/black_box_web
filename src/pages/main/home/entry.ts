import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'

@Component
export default class Home extends Vue {

  public search_text: string = ''
  @Action('home/set_id')
  public _store_set_id!: (() => Promise<any>) | (() => void) | (() => any)
  @Getter('home/get_id') public _store_get_id !: string

  public querySearch (queryString: string, cb: any) {
    const restaurants: any = []
    cb(restaurants)
  }

  public handleSelect (item: any) {
    console.log(item)
  }

  public search () {
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

  public mounted () {
    // const search_area: Vue | Element | Vue[] | Element[] = this.$refs.search_area

    // setTimeout(() => {
    //   this.$(search_area).attr('class', `search-box render`)
    // }, 300)
  }

  public created (): void {
    this._store_set_id().then((res: any) => {
      console.log(this._store_get_id)
    }, (err: any) => {
      console.log(err)
    })
  }
}
