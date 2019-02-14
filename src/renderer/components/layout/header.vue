<!-- 公共顶部 -->
<template>
  <el-row type="flex" justify="center" class="AppHeader">
    <el-col :lg="16" :md="20" :sm="22">
      <div>
        <a href="/" />
        <el-menu :default-active="activeIndex" router mode="horizontal" @select="handleSelect">
          <el-menu-item index="/cnode">
            Cnode 社区
          </el-menu-item>
          <el-menu-item index="/douban">
            豆瓣电影
          </el-menu-item>
          <el-menu-item index="/oneRead">
            ONE 阅读
          </el-menu-item>
          <el-menu-item index="4">
            招聘
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/cnode'
    }
  },
  methods: {
    handleSelect() {
      // console.log(1)
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
a{
  text-decoration: none;
}
</style>
