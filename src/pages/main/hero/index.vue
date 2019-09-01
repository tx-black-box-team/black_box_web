<template>
  <div class="hero-main">
    <el-tabs
      class="hero-tabs"
      @tab-click="choose_tab"
      v-model="tab_selected"
      type="border-card"
      @tab-remove="remove_tab">
      <el-tab-pane
        :closable="false"
        label="英雄排行榜"
        name="hero">
        <div class="hero-body">
          <ranking />
        </div>
      </el-tab-pane>
      <el-tab-pane
        lazy
        v-for="item in hero_tabs"
        :key="item.id"
        :label="item.title"
        :closable="item.id !== 'new'"
        :name="item.id">
        <span slot="label">
          <i class="el-icon-plus" v-show="item.id === 'new'" />
          {{item.title}}
        </span>
        <div class="hero-body">
          <analysis />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>