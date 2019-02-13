<!-- 公共容器 -->
<template>
  <div v-loading="loading" class="collapse">
    <template v-for="(item,index) in topicList">
      <div :key="index" class="collapse-item" @click="routerLink(item.id)">
        <div class="left-part">
          <img class="user_avatar" :src="item.author.avatar_url" :alt="item.author.avatar_url">
          <span class="reply_count">
            {{ item.reply_count+'/'+item.visit_count }}
          </span>
          <el-tag size="mini">
            {{ item.tab }}
          </el-tag>
          <span class="title">
            {{ item.title }}
          </span>
        </div>
        <div class="right-part">
          <span class="last_active_time" />
        </div>
      </div>
    </template>

    <pagination :total="300" :page-num="params.pageNum" :event="pageEvent" />
  </div>
</template>

<script>
import * as api from '@/api/user'
export default {
  props: {
    tab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      params: {
        pageSize: 20,
        pageNum: 1
      },
      topicList: []
    }
  },
  beforeMount() {
    this.getTopics()
  },
  methods: {
    pageEvent({ pageSize, pageNum }) {
      this.params.pageSize = pageSize
      this.params.pageNum = pageNum
      this.getTopics()
    },
    getTopics() {
      this.loading = true
      api.getTopics({ tab: this.tab, page: 1, limit: 20 }).then(res => {
        this.topicList = res.data.data
        this.loading = false
      }).catch(error => {
        this.loading = false
        this.$message.error(error.msg)
      })
    },
    routerLink(id) {
      this.$router.push({ path: `/cnode/detail/${id}` })
    }
  }
}
</script>
<style lang='less' scoped>
.collapse {
  // border-top: 1px solid #ebeef5;
  // border-bottom: 1px solid #ebeef5;
  .collapse-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    line-height: 48px;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    -webkit-transition: border-bottom-color 0.3s;
    transition: border-bottom-color 0.3s;
    outline: 0;
    .left-part {
      display: flex;
      flex-grow: 1;
      align-items: center;
      .title{
        flex: 1;
        width: 0;
        padding:0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .right-part {
      width: 80px;
    }
  }
  .collapse-item:last-child{
    border-bottom: none;
  }
  .user_avatar {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  .reply_count {
    width: 80px;
    text-align: center;
    font-size: 12px;
    color: #999999;
  }
}
</style>
