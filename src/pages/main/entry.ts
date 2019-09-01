import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Main extends Vue {

  public mounted () {
    const num: number = Math.floor(Math.random() * 23) + 1
    const bg: Vue | Element | Vue[] | Element[] = this.$refs.main_bg
    this.$(bg).attr('class', `flur-box login-bg${num}`)
  }

}
