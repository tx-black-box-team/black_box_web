
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class TxHeader extends Vue {

  public menu_selected: string = ''

  public back_home () {
    const { name } = this.$route
    name !== 'home' && (
      this.$router.push({
        name: 'home'
      })
    )
  }

  public menu_see (type: string) {
    const { name } = this.$route
    if (name !== type) {
      if (type === 'home') {
        if (name === 'home' || name === 'result') {
          return
        }
      }
      this.$router.push({
        name: type
      })
    }
  }

  public router_init () {
    const { name } = this.$route
    switch (name) {
      case 'home':
      case 'result':
        this.menu_selected = 'home'
        break
      case 'hero':
      case 'forces':
      case 'pavilion':
      case 'role':
        this.menu_selected = name
        break
      default:
        this.menu_selected = ''
        break
    }
  }

  public mounted () {
    this.router_init()
  }

  @Watch('$route')
  public routerChange (newVal: any) {
    this.router_init()
  }
}
