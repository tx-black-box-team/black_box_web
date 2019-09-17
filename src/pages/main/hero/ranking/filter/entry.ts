import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class RankingFilter extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) public value !: boolean

  public close_modal () {
    this.$emit('close_filter')
  }

}
