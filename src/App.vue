<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios  from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  mounted(){
    
    //let url = 'https://www.imooc.com/activity/servicetime'
    //代理 跨域
    let url = '/activity/servicetime'
    //CORS 跨域
    // axios.get(url).then(() => {
    // })
    //JSONP 跨域
    jsonp(url, (err, res) => {
      let result = res;
      this.data = result
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
