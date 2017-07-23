<template lang="html">

  <div class="container">
    <homepageheader></homepageheader>   <!--  展示引入的header组件 -->
    <homepagelogo></homepagelogo>
    <homepagead></homepagead>
    <div class="content">
      <ul class="cont-ul">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <homepagecont v-for="item in items" :nickimg="item.nickimg" :cont="item.cont" :name="item.name" :img="item.img" :nickname="item.nickname" :zannum="item.zannum" ></homepagecont>
      </ul>
    </div>
  </div>
</template>
<script>
import homepagead from '../components/homepagead'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
import homepageheader from '../components/homepageheader'
import homepagelogo from '../components/homepagelogo'
import homepagecont from '../components/homepagecont'
export default {

  data () {
      return {
          items: [] ,  /* 定义一个空数组数据items */
          items2:[]
      }
  },
  components: {
    homepagead,
    homepagelogo,
    homepagecont,
    homepageheader
  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
      this.items = data.body.data;
      })
  }

}</script>

<style lang="css" scoped>
*{
  font-family: "微软雅黑";
  margin:0;
  padding:0;
}
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
