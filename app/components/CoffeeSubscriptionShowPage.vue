<script>
import AppLayout from './template/AppLayout.vue';
import CoffeeSubscriptionCartPage from './CoffeeSubscriptionCartPage.vue';
export default {
components:{
AppLayout,  
},

data(){return{
product:{
id:1,
name:'Nescafe Classic Coffee',
description:'This coffee supported 1 farmer and offset 2kg of CO₂. Premium quality with fruity notes.',
qtty:'250g',
price:'Shs. 20,000',
flavor:'Floral aroma with citrus notes, smooth chocolate finish.',
farmer_story:'Farmer Joshua has been growing coffee in the highlands of Uganda for over 15 years. His farm focuses on sustainable practices and high-quality Arabica beans.',
tax:0,
delivery_fee:2000,
sub_total:200000,
discount:0,
total:202000,


},

}},



methods:{
navCart(){
this.$navigateTo(CoffeeSubscriptionCartPage);
}
}









}
</script>
<template>
<app-layout>    
<template #header> 
<GridLayout columns="*, auto" verticalAlignment="center" >
<Label text="Coffee Subscription" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf002;" col="1" color="#fff" />
</GridLayout>
</template>
<template #content>
<GridLayout rows="auto, *, auto" class="page">



<ScrollView row="0">






<StackLayout marginBottom="17" backgroundColor="#fffaf3" padding="0">
<Label text="Your Weekly Plan"
fontSize="20"
fontWeight="bold"
color="#3A2E2A"
marginBottom="12"
class="product-title" />





<StackLayout>
<Image src="~/assets/images/img1.jpg" stretch="aspectFit" height="220" marginTop="25"/>
</StackLayout>


<StackLayout>


<!-- Product Info -->
<Label :text="product.name" class="product-title" marginTop="20"/>

<Label class="product-price">
<formatted-string>
<Span :text="product.price+' '" />
<Span  text=" | " class="fas icon" style="padding-right:20px;" color="#fffff" fontSize="20"/>
<Span :text="' '+product.qtty" color="#6B4226" paddingLeft="20"/>
</formatted-string>
</Label>

<Label :text="product.description" class="product-description" textWrap="true" padding="20"/>





<!-- Two Buttons Section -->
<GridLayout columns="*, *" columnSpacing="12" padding="0" marginBottom="10">
    
    <!-- Items Button -->
    <Label 
        col="0"
        text="1 Items"
        backgroundColor="#FFFFFF"
        color="#6B4226"
        fontSize="16"
        fontWeight="bold"
        borderRadius="12"
        padding="16"
        textAlignment="center"
        verticalAlignment="center"
        tap="onItemsTap"
        width="90%"
        marginRight="2%"
     />
    
    <!-- Delivery Date Button -->
    <Label 
        col="1"
        text="Delivery Date"
        backgroundColor="#FFFFFF"
        color="#6B4226"
        fontSize="16"
        fontWeight="bold"
        borderRadius="12"
        padding="16"
        textAlignment="center"
        verticalAlignment="center"
        tap="onDeliveryDateTap"
         width="90%" 
         marginLeft="3%" />
    
</GridLayout>




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





<StackLayout 
backgroundColor="#FFFFFF"
borderRadius="16"
padding="24"
marginBottom="20" marginTop="15">

<Label text="Order Summary" fontSize="16" fontWeight="bold" color="#6B4226" marginBottom="16" />



<!-- Subtotal -->
<GridLayout columns="*, auto" marginBottom="12">
<Label col="0" text="Subtotal" fontSize="14" color="black"/>
<Label col="1" text="Shs. 20,000" fontSize="14"/>
</GridLayout>



<!-- Quantity -->
<GridLayout columns="*, auto" marginBottom="16">
<Label  col="0" text="Number of Items" fontSize="14" color="black"/>
<Label col="1"text="20" fontSize="14"/>
</GridLayout>


<!-- Tax -->
<GridLayout columns="*, auto" marginBottom="12">
<Label col="0" text="Tax (0%)" fontSize="14" color="black"/>
<Label col="1" text="Shs. 0" fontSize="14"/>
</GridLayout>

<!-- Discount -->
<GridLayout columns="*, auto" marginBottom="16">
<Label  col="0" text="Discount" fontSize="14" color="black"/>
<Label col="1"text="Shs. 0.00" fontSize="14"/>
</GridLayout>


<!-- Delivery -->
<GridLayout columns="*, auto" marginBottom="16">
<Label  col="0" text="Delivery Fee" fontSize="14" color="black"/>
<Label col="1"text="Shs. 2,000" fontSize="14"/>
</GridLayout>


<!-- Delivery Time -->
<GridLayout columns="*, auto" marginBottom="16">
<Label  col="0" text="Delivery Time" fontSize="14" color="black"/>
<Label col="1"text="Every Monday" fontSize="14"/>
</GridLayout>

<!-- Total -->
<GridLayout columns="*, auto" marginBottom="12">
<Label col="0" text="Total" fontSize="18" fontWeight="bold"/>
<GridLayout col="1" columns="auto, auto">
<Label col="0" text="Shs. 22,000" fontSize="17" fontWeight="bold" color="#6B4226"
marginRight="4" />
<Label col="1" text="" fontSize="14" color="#6B7280" verticalAlignment="bottom"
marginBottom="4" />
</GridLayout>
</GridLayout>

<!-- Next billing -->
<Label text="Next billing date: December 22, 2025" fontSize="13" color="#9CA3AF" textAlignment="right" />
</StackLayout>




<Button class="btn-buy fas icon"  backgroundColor="#6B4226" color="white" marginTop="5" @tap="navCart">
<FormattedString>
<!-- <Span  text.decode="&#xf07a;" class="fas icon" style="padding-right:10px;"/> -->
<!-- icon -->
<Span text="Confirm Subscription"/>
</FormattedString>
</Button>




















</StackLayout>









</StackLayout>









</ScrollView>

</GridLayout>
</template>
</app-layout>
</template>



<style scoped>
.page { background-color: #fffaf3; }

/* Header */
.header {
background-color: #6B4226;
border-bottom-left-radius: 20;
border-bottom-right-radius: 20;
padding-bottom: 16;
justify-content: left;
align-items: center;
}
.header-title {
font-size: 20;
font-weight: bold;
color: #ffffff;
text-align:left;
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