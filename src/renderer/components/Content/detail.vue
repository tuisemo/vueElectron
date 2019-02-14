<!-- 主题详情 -->
<template>
  <div class="contentWrap">
    <h2>{{ document.title }}</h2>
    <div v-html="document.content" />
  </div>
</template>

<script>
import * as api from '@/api/topic'
export default {
  data() {
    return {
      id: null,
      document: {}
    }
  },
  beforeMount() {
    this.id = this.$route.params.id
    this.getTopicDetail()
  },
  methods: {
    getTopicDetail() {
      api.getTopicDetail(this.id).then(res => {
        console.log('res: ', res)
        this.document = res.data
      }).catch(err => {
        this.$message.error(err.msg)
      })
    }
  }
}
</script>
<style lang='less'>
.contentWrap{
  padding: 10px 0;
img{
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
}
}
</style>
