<template>
  <div class="header-main">
    <div class="logo" @click="back_home">
      <i></i>
      <p>天下3小黑盒</p>
    </div>
    <div class="menu-box">
      <el-menu :default-active="menu_selected" @select="menu_see" class="" mode="horizontal">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="hero">英雄榜</el-menu-item>
        <el-menu-item index="forces">势力</el-menu-item>
        <el-menu-item index="role">角色字典</el-menu-item>
        <el-menu-item index="pavilion">藏宝阁</el-menu-item>
      </el-menu>
    </div>
    <div class="user-box"></div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
