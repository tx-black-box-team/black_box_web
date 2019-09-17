import { Vue, Component, Emit } from 'vue-property-decorator'
import RankingFilter from './filter/index.vue'

@Component({
  components: {
    RankingFilter
  }
})
export default class Ranking extends Vue {

  public draw_visible: boolean = false

  public openDraw () {
    this.draw_visible = true
  }

  @Emit('close_filter')
  public close_filter () {
    this.draw_visible = false
  }
}
