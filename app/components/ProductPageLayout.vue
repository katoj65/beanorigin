
<script>
import CartPage from './CartPage.vue';
import FarmerStoryPage from './FarmerStoryPage.vue';
import HeaderCoffeeShop from './template/HeaderCoffeeShop.vue';


export default {
components:{
HeaderCoffeeShop
},
data(){return{
item:1,
product:{
id:1,
name:'Nescafe Classic Coffee',
description:'This coffee supported 1 farmer and offset 2kg of CO₂. Premium quality with fruity notes.',
qtty:'250g',
price:'$18',
flavor:'Floral aroma with citrus notes, smooth chocolate finish.',
farmer_story:'Farmer Joshua has been growing coffee in the highlands of Uganda for over 15 years. His farm focuses on sustainable practices and high-quality Arabica beans.',
reviews:[
{rating:3,comment:''},
{rating:3,comment:''},



],

}


}},


methods:{
navCart(){
this.$navigateTo(CartPage);
},

farmerStoryNav(){
this.$navigateTo(FarmerStoryPage);
},

//quantity
qttyPlus(){
this.item=this.item+1;
},

qttyMinus(){
if(this.item>1){
this.item=this.item-1;
}
}




}
}
</script>





<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">

<!-- Header -->
<StackLayout row="0">
<header-coffee-shop/>
</StackLayout>

<!-- Product Details -->
<ScrollView row="1" paddingTop="20">
<StackLayout class="product-details" spacing="16" padding="10">

<!-- Product Image -->
<Image src="~/assets/images/img1.jpg" stretch="aspectFit" height="220" marginTop="25"/>






<!-- Quantity Selector -->
<GridLayout columns="auto, *, auto" class="quantity-selector" verticalAlignment="center">
<Label text.decode="&#xf056;" class="qty-btn fas icon" col="0" @tap="qttyMinus" fontSize="30" />
<Label :text="item" class="qty-label" col="1" textAlignment="center" fontSize="20" fontWeight="bold" color="#6B4226"/>
<Label text.decode="&#xf055;" class="qty-btn fas icon" col="2" @tap="qttyPlus" fontSize="30"/>
</GridLayout>







<!-- Product Info -->
<Label :text="product.name" class="product-title" marginTop="20"/>



<!-- <Label text="Seller: Joshua Kato" class="product-seller" /> -->
<Label :text="product.price+'/'+product.qtty" class="product-price" />



<!-- Product Impact / Description -->
<Label :text="product.description" class="product-description" textWrap="true" padding="20"/>




<!-- Farmer Story -->
<StackLayout class="section" padding="20" @tap="farmerStoryNav">

<Label class="section-title">
<FormattedString>
<Span text.decode="&#xf7b6;" color="#6B4226" paddingRight="10" class="fas icon"/><Span text=" Flavor Note"/>
</FormattedString>
</Label>
<Label :text="product.flavor" class="section-text" textWrap="true" />






<Label class="section-title"  marginTop="20">
<FormattedString>
<Span text.decode="&#xf007;" color="#6B4226" paddingRight="10" class="fas icon"/><Span text=" Farmer's Story"/>
</FormattedString>
</Label>




<Label :text="product.farmer_story" class="section-text" textWrap="true" />
</StackLayout>




<!-- Product Reviews -->
<StackLayout class="section" padding="20">
<Label text="Reviews" class="section-title" />


<!-- Review 1 -->
<StackLayout class="review" spacing="4" marginBottom="2">
<Label text="⭐⭐⭐⭐⭐" class="review-rating" />
<Label text="Absolutely love the fruity notes and aroma. Highly recommended!" class="review-text" textWrap="true" />
</StackLayout>


<!-- Review 2 -->
<StackLayout class="review" spacing="4">
<Label text="⭐⭐⭐⭐" class="review-rating" />
<Label text="Great coffee, rich flavor, but a little pricey for the quantity." class="review-text" textWrap="true" />
</StackLayout>

</StackLayout>

</StackLayout>
</ScrollView>




<!-- Add to Cart Button -->
<StackLayout row="2" class="p-4">
<Button text="Add to Cart" class="btn-add-cart" @tap="navCart">
<FormattedString>
<Span class="icon fas" text.decode="&#xf07a;"/>
<Span text=" Add to Cart"/>
</FormattedString>
</Button>
</StackLayout>

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
justify-content: center;
align-items: center;
}
.header-title {
font-size: 20;
font-weight: bold;
color: #ffffff;
text-align: center;
}

/* Product Info */
.product-title {
font-size: 20;
font-weight: bold;
color: #6B4226;
text-align: center;
}
.product-seller {
font-size: 14;
color: #555;
font-style: italic;
text-align: center;
}
.product-price {
font-size: 18;
font-weight: bold;
color: #2f855a;
text-align: center;
}
.product-description {
font-size: 14;
color: #333;
text-align: justify;
}

/* Sections (Farmer Story, Reviews) */
.section {
background-color: #fff;
border-radius: 10;
padding: 12;
shadow-color: #000;
shadow-opacity: 0.05;
shadow-radius: 4;
}
.section-title {
font-size: 16;
font-weight: bold;
color: #6B4226;
margin-bottom: 4;
}
.section-text {
font-size: 14;
color: #333;
text-align: justify;
}
.review {
background-color: #f9f5f0;
border-radius: 8;
padding: 8;
}
.review-rating {
font-size: 14;
}
.review-text {
font-size: 14;
color: #555;
}

/* Quantity Selector */
.quantity-selector {
margin-top: 12;
justify-content: center;
align-items: center;
height: 40;
border:solid thin red;
}

.qty-btn {
width: 50;
height: 50;
font-weight: bold;
border-radius: 6;
color:#6B4226;
text-align: center;
vertical-align: middle;
}
.qty-label {
width: 50;
text-align: center;
}

/* Add to Cart Button */
.btn-add-cart {
background-color: #6B4226;
color: #ffffff;
font-size: 18;
font-weight: bold;
padding: 14;
border-radius: 10;
}
</style>
