<template>
  <el-table :data="tableData" style="width:50%">
    <el-table-column prop="title" label="标题" width="140"></el-table-column>
    <el-table-column prop="body" label="内容" width="120"></el-table-column>
    <el-table-column prop="cateGory" label="类别"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        <el-button @click='handleEdit(scope.row)' type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "ArticleList",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this._getTableList()
  },
  methods: {
    async handleDelete(row) {

      this.$confirm("是否要删除该文档?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/article/${row._id}`)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this._getTableList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleEdit(row) {
      console.log(row)
      this.$router.push({
        path: `/article/modify/${row._id}`
      })
    },
    async _getTableList() {
      const { status, data } = await this.$http.get('/article')
      if (status === 200) {
        this.tableData = data
      }
    }
  }
};

</script>
<style lang="scss" scoped>
</style>
