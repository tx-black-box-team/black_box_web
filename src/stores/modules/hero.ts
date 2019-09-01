class State {
}

class Hero {
  public namespaced: boolean = true

  public state: State = new State()

  public actions = {
    set_tab_list (stores: any, tabs_list: any) {
      const res = encodeURIComponent(JSON.stringify(tabs_list))
      localStorage.setItem('tabs_list', res)
    }
  }

  public getters = {
    tabs_list () {
      const tabs_list = localStorage.getItem('tabs_list')
      const res = tabs_list && JSON.parse(decodeURIComponent(tabs_list))
      return res || []
    }
  }

  public mutations = {}
}

export default {
  ...new Hero()
}
