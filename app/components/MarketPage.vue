
<script>
import CartPage from './CartPage.vue';
import ProductPage from './ProductPage.vue';
import SearchBar from './template/SearchBar.vue';

export default {
components:{
SearchBar
},




methods:{
navCart(){
this.$navigateTo(ProductPage);
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
  <Label text="Coffee Products" class="header-title" col="0" />

  <!-- Menu Icon using NativeScript Icon Font -->
  <Label class="fas icon" text.decode="&#xf0c9;" col="1" color="#ffff"/>
</GridLayout>

<!-- Search Bar below header row -->
<search-bar marginTop="10"/>

</StackLayout>

<!-- Product Grid (10 products) -->
<ScrollView row="1">
<GridLayout columns="*, *" rows="auto, auto, auto, auto, auto" rowSpacing="16" columnSpacing="16" class="p-5">
  <!-- Row 1 -->
  <StackLayout class="product-card" col="0" row="0" @tap="navCart">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Ethiopian Yirgacheffe" class="product-title" />
    <Label text="Seller: Farmer Ayele" class="product-seller" />
    <Label text="$18 / 250g" class="product-price" />
  </StackLayout>

  <StackLayout class="product-card" col="1" row="0" @tap="navCart">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Colombian Supremo" class="product-title" />
    <Label text="Seller: Juan Martinez" class="product-seller" />
    <Label text="$16 / 250g" class="product-price" />
  </StackLayout>

  <!-- Row 2 -->
  <StackLayout class="product-card" col="0" row="1" >
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Kenyan AA" class="product-title" />
    <Label text="Seller: Farmer Wanjiku" class="product-seller" />
    <Label text="$20 / 250g" class="product-price" />
  </StackLayout>

  <StackLayout class="product-card" col="1" row="1">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Sumatra Mandheling" class="product-title" />
    <Label text="Seller: Farmer Rahmat" class="product-seller" />
    <Label text="$19 / 250g" class="product-price" />
  </StackLayout>

  <!-- Row 3 -->
  <StackLayout class="product-card" col="0" row="2">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Guatemalan Antigua" class="product-title" />
    <Label text="Seller: Maria Lopez" class="product-seller" />
    <Label text="$17 / 250g" class="product-price" />
  </StackLayout>

  <StackLayout class="product-card" col="1" row="2">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Brazilian Santos" class="product-title" />
    <Label text="Seller: Paulo Silva" class="product-seller" />
    <Label text="$15 / 250g" class="product-price" />
  </StackLayout>

  <!-- Row 4 -->
  <StackLayout class="product-card" col="0" row="3">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Honduran Marcala" class="product-title" />
    <Label text="Seller: Ana Gomez" class="product-seller" />
    <Label text="$18 / 250g" class="product-price" />
  </StackLayout>

  <StackLayout class="product-card" col="1" row="3">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Tanzanian Peaberry" class="product-title" />
    <Label text="Seller: John Mkapa" class="product-seller" />
    <Label text="$19 / 250g" class="product-price" />
  </StackLayout>

  <!-- Row 5 -->
  <StackLayout class="product-card" col="0" row="4">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Rwandan Bourbon" class="product-title" />
    <Label text="Seller: Claudine Uwimana" class="product-seller" />
    <Label text="$21 / 250g" class="product-price" />
  </StackLayout>

  <StackLayout class="product-card" col="1" row="4">
    <Image src="~/assets/logo.png" stretch="aspectFit" height="120"/>
    <Label text="Nicaraguan Maragogipe" class="product-title" />
    <Label text="Seller: Carlos Rivera" class="product-seller" />
    <Label text="$22 / 250g" class="product-price" />
  </StackLayout>
</GridLayout>
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
