<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :lazy="true" label="全部" name="all">
      <ContentList />
    </el-tab-pane>
    <el-tab-pane :lazy="true" label="精华" name="good">
      <ContentList tab="good" />
    </el-tab-pane>
    <el-tab-pane :lazy="true" label="分享" name="share">
      <ContentList tab="share" />
    </el-tab-pane>
    <el-tab-pane :lazy="true" label="问答" name="ask">
      <ContentList tab="ask" />
    </el-tab-pane>
    <el-tab-pane :lazy="true" label="招聘" name="job">
      <ContentList tab="job" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ContentList from '@/components/Content'
export default {
  components: {
    ContentList
  },
  data() {
    return {
      activeName: 'all'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
