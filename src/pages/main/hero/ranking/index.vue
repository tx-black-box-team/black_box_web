<template>
  <div class="ranking">
    英雄榜排行榜
    <ranking-filter
      v-model="draw_visible"
      @close_filter="close_filter"/>
    <el-button @click="openDraw">打开</el-button>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>