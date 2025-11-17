<script>
import ProductShowPage from './ProductShowPage.vue';
export default {
components:{
ProductShowPage
},
data(){
return{
menu:[


],



}
},


methods:{
productShowNav(){
this.$navigateTo(ProductShowPage);
}





}
}
</script>


<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto" class="page"> <!-- Added third row for static button -->

<!-- Header -->



<StackLayout row="0" class="header p-5">
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="10" paddingRight="10">
<Label text="Buy Premium Coffee" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf002;" col="1" color="#fff" />
</GridLayout>
</StackLayout>





<!-- Dashboard Content -->
<ScrollView row="1">
<StackLayout class="p-5">




<StackLayout  backgroundColor="#faf8f5">

<!-- SEGMENT SECTION -->
<StackLayout marginBottom="20" backgroundColor="#fffaf3" padding="16">
<Label text="Coffee Categories"
        fontSize="20"
        fontWeight="bold"
        color="#3A2E2A"
        marginBottom="12" />




<GridLayout columns="*, *, *, *" rows="auto" columnGap="20">
<StackLayout col="0" horizontalAlignment="left">
    <Label text="Coffee" fontSize="16" fontWeight="bold" color="#6B4226" />
</StackLayout>


<StackLayout col="1" horizontalAlignment="left">
    <Label text="Instant" fontSize="16" fontWeight="bold" color="#A97458" />
</StackLayout>


<StackLayout col="2" horizontalAlignment="left">
    <Label text="Ground" fontSize="16" fontWeight="bold" color="#C7B9B3" />
</StackLayout>



<StackLayout col="3" horizontalAlignment="left">
    <Label text="Capsules" fontSize="16" fontWeight="bold" color="#C7B9B3" />
</StackLayout>



</GridLayout>
</StackLayout>

<!-- PRODUCT LIST -->
<StackLayout>
<GridLayout columns="auto, *" rows="auto" marginBottom="10" v-for="(x,key) in 30" :key="key" backgroundColor="#fff" padding="10" class="card" @tap="productShowNav">


<Image src="~/assets/product1.jpg"
        width="100"
        height="100"
        stretch="aspectFill"
        borderRadius="12" />

<StackLayout col="1" marginLeft="16" verticalAlignment="center">
    <Label text="Arabica Supreme"
            fontWeight="bold"
            fontSize="18"
            color="#3A2E2A" />

    <Label text="Premium Roast • Rich Aroma"
            fontSize="13"
            color="#7a706c"
            marginTop="4" />

    <Label text="UGX 25,000"
            fontSize="16"
            color="#6B4226"
            fontWeight="bold"
            marginTop="8" />
</StackLayout>
</GridLayout>
</StackLayout>

</StackLayout>








</StackLayout>
</ScrollView>
</GridLayout>
</Page>
</template>
<style scoped>
.page {
background-color: #fffaf3; /* Coffee cream */
}
.header {
padding: 10;
background-color: #6B4226;
}
.app-title {
font-size: 22;
font-weight: bold;
color: #ffffff;
margin-top: 8;
}
.subtitle {
font-size: 14;
color: #f0e68c;
}
.card {
background-color: white;
border-radius: 14;
padding: 18;
shadow-color: #000;
shadow-opacity: 0.1;
shadow-radius: 6;
}
.card-title {
font-size: 18;
font-weight: bold;
color: #6B4226;
margin-bottom: 8;
}
.card-subtitle {
font-size: 14;
color: #444;
}
.card-item {
font-size: 14;
color: #333;
margin-left: 8;
}
.impact-text {
font-size: 16;
font-style: italic;
color: #2f855a;
margin-top: 4;
}
.btn-buy {
background-color: #6B4226; /* coffee brown */
color: white;
font-size: 18;
font-weight: bold;
padding: 14;
border-radius: 12;
text-align: center;
}
.mb-3 { margin-bottom: 12; }
.mb-5 { margin-bottom: 20; }
.p-5 { padding: 10; }
</style>
