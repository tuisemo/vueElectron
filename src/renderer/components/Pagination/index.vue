<!-- 公共分页组件 -->
<template>
  <div class="pagination">
    <el-pagination
      :total="total"
      :page-sizes="[10,20,30,50]"
      :page-size="pageSize"
      :current-page="pageNum"
      layout="prev, pager, next"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    event: {
      type: Function,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      pageSize: 20
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this.event({
        pageSize: val,
        pageNum: 1
      })
    },
    handleCurrentChange(val) {
      this.event({
        pageSize: this.pageSize,
        pageNum: val
      })
    }
  }
}
</script>
<style scoped>
.pagination {
  padding: 15px 0;
}
</style>
