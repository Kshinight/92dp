<template>
  <div>
        <div class="timu"> {{contenttitle}} </div>
        <div class="video">
            <div class="video1">  
              <video width="320" height="240" controls>
                    <source :src="videodata" type="video/mp4">
                    <source :src="videodata" type="video/ogg">
                    <source :src="videodata" type="video/webm">
                    <object :data="videodata" width="320" height="240">
                    <embed  :src="videodata" width="320" height="240">
                     </object> 
                </video>
            </div>
        </div>
        <div class="cuscontent">
              {{ cuscontent }} 
        </div>
        <div class="cusbottom">
            <div class="contenttime"> {{ contenttime }} 发布</div>
            
            <div class="shoucang">收藏 -  {{ shoucangnum }} </div>
            <div class="zan">赞 -  {{ zannum }} </div>
        </div>
    </div>
</template>

<script type="text/javascript">
  export default {
     props: ['contenttitle', 'videodata','cuscontent','contenttime','shoucangnum','zannum']   /*  props是子组件获取父组件数据用的 */
  }
</script>

<style scoped>
      .timu{
        line-height:16px;
        font-size:16px;
        font-family: "微软雅黑";
        font-weight: bold;
        margin:10px 20px;
       }
       .video{
        margin:2%;
        width:96%;
        height:300px;
        text-align: center;
       }
       .video1{
        margin:0 auto;
       }
       .cuscontent{
        margin:2% 5%;
        width:90%;
        height:auto;
        line-height:180%;
        font-size:16px;
        font-weight:700;
       }
       .cusbottom{
        margin:2%;
        width:96%;
        height:50px;
        overflow: hidden;
        text-align:center;
        margin:0 auto;
       }
       /*评论反馈*/
      .contenttime{
        float:left;
        margin:0 5%;
        height:15px;
        line-height:15px;
        font-size:10px;
        margin-top:15px;
       }
       .shoucang{
        float:right;
        margin-top:10px;
        background-color: red;
        border: 1px solid white;
        border-radius:4px;
        color:white;
        line-height:12px;
        text-align: center;
        font-size:12px;
        margin-right:20px;
        padding:6px 18px;
       }
       .zan{
        margin:0;
        float:right;
        margin-top:10px;
        border: 1px solid black;
        border-radius:4px;
        color:black;
        line-height:12px;
        text-align: center;
        font-size:12px;
        margin-right:20px;
        padding:6px 18px;
       }
</style>