<template>
  <div class="result-main">
    <div class="result-header">
      <el-autocomplete
        v-model="search_text"
        :fetch-suggestions="query_search"
        :trigger-on-focus="false"
        @keypress.enter.native="search_enter"
        @clear="reset_search"
        @select="handle_select"
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
            <div class="name" v-html="item.Name"></div>
          </div>
          <div class="bottom-info">
            <div class="service-indo">{{item.YXQ}}</div>
            <div class="create-time">{{utils.date_formart(item.CreateTime, 'date_time')}}</div>
          </div>
        </template>
      </el-autocomplete>
    </div>
    <div class="result-body">
      <i-scroll
        :on-reach-bottom="handle_reachBottom"
        height="100%"
        class="scroll-main" :scope="span = this.span">
          <i-row
            class="row-main"
            type="flex"
            v-for="index of Math.ceil(table_data.length / span)"
            :key="index">
              <i-col class="col-main"
                :span="24 / span"
                v-for="cIndex of (index < Math.ceil(table_data.length / span) ? span : table_data.length % span)"
                :key="cIndex">
                <div class="card-main" :scope="item = table_data[(index - 1) * span + (cIndex - 1)]">
                  <div class="header">
                    <el-tag
                      :color="beans.ROLE_TYPE[item.Type].color"
                      effect="dark">
                      {{beans.ROLE_TYPE[item.Type].value}}
                    </el-tag>
                    <el-tag :color="beans.ROLE_TYPE[item.Type].color"
                      effect="dark"
                      v-show="item.Type === 1">
                      Lv.{{item.DengJi}}
                    </el-tag>
                    <span>{{item.Name}}</span>
                  </div>
                  <div class="body">
                    <span>
                      服务器
                      <em>{{item.YXQ}}</em>
                    </span>
                    <span v-show="item.Type !== 2">
                      势力
                      <em>{{item.ShiLi || '无'}}</em>
                    </span>
                  </div>
                  <div class="footer">
                    <span>
                      最近更新时间
                      <em>{{utils.date_formart(item.CreateTime, 'date_time')}}</em>
                    </span>
                  </div>
                </div>
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