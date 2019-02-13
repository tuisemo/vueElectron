<!-- 公共容器 -->
<template>
  <el-row type="flex" justify="center">
    <el-col :lg="16" :md="20" :sm="22" class="wrap">
      <div class="side-bar">
        <slot name="sideBar" />
      </div>
      <div class="main-container">
        <slot name="main" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>
<style lang='less' scoped>
.wrap {
  display: block;
  .main-container,
  .side-bar {
    position: relative;
    border-radius: 2px;
    padding: 0 10px;
    box-sizing: border-box;
    background: #ffffff;
  }
  .main-container {
    margin-right: 250px;
  }
  .side-bar {
    float: right;
    width: 240px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  }
}
</style>
