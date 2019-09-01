class Home {
  public namespaced: boolean = true

  public state = {}

  public actions = {}

  public getters = {}

  public mutations = {}
}

export default {
  ...new Home()
}
