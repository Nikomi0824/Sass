<template>
    <section class="informations">
        <div class="contener">
            <div class="one">
                <img src="/img/1.png" alt="logo-contact">
                <p>+375 29 292-29-29 (VEL)</p>
                <p>+375 33 333-33-33 (МТС)</p>
            </div>
            <div class="two">
                <img src="/img/2.png" alt="logo-location">
                <p>ваш город</p>
            </div>
            <div class="three">
                <img src="/img/3.png" alt="logo-applications">
                <p>посетите нашу страницу</p>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'HeaderBlock',
}
</script>

<style scoped lang="scss">
@import '/public/global.scss';
.informations{ 
    background: $headerGradient;
    color:$Belui;
    
   .contener{
    @include Conteiner;
    div{
        @include Colom;
        font-size: 15px;
    }
    .one{
        img{
            height: 20px;
            width: 20px;
            margin-left: 12px;
        }
        p{
            margin-left: 12px;
        }
    }
    .two{
        img{
            height: 25px;
            width: 15px;
            margin-right: 8px;
        }
    }
    .three{
          img{
            height: 30px;
            width: 30px;
            margin-right: 15px;
        }
        p{
           width: 128px;
        }
    }
    
   }
}
@media only screen and (max-width: 1024px) { 
    .one {
        img{
            display: none;
        }
        p{
            display: none;
        }

    }
}
@media screen and (max-width: 650px) { 
    
    .contener {
        flex-direction: column;
        .three{
            p{
                display: none;
                
            }
        }
        .one {
            flex-direction: column;
            margin-bottom: 8px;
            p{
                display: flex;
            }
        }
        div {
            img{
                 display: none;
            }
        }
    }
 }
</style>