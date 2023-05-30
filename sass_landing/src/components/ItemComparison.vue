<template>
    <section class="items">
        <div class="info">
            <img :src="item.img" alt="">
            <p class="title"><strong>{{ item.title }}</strong></p>
            <p class="texts paragraf">{{ item.text }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ItemComparison',
     props: {
        item: Object
    }
    }
</script>

<style scoped lang="scss">
.items{
    width: 100%;
        .info{
            background-color: white;
            margin-right: 61px;
            border-radius: 9px;
             img{
                 height: 242px;
                 width: 363px;
             }
             .title{
                 font-size: 36px;
                 margin-left: 37px;
                 margin-bottom: 7px;
             }
             .texts{
                 color: #767676;
                 margin-left: 37px;
                 
             }
    }
}
@media only screen and (max-width: 1024px) {
    .items{
        width: 594px;
        max-width: 100%;
        padding: 0 87px;
        margin: 0 auto;
        
            .info{
                margin-bottom: 47px;
                img{
                    height: 189px;
                     width: 100%;
                    }
            }
        }
}
</style>