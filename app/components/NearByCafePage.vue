
<script>
import SearchBar from './template/SearchBar.vue';
import CoffeeShopPage from './CoffeeShopPage.vue';

export default {
components:{
SearchBar
},

data(){
return{
list:[
{icon:'~/assets/logos/logo1.jpg',name:'Coffee Shop 1'},
{icon:'~/assets/logos/logo2.jpg',name:'Coffee Shop 2'},
{icon:'~/assets/logos/logo3.jpg',name:'Coffee Shop 3'},
{icon:'~/assets/logos/logo4.jpg',name:'Coffee Shop 4'},
{icon:'~/assets/logos/logo5.jpg',name:'Coffee Shop 5'},
{icon:'~/assets/logos/logo6.jpg',name:'Coffee Shop 6'},
{icon:'~/assets/logos/logo7.jpg',name:'Coffee Shop 7'},
],



}},

methods:{
coffeeShopNav(){
this.$navigateTo(CoffeeShopPage);
}
}
}
</script>




<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *">
<!-- Custom Header with Title, Menu Icon, and Search -->
<StackLayout row="0" class="header p-5">
<!-- Header row: Title left, Menu icon right -->
<GridLayout columns="*, auto" verticalAlignment="center">
<Label text="Coffee Shops" class="header-title" col="0" />

<!-- Menu Icon using NativeScript Icon Font -->
<Label class="fas icon" text.decode="&#xf0c9;" col="1" color="#ffff"/>
</GridLayout>

<!-- Search Bar below header row -->
<search-bar marginTop="10"/>

</StackLayout>

<!-- Product Grid (10 products) -->







<ScrollView row="1">
<StackLayout class="p-5">


<!-- Café Cards -->

<GridLayout columns="auto, *"
rows="auto"
marginBottom="10"
padding="10"
backgroundColor="#fff"
borderRadius="10"
shadowColor="#000"
shadowOpacity="0.2"
shadowRadius="6" v-for="(l,key) in list" :key="key"
@tap="coffeeShopNav">

<!-- Image on extreme left -->
<Image :src="l.icon" col="0" width="70" height="70" stretch="aspectFill" borderRadius="8" />
<!-- Cafe Details -->
<StackLayout col="1" paddingLeft="10">
<Label :text="l.name"
fontSize="16"
fontWeight="bold"
color="#6B4226" />

<Label text="0.5 km away"
fontSize="14"
color="#666" />

<StackLayout orientation="horizontal">
<Label text="⭐ 4.8"
fontSize="14"
color="#6B4226" />
</StackLayout>
</StackLayout>

</GridLayout>






<!-- Add more café cards here -->
</StackLayout>
</ScrollView>







</GridLayout>
</Page>
</template>

<style scoped>
.page { background-color: #fffaf3; }

/* Header */
.header {
background-color: #6B4226;
border-bottom-left-radius: 20;
border-bottom-right-radius: 20;
padding-bottom: 16;
}
.header-title {
font-size: 22;
font-weight: bold;
color: #ffffff;
}

/* Menu Icon */
.menu-icon {
font-family: "FontAwesome"; /* ensure font is loaded */
font-size: 24;
color: #ffffff;
vertical-align: center;
}

/* Search Bar */
.search-input {
border-width: 1;
border-color: #ffffff;
border-radius: 10;
padding: 8;
font-size: 14;
background-color: #ffffff;
margin-top: 8;
}

/* Product Cards */
.product-card {
background-color: white;
border-radius: 14;
padding: 12;
shadow-color: #000;
shadow-opacity: 0.1;
shadow-radius: 6;
}
.product-title { font-size: 16; font-weight: bold; color: #6B4226; margin-bottom: 2; }
.product-seller { font-size: 12; color: #555; margin-bottom: 4; font-style: italic; }
.product-price { font-size: 14; font-weight: bold; color: #2f855a; }

/* Spacing */
.mb-2 { margin-bottom: 8; }
.p-5 { padding: 20; }
.mt-2 { margin-top: 8; }
</style>
