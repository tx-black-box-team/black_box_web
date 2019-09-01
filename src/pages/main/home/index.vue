<template>
  <div class="home">
    <div class="logo-con">
      <i></i>
      <p>天下3小黑盒</p>
    </div>
    <div class="search-box render" ref="search_area">
      <el-autocomplete
        v-model="search_text"
        :fetch-suggestions="query_search"
        :trigger-on-focus="false"
        @keypress.enter.native="search"
        @select="handleSelect"
        placeholder="请输入你想搜索的内容"
        popper-class="pop-list"
        clearable
        class="search-area" >
        <i
          class="el-icon-search el-input__icon"
          slot="prefix">
        </i>
        <template slot-scope="{ item }">
          <div class="top-info">
            <el-tag
              effect="dark"
              :color="beans.ROLE_TYPE[item.Type].color">
              {{beans.ROLE_TYPE[item.Type].value}}
            </el-tag>
            <el-tag :color="beans.ROLE_TYPE[item.Type].color"
              effect="dark"
              v-show="item.Type === 1">
              Lv.{{item.DengJi}}
            </el-tag>
            <div class="name">{{ item.Name }}</div>
          </div>
          <div class="bottom-info">
            <div class="service-indo">{{item.YXQ}}</div>
            <div class="create-time">{{utils.date_formart(item.CreateTime, 'date_time')}}</div>
          </div>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
