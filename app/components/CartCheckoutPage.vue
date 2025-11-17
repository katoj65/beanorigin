<script>
import CheckoutSuccessPage from './CheckoutSuccessPage.vue';
export default {



methods:{
checkout(){
this.$navigateTo(CheckoutSuccessPage);
},






}


}
</script>




<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">

<!-- Header -->
<StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label text="Checkout" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
</StackLayout>

<!-- Cart Items -->
<ScrollView row="1">
<StackLayout padding="20" spacing="16">




<!-- Item2 -->
<StackLayout orientation="horizontal" backgroundColor="white" padding="12" borderRadius="12" spacing="12" marginBottom="10" v-for="(x,key) in 1" :key="key">
<Image src="~/assets/product1.jpg" width="70" height="70" stretch="aspectFit"/>
<StackLayout paddingLeft="10">
<Label text="Original Gold" fontSize="16" fontWeight="bold" color="#6B4226"/>
<Label text="250g" fontSize="13" color="#555"/>
<Label text="$18" fontSize="14" fontWeight="bold" color="#2f855a"/>
</StackLayout>
<StackLayout verticalAlignment="center" horizontalAlignment="right">
<Label text="1" fontSize="14" fontWeight="bold" color="#444"/>
</StackLayout>
</StackLayout>





</StackLayout>
</ScrollView>

<!-- Summary & Checkout -->
<StackLayout row="2" backgroundColor="white" padding="20" borderTopLeftRadius="20" borderTopRightRadius="20">
<!-- Subtotal -->
<GridLayout columns="*, auto" marginBottom="8">
<Label text="Subtotal" fontSize="14" color="#555" col="0"/>
<Label text="$18" fontSize="14" fontWeight="bold" color="#444" col="1"/>
</GridLayout>

<!-- Shipping -->
<GridLayout columns="*, auto" marginBottom="8">
<Label text="Shipping" fontSize="14" color="#555" col="0"/>
<Label text="$2" fontSize="14" fontWeight="bold" color="#444" col="1"/>
</GridLayout>

<!-- Total -->
<GridLayout columns="*, auto" marginBottom="16">
<Label text="Total" fontSize="16" fontWeight="bold" color="#6B4226" col="0"/>
<Label text="$20" fontSize="16" fontWeight="bold" color="#6B4226" col="1"/>
</GridLayout>

<!-- Checkout Button -->
<Button text="Confirm Checkout"
backgroundColor="#6B4226"
color="#ffffff"
borderRadius="10"
padding="14"
fontSize="16"
fontWeight="bold"
@tap="checkout"
/>
</StackLayout>

</GridLayout>
</Page>
</template>
