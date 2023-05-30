<template>
    <section class="contener">
        <div class="imegs">
            <img class="logo" src="/img/logo (2).png" alt="">
            <img src="/img/EVARUGS.png" alt="">
        </div>
        <nav>
            <a href="">отзывы</a>
            <a href="">что это?</a>
            <a href="">контакты</a>
        </nav>
    </section>
</template>

<script>
export default{
    name:'UnderHeaderBlock',
}
</script>

<style scoped lang="scss">
.contener{
    .imegs{
        display: flex;
        align-items: center;
        .logo{
        height: 59px;
        width: 100px;
        margin-right: 11px;
        }
    }
   nav{
    a{
        margin-right: 25px;
    }
   }
}
@media only screen and (max-width: 1024px) {
    .contener{
        nav{
            a{
                display: none;
            }
        }
    }
}

</style>
