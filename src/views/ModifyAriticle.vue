<template>
  <el-form @submit.native.prevent ref="form" :model="form" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="文章标题">
      <el-input type="textarea" v-model="form.body"></el-input>
    </el-form-item>
    <el-form-item label="文章类别">
      <el-radio-group v-model="form.cateGory">
        <el-radio label="随笔"></el-radio>
        <el-radio label="前端"></el-radio>
        <el-radio label="后端"></el-radio>
        <el-radio label="基础知识"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'ModifyAriticle',
  data() {
    return {
      form: {}
    }
  },
   created() {
    this._getArticleNow()
  },
  methods: {
    async onSubmit() {
      await this.$http.put(`/article/${this.$route.params.id}`,this.form)
      this.$message({
      	message:'修改成功',
      	type:'success'
      })
      this.$router.push({
      	path:'/article/ArticleMain/list'
      })
    },
    async _getArticleNow() {
      const { data, status } = await this.$http.get(`/article/${this.$route.params.id}`)
      if (status === 200) {
        this.form = data
      }
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
