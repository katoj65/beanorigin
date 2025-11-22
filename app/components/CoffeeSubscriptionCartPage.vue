
<script>
import AppLayout from './template/AppLayout.vue';
import CoffeeSubscriptionShowPage from './CoffeeSubscriptionShowPage.vue';
export default {

components: {
AppLayout,
},


methods:{
showPageNav(){
this.$navigateTo(CoffeeSubscriptionShowPage);
}




}







};
</script>

<template>
<app-layout>
<template #header>
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="5" paddingRight="5" >
<Label text="Subscriptions" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf002;" col="1" color="#fff" />
</GridLayout>
</template>
<template #content>
<StackLayout padding="0">






















</StackLayout>

</template>
</app-layout>
</template>