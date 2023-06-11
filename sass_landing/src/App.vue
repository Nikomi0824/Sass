<template>
  <div id="app" :class="isDark ? 'dark' : 'light'">
   <HeaderBlock></HeaderBlock>
   <UnderHeaderBlock class="UnderHeader"></UnderHeaderBlock>
   <ContactBlock></ContactBlock>
   <ComparisonBlocks></ComparisonBlocks>
   <SwiperBlock class="SwiperBlock"></SwiperBlock>
   <AdaptivSwiper class="AdaptivSwiper" ></AdaptivSwiper>
   <FooterBlock class="FooterBlock"></FooterBlock>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue';
import UnderHeaderBlock from './components/UnderHeaderBlock.vue';
import FooterBlock from './components/FooterBlock.vue';
import ContactBlock from './components/ContactBlock.vue';
import ComparisonBlocks from './components/СomparisonBlock.vue'
import SwiperBlock from './components/SwiperBlock.vue';
import AdaptivSwiper from './components/AdaptivSwiper.vue';
import { mapGetters } from 'vuex';

export default{
  name:'App',
  components:{
    HeaderBlock,
    UnderHeaderBlock,
    FooterBlock,
    ContactBlock,
    ComparisonBlocks,
    SwiperBlock,
    AdaptivSwiper
 
  },
  computed:{
    ...mapGetters({ isDark: 'Get_Dark' }),
  }
}
</script>

<style lang="scss">
@import '/public/main.scss';
#app{
  font-family: Robot;
  .FooterBlock{
    
	width: 100%;
  margin-top: 200px;
  }
  
  
.UnderHeader{
  margin-top: 47px;
}
.AdaptivSwiper{
  display: none;
}
}
@media only screen and (max-width: 1024px) { 
  #app{
  .SwiperBlock{
    display: none;
  }
  .AdaptivSwiper{
  display: flex;
  }
}
}
.leght{
  background-color: #E5E5E5;
}
.dark{
    background-color:#696969;
  }
</style>
