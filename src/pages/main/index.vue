<template>
  <div class="main">
    <div class="flur-box" ref="main_bg"></div>
    <tx-header />
    <div class="main-body">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
