<template>
  <div class="hello">
    <p>我叫{{userName}}</p>
    <p>年龄{{age}}</p>
    <p>
      <p v-if="sex==1">性别：男</p>
      <p v-else>性别：女</p>
      
    </p>
    
    <p  >
    爱好：
    <el-checkbox-group v-model="habby"  :show-overflow-tooltip="true">

    <el-checkbox label="吹牛"></el-checkbox>
    <el-checkbox label="吃饭"></el-checkbox>
    <el-checkbox label="打游戏"></el-checkbox>
  </el-checkbox-group>
    
</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: 'zhengxinghua',
      age:22,
      sex:1,
      habby:['吹牛','打游戏'],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
