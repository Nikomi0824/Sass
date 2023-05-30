<template>
    <section class="contener">
        <h2  class="info">Что такое EVA коврики?</h2>
        <div class="ItemComparison">
            <ItemComparison  v-for="(item, index) in posts" :key="index" :item="item"/>
        </div>
        <img class="back" src="/img/Vector (5).png" alt="">
        <img class="backg" src="/img/Vector (4).png" alt="">
        <img class="backgr" src="/img/Vector (4).png" alt="">
        <img class="backgra" src="/img/Vector (4).png" alt="">
        <img class="backgrau" src="/img/Vector (4).png" alt="">
    </section>
</template>

<script>
import ItemComparison from './ItemComparison.vue';
export default{
    name:'BlockComparisons',
    components:{
        ItemComparison
    },
    data: () => {
        return {
            posts: [
                {
                    img: '/img/image00004 1.jpg',
                    title: 'МАТЕРИАЛ',
                    text: 'Коврики EVA всесезонные и отличаются уникальной поверхностью материала с ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде. Коврики воду не пропускают.',
                    
                },
                {
                    img: '/img/file 1.jpg',
                    title: 'ОТЛИЧИЯ',
                    text: 'Резиновые коврики загибаются и лезут на педали. EVA коврики такого не допустят! Специальные липучки держат его в одном положении. При желании, для водителя устанавливается подпятник из рельефного алюминия.',
                   
                },
                {
                    img: '/img/kov1-1-300x225 1.jpg',
                    title: 'РАСЦВЕТКА',
                    text: 'Автомобильные коврики EVA можно заказать и в индивидуальных размерах и в разных цветах, которые комбинируется на выбор покупателя с такими же цветами окантовочной полипропиленовой ременной ленты.',
                   
                }
            ]
        }
    }
}

</script>

<style scoped lang="scss">
.contener{
    .backgr{
    position: absolute;
    width: 110px;
    height: 125px;
    left: 397px;
    top: 1472px;
    opacity: 0.50;
    }
    .backg{
    position: absolute;
    width: 233px;
    height: 264px;
    left: 485px;
    top: 1221px;
    opacity: 0.50;
    }
    .back{
        position: absolute;
        width: 481px;
        height: 543px;
        left: 0px;
        top: 1016px;
        opacity: 0.50;
        
    }
    flex-direction: column;
    .info{
        margin-bottom: 93px;
    }
    .ItemComparison{
        display: flex;
    }
     .backgrau{
        display: none;
     }
    .backgra{
        display: none;
    }
}
@media only screen and (max-width: 1024px) {
  .contener{
    .ItemComparison{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }}
    .backgrau{
        display: flex;
        height: 45.923362731933594px;
        width: 40.41255569458008px;
        left: 691.282958984375px;
        top: 2013.7431640625px;
        border-radius: 0px;
    }
    .backgra{
        display: flex;
        height: 96.9901351928711px;
        width: 85.60114288330078px;
        left: 711.39892578125px;
        top: 1926.5743408203125px;
        border-radius: 0px;
    }
    .backgr   {
        height: 199.49107360839844px;
        width: 176.71307373046875px;
        left: 565px;
        top: 1769px;
    }

    .back{
        height: 199.49107360839844px;
        width: 176.71307373046875px;
        left: -44px;
        top: 943px;
        border-radius: 0px;
    }
    .backg{
        height: 96.9901351928711px;
        width: 85.60114288330078px;
        left: 102.39892578125px;
        top: 1100.5743408203125px;
        border-radius: 0px;
    }
}
</style>