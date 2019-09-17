import { Vue, Emit, Component } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'
import Analysis from './analysis/index.vue'
import Ranking from './ranking/index.vue'

@Component({
  components: {
    analysis: Analysis,
    ranking: Ranking
  }
})
export default class Hero extends Vue {

  @Action('hero/set_tab_list')
  public set_tab_list ?: any
  @Getter('hero/tabs_list')
  public tabs_list ?: any[]

  public hero_tabs: HeroTab[] | any[] | undefined[] = [new HeroTab()]
  public tab_selected: string = 'hero'

  public mounted () {
    if (this.tabs_list && this.tabs_list.length) {
      this.hero_tabs = this.tabs_list
    }
  }

  public remove_tab (id: string) {
    this.tab_selected === id && (this.tab_selected = 'hero')
    this.hero_tabs = this.hero_tabs.filter((item: any) => id !== item.id)
    this.set_tab_list(this.hero_tabs)
  }

  public choose_tab (data: any) {
    if (data.name === 'new') {
      const temp_id = `undefined_${new Date().getTime()}`
      this.hero_tabs.splice(
        this.hero_tabs.length - 1,
        0,
        new HeroTab(temp_id, '空白页')
      )
      this.set_tab_list(this.hero_tabs)
      this.tab_selected = temp_id
    }
  }

  @Emit()
  public save_tab (data: any) {
    this.set_tab_list(data)
  }
}

class HeroTab {
  public id: string
  public title: string
  constructor (id = 'new', title = '新建') {
    [this.id, this.title] = [id, title]
  }
}
