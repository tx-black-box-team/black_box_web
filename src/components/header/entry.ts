
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TxHeader extends Vue {

  public back_home () {
    this.$router.push({
      name: 'home'
    })
  }
}
