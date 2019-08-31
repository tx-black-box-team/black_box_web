<template>
  <div class="home">
    <div class="logo-con">
      <i></i>
      <p>天下3小黑盒</p>
    </div>
    <div class="search-box" ref="search_area">
      <el-autocomplete
        v-model="search_text"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        @keypress.enter.native="search"
        @select="handleSelect"
        placeholder="请输入你想搜索的内容"
        popper-class="pop-list"
        highlight-first-item
        clearable
        class="search-area" >
        <i
          class="el-icon-search el-input__icon"
          slot="prefix">
        </i>
        <template slot-scope="{ item }">
          <el-tag
            effect="dark"
            :color="beans.ROLE_TYPE[item.Type].color">
            {{beans.ROLE_TYPE[item.Type].value}}
          </el-tag>
          <div class="name">{{ item.Name }}</div>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
