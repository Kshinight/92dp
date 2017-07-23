<template>
<div>
  <hr  width="96%" style="margin: 0 2%;"/>
   
    <div class="pinglun">
          <input type="text" name="comment" placeholder="  说点什么，让他也认识看笔记的人吧"  class="text"/>
    </div>
    <li class="content-list">
    <div class="content-link">
    <div class="content-desc">
        <img :src="pinglunnickimg" alt="" class="nickimg1" >
        <p class="pinglun-nickname"> {{pinglunnickname}} </p> 
        <p class="pinglun-time"> {{pingluntime}} </p>
        <p class="zan-number"> {{pinglunzannum}} </p>
        <img class="zanicon" src="http://img2.imgtn.bdimg.com/it/u=2111605583,2809885087&fm=26&gp=0.jpg" alt="赞"> <br>
        <p class="pingluncont">{{pingluncont}}</p>
        <hr>
    </div>
    </div>
    </li>
    <div class="toall">查看全部 {{pinglunnum}} 条评论</div>
</div>
</template>

<script type="text/javascript">
  export default {
  props: ['pinglunnickimg', 'pinglunnickname','pingluntime','pingluncont','pinglunzannum','pinglunnum']   /*  props是子组件获取父组件数据用的 */
}
</script>
<style type="text/css" scoped>
  .pinglun input{
      margin:2% 5%;
      width:90%;
      color:#aaaaaa;
      height:30px;
      border: 0;
      background-color: #f5f5f5;
    }
    .nickimg1{
    height: 30px;
    width: auto;
    float:left;
    margin-right:10px;
     }
    .pinglun-nickname{
    height: 30px;
    float:left;
    text-align: left;
    line-height: 20px;
    font-size:15px;
    margin-top:5px;
     }
    .pinglun-time{
    height: 30px;
    float:left;
    text-align: left;
    line-height: 20px;
    font-size:10px;
    margin-top:5px;
    margin-left:20px;
    }
    .zan-number{
    height:30px;
    width:auto;
    float:right;
    line-height: 20px;
    text-align: center;
    font-size:20px;
    margin-top:5px;
     }
    .zanicon{
    height:30px;
    width:auto;
    float:right;
    margin-right: 10px;

     }
  .content-link{
    display: block;
    padding: 0.3rem 0;
    margin:0 5%;
    text-align: center;
    background-color: #fff;
  }
  .content-desc {
    padding: 0 0.5rem;
  }
  .content-list {
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .toall{
    width:100%;
    text-align:center;
    color:#C0C0C0;
    font-size:0.4rem;
    height:50px;
    margin-bottom: 40px;
  }
  hr{
    margin:2% 0;
    color:black;
  }
  .pingluncont{
    font-size:15px;
    margin:10px;
    margin-top:20px;
    text-align:left;
  }
</style>
