<template>
    <section class="contener">
        <div class="one">
            <p><strong>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</strong></p>
            <img src="/img/512px-Instagram_new 1.png" alt="Instagram">
        </div>
        <div class="two">
            <p><strong>КОНТАКТНЫЕ ТЕЛЕФОНЫ</strong></p>
            <p class="under">+375 29 292-29-29 (VEL) +375 33 333-33-33 (МТС)</p>
        </div>
        <div class="free">
            <p><strong>О НАС</strong></p>
            <p class="under">Индивидуальное изготовление EVA ковриков для вашего автомобиля</p>
            <p>ваш город</p>
        </div>
        <img class="back" src="/img/Vector (6).png" alt="">
        <img class="backg" src="/img/Vector (6).png" alt="">
    </section>
</template>

<script>
export default{
    name:'FooterBlock'
}
</script>

<style scoped lang="scss">
.contener{
    .backg{
    position: absolute;
width: 233px;
height: 264px;
left: 1200px;
top: 2100px;

    }
    .back{
    position: absolute;
    width: 110px;
    height: 125px;
    left: 69px;
    top:2200px;
    }
    align-items: start;
    justify-content: space-around;
    font-size: 14px;
    
    .two,.free{
        .under{
         width: 180px;
        }
    }
}
@media screen and (max-width: 650px) {
    .contener{
        flex-direction: column;
        align-items: center;
        .two,
        .one,
        .free{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .two{
            order: -1;
        }
    }
}
@media screen and (max-width: 1020px)  {
    
    .contener{
        .back{
            height: 96.9901351928711px;
            width: 85.60114288330078px;
            left: 99px;
            top: 3900px;
        }    
        .backg{
            height: 45.923362731933594px;
            width: 40.41255569458008px;
            left: 700px;
            top: 3900px;
            border-radius: 0px;
        }   
    }
}
</style>