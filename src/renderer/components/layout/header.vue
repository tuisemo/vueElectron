<!-- 公共顶部 -->
<template>
  <el-row type="flex" justify="center" class="AppHeader">
    <el-col :lg="16" :md="20" :sm="22">
      <div>
        <a href="/" />
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">精华</el-menu-item>
          <el-menu-item index="2">分享</el-menu-item>
          <el-menu-item index="3">问答</el-menu-item>
          <el-menu-item index="4">招聘</el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect () {
      console.log(1)
    }
  }
}
</script>
<style lang="less" scoped>
.AppHeader{
    margin-bottom: 15px;
    background: #ffffff;
    border-bottom: solid 1px #e6e6e6;
    .el-menu.el-menu--horizontal{
        border-bottom:none;
    }
}
</style>
