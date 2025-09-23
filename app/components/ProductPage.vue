
<script>
import CartPage from './CartPage.vue';


export default {
data(){return{

}},


methods:{
navCart(){
this.$navigateTo(CartPage);
}
}
}
</script>





<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">

<!-- Header -->
<StackLayout row="0" class="header p-4">
<Label text="Product Details" class="header-title" />
</StackLayout>

<!-- Product Details -->
<ScrollView row="1" paddingTop="20">
<StackLayout class="product-details" spacing="16" padding="10">

<!-- Product Image -->
<Image src="~/assets/logo.png" stretch="aspectFit" height="220" marginTop="25"/>

<!-- Product Info -->
<Label text="Ethiopian Yirgacheffe" class="product-title" marginTop="20"/>
<Label text="Seller: Farmer Ayele" class="product-seller" />
<Label text="$18 / 250g" class="product-price" />

<!-- Product Impact / Description -->
<Label text="This coffee supported 1 farmer and offset 2kg of CO₂. Premium quality with fruity notes."
    class="product-description" textWrap="true" padding="5"/>

<!-- Farmer Story -->
<StackLayout class="section" padding="5">
<Label text="Farmer Story" class="section-title" />
<Label text="Farmer Ayele has been growing coffee in the highlands of Ethiopia for over 15 years. His farm focuses on sustainable practices and high-quality Arabica beans."
        class="section-text" textWrap="true" />
</StackLayout>

<!-- Product Reviews -->
<StackLayout class="section" padding="5">
<Label text="Reviews" class="section-title" />

<!-- Review 1 -->
<StackLayout class="review" spacing="4">
<Label text="⭐⭐⭐⭐⭐" class="review-rating" />
<Label text="Absolutely love the fruity notes and aroma. Highly recommended!" class="review-text" textWrap="true" />
</StackLayout>

<!-- Review 2 -->
<StackLayout class="review" spacing="4">
<Label text="⭐⭐⭐⭐" class="review-rating" />
<Label text="Great coffee, rich flavor, but a little pricey for the quantity." class="review-text" textWrap="true" />
</StackLayout>

</StackLayout>

<!-- Quantity Selector -->
<GridLayout columns="auto, *, auto" class="quantity-selector" verticalAlignment="center">
<Label text="-" class="qty-btn" col="0" />
<Label text="1" class="qty-label" col="1" textAlignment="center" />
<Label text="+" class="qty-btn" col="2" />
</GridLayout>

</StackLayout>
</ScrollView>

<!-- Add to Cart Button -->
<StackLayout row="2" class="p-4">
<Button text="Add to Cart" class="btn-add-cart" @tap="navCart" />
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
}
.qty-btn {
width: 36;
height: 36;
font-weight: bold;
border-radius: 6;
background-color: #6B4226;
color: #fff;
text-align: center;
vertical-align: middle;
}
.qty-label {
font-size: 16;
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
