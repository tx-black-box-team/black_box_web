<template>
  <div class="analysis-main">
    <el-form
      v-show="!role_id"
      :model="role_form"
      :rules="role_rule"
      ref="role_ref">
      <el-form-item prop="role">
        <el-input
          clearable
          v-model="role_form.role"
          placeholder="请粘贴英雄榜" />
        <el-button type="primary" @click="check_role">解析</el-button>
      </el-form-item>
    </el-form>
    <div v-show="role_id" class="analysis-body">
      <div class="person-main">

      </div>
      <div class="equipment-con">
        <p class="title">装备</p>
        <div class="equipment-body">
          <div class="equ-box">
            <div
                v-for="(item, index) in id_list"
                 :key="index"
                 class="equ_display_father">
              <el-popover
                placement="right"
                :disabled="!Object.keys(equipments_map(item)).length"
                trigger="hover">
                <div class="dBox_tc_equip">
                  <div>
                    <h3 style="color:#FFFF00">{{equipments_map(item).name}}</h3>
                    <div class="eq_type">{{equipments_map(item).type}}</div>
                    <div class="tx3TextBlock" style="background-color: transparent; line-height: 120%;"
                         v-html="equipments_map(item).html">
                    </div>
                  </div>
                </div>
                <div slot="reference">
                  <img
                    v-show="Object.keys(equipments_map(item)).length"
                    :src="equipments_map(item) && equipments_map(item).img"
                    alt="">
                  <a
                    v-show="Object.keys(equipments_map(item)).length"
                    :class="equipments_map(item) && equipments_map(item).level_str"
                  ></a>
                </div>
              </el-popover>
            </div>
          </div>
          <div class="equ-ranking"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
