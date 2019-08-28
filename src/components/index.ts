import TxHeader from './header/index.vue'

interface ComponentBase {
  init (vue: any): void
}

class GlobalComponents {
  public init (vue: any) {
    vue.component('TxHeader', TxHeader)
  }
}

export default new GlobalComponents()
