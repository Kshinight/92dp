<template>
	<div class="contentcont">
		<div class="touxiang">
        	<div class="pic"><img :src="nickimg" alt="头像图片"></div>
        	<div class="name"><p> {{ nickname }} </p> </div>
        	<div class="focus">+关注</div>
        </div>
        <hr>
	</div>
</template>

<script type="text/javascript">
	export default {
  props: ['nickimg','nickname']   /*  props是子组件获取父组件数据用的 */
}
</script>

<style type="text/css" scoped>
		.touxiang{
			margin:2%;
			width:96%;
			height:50px;
			overflow:hidden;
		}
		.pic{
			margin:0 5%;
			height:48px;
			float:left;
			width:60px;
		}
		.focus{
			margin-right:5%;
			border:1px #ff2741 solid;
			float:right;
			text-align: center;
			border-radius:4px;
			color:red;
			font-size:12px;
			padding:6px 18px
		}
		.name{
			width:20%;
			height:48px;
			float:left;
			line-height:48px;
			font-size:0.5rem;
		}
    .focus:active{
      background-color:gray ;
    }
    hr{
    	width:85%;
    	margin:0 auto;
    }
     img{
    width: 100%;
    height: auto;
    }
</style>