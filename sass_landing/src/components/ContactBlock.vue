<template>
    <section class="contener">
        <div class="right">
            <h1>Инновационные коврики для автомобиля</h1>
            <p class="paragraf">в вашем городе</p>
            <button>ЗАКАЗАТЬ</button>
        </div>
        <img src="/img/коврф 1.png" alt="">
        <img class="back" src='/img/подложка 1 (1).png' alt="">
        <img class="backg" src="/img/Vector (3).png" alt="">
        <img class="backgr" src="/img/Vector (3).png" alt="">
        <img class="backgra" src="/img/Vector (3).png" alt="">
        <img class="backgrau" src="/img/Vector (3).png" alt="">
        <img class="backgraund" src="/img/Vector (3).png" alt="">
    </section>
</template>


<script>

export default{
    name:'ContactBlock',
 
}
</script>

<style scoped lang="scss">
.contener{ 
    .backgraund{
        position: absolute;
        width: 13px;
        height: 12px;
        top:709px ;
        left: 171px; 
        transform: rotate(-36.87deg);
    }
    .backgrau{
         position: absolute;
        width: 74px;
        height: 67px;
        top:687px ;
        left: 85px; 
        transform: rotate(-36.87deg);
    }
    .backgra{
         position: absolute;
        width: 43px;
        height: 39px;
        top:655px ;
        left: 142px; 
        transform: rotate(-36.87deg);
    }
    .backgr{
        position: absolute;
        width: 23px;
        height: 20px;
        top:313px ;
        right: 998px; 
    }
    .backg{
        position: absolute;
        width: 45px;
        height: 40px;
        top:321px ;
        right: 957px;  
    }
    .back{
        position: absolute;
        width: 745px;
         height: 522px;
        
        top:216px ;
        right: 87px;
    }
   
    p{
    font-size: 24px;
}
}

@media screen and (max-width: 650px) { 
    .contener{
       .backgraund{
        display: none;
    }
    .backgrau{
        display: none;
    }
    .backgra{
        display: none;
    }
    .backgr{
         display: none;
    }
    .backg{
         display: none;
        }
        .back{
            position: absolute;
width: 525px;
height: 368px;
left: 781px;
top: 537px;
        }
    
        
        .right{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img{
            display: none;
            
        }
    }
}
</style>