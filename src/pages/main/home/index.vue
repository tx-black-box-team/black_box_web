<template>
  <div class="home">
    <div class="search-box render" ref="search_area">
      <el-autocomplete
        v-model="search_text"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        @keypress.enter.native="search"
        @select="handleSelect"
        placeholder="请输入你想搜索的内容"
        clearable
        class="search-area" />
    </div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
