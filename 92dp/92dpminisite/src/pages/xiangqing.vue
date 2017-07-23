<template lang="html">

  <div class="container">
    <contheader></contheader>
    <contentheader></contentheader>   <!--  展示引入的header组件 -->
    <contentcontheader  v-for="item in items" :nickimg="item.nickimg" :nickname="item.nickname"></contentcontheader>
    <contentcont v-for="item in items" :contenttitle='item.contenttitle' :videodata="item.videodata" :cuscontent="item.cuscontent" :contenttime="item.contenttime" :shoucangnum="item.shoucangnum" :zannum="item.zannum"></contentcont>
    <contentpinglun v-for="item in items" :pinglunnickimg="item.pinglunnickimg" :pinglunnickname="item.pinglunnickname" :pingluntime="item.pingluntime" :pingluncont="item.pingluncont" :pinglunzannum ="item.pinglunzannum" :pinglunnum="item.pinglunnum"></contentpinglun>
    <div class="content">
       <div class="xiangguan"> 其他相关产品</div>
      <ul class="cont-ul">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <contentxiangguan v-for="item in items2" :nickimg="item.nickimg" :cont="item.cont" :name="item.name" :img="item.img" :nickname="item.nickname" :zannum="item.zannum" ></contentxiangguan>
      </ul>
    </div>
<!--list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->

  </div>
</template>
<script>
import contheader from '../components/contheader'
import contentheader from '../components/contentheader'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
import contentcontheader from '../components/contentcontheader'
import contentcont from '../components/contentcont'
import contentpinglun from '../components/contentpinglun'
import contentxiangguan from '../components/contentxiangguan'

export default {

  data () {
      return {
          items: [] ,
          items2:[]  /* 定义一个空数组数据items */
      }
  },
  components: {
    contentheader,
    contentcontheader,
    contentxiangguan,
    contentpinglun,
    contentcont,
    contheader
  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/xiangqing').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
      this.items = data.body.data;
      })

      this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
      this.items2 = data.body.data;
      })
   }

}</script>

<style lang="css" scoped>
*{
  font-family: "微软雅黑";
  margin:0;
  padding:0;
}
.xiangguan{
  font-size:.28rem;
  line-height: .9rem;
  height:.9rem;
  padding-left:.3rem;
  color:#666;
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
