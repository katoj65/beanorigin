<script>
import PageLayout from './template/PageLayout.vue';
import HeaderCoffeeShop from './template/HeaderCoffeeShop.vue';
export default {
components:{
PageLayout,
HeaderCoffeeShop
},

data(){
return{
item:{


}


}
},

methods:{

}




}
</script>

<template>
<page-layout>
<GridLayout rows="auto, *, auto">
<header-coffee-shop/>












</GridLayout>
</page-layout>
</template>