<template>
    <section class="all" :class="isDark ? 'dark' : 'light'">
        <swiper
        :slidesPerView=1
        :spaceBetween="20" 
        :slidesPerGroup="3" 
        :loop="true"
    
    class="swiper contener"
    >
    <swiper-slide class="swiper-slide" v-for="item in swiperTextBase" :key="item.id">
        <div class="main">
            <img :src="item.img" alt="">
            <div class="texts">
                <p class="text">{{ item.text }}</p>
                
                <p class="title">{{ item.title }}</p>
            </div>
        </div>
            
       
    </swiper-slide>
    </swiper>
    </section>
    
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapGetters } from 'vuex'

export default{
    name:"SwiperBlock",
    computed:{
        ...mapGetters({ isDark: 'Get_Dark' }),

    },
    components:{
        Swiper,SwiperSlide
    },
    data:()=>{
        return{
            swiperTextBase: [
                {
                    img: '/img/Mask Group (2).png',
                    title: "МАТЕРИАЛ",
                    text: 'Коврики EVA всесезонные и отличаются уникальной поверхностью материала с ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде. Коврики воду не пропускают.'
                },
                {
                    img: '/img/Mask Group.png',
                    title: "МАТЕРИАЛ",
                    text: 'Коврики EVA всесезонные и отличаются уникальной поверхностью материала с ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде. Коврики воду не пропускают.'
                },
                {
                    img: '/img/Mask Group (1).png',
                    title: "МАТЕРИАЛ",
                    text: 'Коврики EVA всесезонные и отличаются уникальной поверхностью материала с ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде. Коврики воду не пропускают.'
                }
            ]
        }
    }
   
}

</script >

<style scoped lang="scss">
.dark{
    background: linear-gradient(90deg, #74346f,#5b2438,#523370);    
}
.light{
    background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
}
.swiper{
    margin-top: 262px;
    .swiper-slide {
         
        .main{
            margin-top: 100px;
                display: flex;
                margin-bottom: 72px;
                flex-direction: column;
                align-items: center;
             img{
                position:absolute;
                top:0;    
                margin-bottom: -25px;
            }
            .texts{
                background-color: white;
                width: 536px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                 border-radius: 9px;
                 img{
                    margin: 21px,0,9,0;
                 }
                 .text{
                    margin-top: 50px;
                 }
                
                 
            }
        }
            
    }
    
}






</style>