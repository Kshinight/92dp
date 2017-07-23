<template>
<div>
<swiper :options="swiperOption" ref="mySwiperA">
  <!-- 幻灯内容 -->
  <swiper-slide><img src="http://s13.sinaimg.cn/mw690/005ZZ0z7gy6RCQ3SUxK0c&690" alt="首页轮播图"></swiper-slide>
  <swiper-slide><img src="http://s13.sinaimg.cn/mw690/005ZZ0z7gy6RCQ3SUxK0c&690" alt="首页轮播图"></swiper-slide>
  <swiper-slide><img src="http://s13.sinaimg.cn/mw690/005ZZ0z7gy6RCQ3SUxK0c&690" alt="首页轮播图"></swiper-slide>
  <swiper-slide><img src="http://s13.sinaimg.cn/mw690/005ZZ0z7gy6RCQ3SUxK0c&690" alt="首页轮播图"></swiper-slide>
  <swiper-slide><img src="http://s13.sinaimg.cn/mw690/005ZZ0z7gy6RCQ3SUxK0c&690" alt="首页轮播图"></swiper-slide>
  <swiper-slide><img src="http://s13.sinaimg.cn/mw690/005ZZ0z7gy6RCQ3SUxK0c&690" alt="首页轮播图"></swiper-slide>
  <!-- 以下控件元素均为可选 -->
  <div class="swiper-pagination" slot="pagination"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-scrollbar"  slot="scrollbar"></div>
</swiper>
</div>
</template>
<script>
  export default{
    props: ['headimg'],
    data(){
      return {
        swiperOption: {
          // 所有配置均为可选（同Swiper配置） 
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false

      }
    }
}
}
</script>