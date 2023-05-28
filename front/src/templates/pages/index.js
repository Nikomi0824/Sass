import routerPageHook from '@utilities/routerPageHook.js';
import Vue from 'vue';
import { mapState } from 'vuex';
import SwiperBlock from '@components/ui-components/swiper-block/SwiperBlock.vue'


export default {
    name: 'index',
    data() {
        return {
            template: '<main></main>',
        };
    },
    components:{
        SwiperBlock,
       
    },
    computed: {
        ...mapState('mobile', ['isMobile']),
    },
    ...routerPageHook,
    render(createElement) {
        return Vue.compile(this.template).render.call(this, createElement);
    },
};
