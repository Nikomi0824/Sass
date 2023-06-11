<template>
    <section class="contener" :class="isDark? 'dark':'light' ">
        <div class="imegs">
            <img class="logo" src="/img/logo (2).png" alt="">
            <img src="/img/EVARUGS.png" alt="">
        </div> 
        <nav>
            <a href="">отзывы</a>
            <a href="">что это?</a>
            <a href="">контакты</a>
            <div class="dadrkmode" v-on:click="toggleDarkMode">{{ themeButtonLabel }}</div>
        </nav>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default{
    name:'UnderHeaderBlock',
    computed: {
        ...mapGetters({isDark:'Get_Dark'}),

        themeButtonLabel() {
            return this.isDark ? 'dark off' : 'dark on'
        }
    },
    methods: {
        ...mapMutations({
            toggleDarkMode: 'SET_DARK_MODE'
        })
    }
    
}
</script>

<style scoped lang="scss">
.dark{
    nav{
        a{
            color: aliceblue;
        }
    }
}
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
    display: flex;
    align-items: center;
    a{
        margin-right: 25px;
    }
    .dadrkmode{
        cursor: pointer;
        font-size: 18PX;
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
