<template>
    <section>
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
</template>

<script>
export default {
    name: "AdaptivSwaper",
    
    data: () => {
        return {
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
</script>

<style scoped lang="scss">
section{
    background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .main{
            margin-top: 100px;
                display: flex;
                margin-bottom: 72px;
                flex-direction: column;
                align-items: center;
             
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


</style>