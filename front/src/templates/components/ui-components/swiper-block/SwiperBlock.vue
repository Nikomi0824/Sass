<template>
    <section class="all" id="otz">
        <swiper :slidesPerView=1 :spaceBetween="20" :slidesPerGroup="3" :loop="true" class="swiper contener">
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
         <section class="adaptiv">
            <div class="items" v-for="item in swiperTextBase" :key="item.id"> 
                <div class="main">
                    <div class="texts">
                        <img class="imgs" :src="item.img" alt="">
                        <p class="text">{{ item.text }}</p>
                        <img src="/img/Line 1.png" alt="">
                        <p class="title">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
    name: "SwiperBlock",
    components: {
        Swiper, SwiperSlide
    },
    data: () => {
        return {
            swiperTextBase: [
                {
                    img: '/img/Mask Group (2).png',
                    title: "Константин В",
                    text: 'Коврики супер!!! Качество на высшем уровне!!!Удачи и побольше заказов вам!!! Большое спасибо!'
                },
                {
                    img: '/img/Mask Group.png',
                    title: "Вера К.",
                    text: 'Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.'
                },
                {
                    img: '/img/Mask Group (1).png',
                    title: "Николай П.",
                    text: 'Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.'
                }
            ]
        }
    }

}

</script >

<style scoped lang="sass">
</style>