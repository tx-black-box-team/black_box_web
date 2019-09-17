import { Vue, Prop, Watch, Component } from 'vue-property-decorator'
import { EQ_ID_LIST } from '@/beans'
import { RoleParams, HomeService, default as homeService } from '@/services/home'

@Component
export default class Analysis extends Vue {

  @Prop({
    type: String,
    default: ''
  }) public role ?: string

  public role_form: RuleForm = new RuleForm()
  public id_list: string[] = EQ_ID_LIST(8, 4, 'equip_father_')
  public role_rule: RoleRule = new RoleRule(this.role_validator)
  public equipments: any[] = []
  public role_id: string = ''
  public role_reg: RegExp = /^http:\/\/bang\.tx3\.163.com\/bang\/role\/(([0-9]+_[0-9]+)?)(.*)/g

  private role_validator (rule: any, value: string, callback: any) {
    if (value) {
      this.role_reg.test(value) && callback()
      !this.role_reg.test(value) && callback(new Error('英雄榜链接非法,请重新粘贴'))
    } else {
      callback(new Error('请粘贴英雄榜链接'))
    }
  }

  public check_role () {
    const role_ref: any = this.$refs.role_ref
    const { role } = this.role_form

    role_ref.validate(async (valid: boolean) => {
      if (!valid) return
      this.role_id = role.replace(this.role_reg, '$1')
      this.role_choose(this.role_id)
    })
  }

  public async role_choose (id: string): Promise<void> {
    const params: RoleParams = new RoleParams(id)
    const res = await homeService.role_analysis(params)
    this.equipments = res.equipments
  }

  public equipments_map (id: string): any {
    const res: any = this.equipments.filter((item: any) => {
      return item.id === id
    })
    if (res.length) {
      return res[0]
    }
    return {}
  }
}

class RuleForm {
  public role: string
  constructor (role: string = '') {
    this.role = role
  }
}

class RoleRule {
  public role: Rule[]

  constructor (validate: any) {
    this.role = [ new Rule(validate, 'blur') ]
  }
}

class Rule {
  public validator: any
  public trigger: string

  constructor (validator: any, trigger: string = '') {
    this.validator = validator
    this.trigger = trigger
  }
}
