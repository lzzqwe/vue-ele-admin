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
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: "",
        cateGory: "",
        body:''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$http.post('/article',{
        title:this.form.title,
        cateGory:this.form.cateGory,
        body:this.form.body
      }).then(() => {
        this.$message({
          message:'文章创建成功',
          type:'success'
        })
      })
      this.$router.push({
        path:'/article/ArticleMain/list'
      })
    }
  }
};
</script>