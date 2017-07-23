<template lang="html">
  
  <li class="goods-list">   
  <router-link to="/xiangqing">
   <div  class="goods-list-link"> 
      <div class="goods-list-pic">
      <img :src="img" alt="">   <!-- 注意这图片的:src是vue的属性，里面的img是来自该组件的data中数据 -->
      </div>
      <div class="goods-list-desc">
        <p class="goods-list-name">{{ name }}</p> 
        <p class="goods-list-cont">{{ cont }}</p>  
        <img :src="nickimg" alt="" class="nickimg1">
        <p class="goods-list-nickname">{{ nickname }}</p> 
        <p class="zan-number">{{ zannum }}</p>
        <img class="zanicon" src="http://img2.imgtn.bdimg.com/it/u=2111605583,2809885087&fm=26&gp=0.jpg" alt="赞">
      </div>
      </div>
      </router-link>
  </li>
  
</template>

<script>
export default {
  props: ['name', 'img','cont','nickimg','nickname','zannum']   /*  props是子组件获取父组件数据用的 */
}
</script>

<style lang="css" scoped>
  .goods-list {
    width: 48%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    margin:0 1%;
  }
  .goods-list-link {
    display: block;
    padding: 0.5rem 0;
    margin: 0 ;
    text-align: center;
  }
  .goods-list:nth-of-type(even) .goods-list-link{
    margin-left: 0;
  }
  .goods-list:nth-of-type(odd) .goods-list-link{
    margin-right: 0;
  }
  .goods-list-pic > img {
    width: 100%;
    height: 6rem;
  }
  .goods-list-desc {
    padding: 0 0.5rem;
    border: 1px solid #F4F4F4;
    border-top:none;
    padding-bottom:10px;
  }
  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-list-name,.goods-list-price,.goods-list-cont {
    height: 1.2rem;
    width:100%;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float:left;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-list-cont {
    font-size: 0.5rem;
  
  }
  .nickimg1{
    height: 0.8rem;
    width: auto;
    float:left;
    margin-right:10px;
  }
  .goods-list-nickname{
    height: 0.8rem;
    float:left;
    text-align: left;
    line-height: 0.8rem;
    font-size:0.5rem;
  }
  .zan-number{
    height:0.5rem;
    width:auto;
    float:right;
    line-height: 0.5rem;
    text-align: center;
    font-size:0.5rem;
  }
  .zanicon{
   height:0.5rem;
    width:auto;
    float:right;
    margin-right: 10px;

  }

</style>