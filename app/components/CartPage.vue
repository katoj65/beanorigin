<script>
import CartCheckoutPage from './CartCheckoutPage.vue';
export default {
components:{

},

methods:{
checkoutNav(){
this.$navigateTo(CartCheckoutPage);
}





}




}
</script>


<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">

<!-- Header -->
<StackLayout row="0" class="header p-5">
<GridLayout columns="*, auto" verticalAlignment="center">
<Label text="Shopping Cart" paddingLeft="10" class="header-title" col="0" />
<Label text.decode="&#xf0c9;" class="fas" col="1" color="#ffff" fontSize="19" paddingRight="10"/>
</GridLayout>
</StackLayout>

<!-- Cart Items -->
<ScrollView row="1">
<StackLayout class="cart-list p-5" spacing="16">

<!-- Cart Item 1 -->
<GridLayout columns="80, *, 60" class="cart-item" rows="auto">
<Image src="~/assets/logo.png" stretch="aspectFit" width="80" height="80" col="0" />
<StackLayout col="1" verticalAlignment="center" paddingLeft="12">
<Label text="Ethiopian Yirgacheffe" class="cart-item-title" />
<Label text="Seller: Farmer Ayele" class="cart-item-seller" />
<Label text="$18 / 250g" class="cart-item-price" />
</StackLayout>
<StackLayout col="2" verticalAlignment="center" horizontalAlignment="center" spacing="6">
<Label text="-" class="qty-btn" />
<Label text="1" class="qty-label" />
<Label text="+" class="qty-btn" />
</StackLayout>
</GridLayout>

<!-- Cart Item 2 -->
<GridLayout columns="80, *, 60" class="cart-item" rows="auto">
<Image src="~/assets/logo.png" stretch="aspectFit" width="80" height="80" col="0" />
<StackLayout col="1" verticalAlignment="center" paddingLeft="12">
<Label text="Colombian Supremo" class="cart-item-title" />
<Label text="Seller: Juan Martinez" class="cart-item-seller" />
<Label text="$16 / 250g" class="cart-item-price" />
</StackLayout>
<StackLayout col="2" verticalAlignment="center" horizontalAlignment="center" spacing="6">
<Label text="-" class="qty-btn" />
<Label text="2" class="qty-label" />
<Label text="+" class="qty-btn" />
</StackLayout>
</GridLayout>

<!-- Cart Item 3 -->
<GridLayout columns="80, *, 60" class="cart-item" rows="auto">
<Image src="~/assets/logo.png" stretch="aspectFit" width="80" height="80" col="0" />
<StackLayout col="1" verticalAlignment="center" paddingLeft="12">
<Label text="Kenyan AA" class="cart-item-title" />
<Label text="Seller: Farmer Wanjiku" class="cart-item-seller" />
<Label text="$20 / 250g" class="cart-item-price" />
</StackLayout>
<StackLayout col="2" verticalAlignment="center" horizontalAlignment="center" spacing="6">
<Label text="-" class="qty-btn" />
<Label text="1" class="qty-label" />
<Label text="+" class="qty-btn" />
</StackLayout>
</GridLayout>

</StackLayout>
</ScrollView>

<!-- Checkout Button -->
<StackLayout row="2" class="checkout p-5">
<Button text="Proceed to Checkout" class="btn-checkout" @tap="checkoutNav"/>
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
}
.header-title {
font-size: 22;
font-weight: bold;
color: #ffffff;
}
.menu-icon {
font-family: "FontAwesome";
font-size: 24;
color: #ffffff;
vertical-align: center;
}

/* Cart Items */
.cart-item {
background-color: white;
border-radius: 12;
padding: 12;
shadow-color: #000;
shadow-opacity: 0.1;
shadow-radius: 4;
}

/* Text */
.cart-item-title { font-size: 16; font-weight: bold; color: #6B4226; }
.cart-item-seller { font-size: 12; color: #555; font-style: italic; }
.cart-item-price { font-size: 14; font-weight: bold; color: #2f855a; }

/* Quantity Buttons */
.qty-btn {
width: 28;
height: 28;
font-weight: bold;
border-radius: 6;
background-color: #6B4226;
color: #fff;
text-align: center;
}
.qty-label { font-size: 14; width: 24; text-align: center; }

/* Checkout Button */
.btn-checkout {
background-color: #6B4226;
color: #ffffff;
font-size: 16;
font-weight: bold;
padding: 12;
border-radius: 10;
}
</style>
