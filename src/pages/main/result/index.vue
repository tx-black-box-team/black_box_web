<template>
  <div class="result-main">
    <div class="result-header">
      <el-autocomplete
        v-model="search_text"
        :fetch-suggestions="query_search"
        :trigger-on-focus="false"
        @keypress.enter.native="search"
        @clear="reset_search"
        @select="handle_select"
        placeholder="请输入你想搜索的内容"
        clearable
        class="search-area" >
        <i
          class="el-icon-search el-input__icon"
          slot="prefix">
        </i>
      </el-autocomplete>
    </div>
    <div class="result-body">
      <i-scroll
        :on-reach-bottom="handle_reachBottom"
        height="100%"
        class="scroll-main">
          <i-row
            class="row-main"
            :gutter="3"
            v-for="(item, index) in table_data"
            :key="index">
              <i-col class="col-main"
                :span="8"
                v-for="(child, cIndex) in item"
                v-show="child && child.length > 0"
                :key="cIndex">
                <div></div>
              </i-col>
          </i-row>
      </i-scroll>
    </div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>