


<template>
<app-layout>
<template #header>
<StackLayout padding="24 16" backgroundColor="#FFFFFF" elevation="4" android:elevation="4"></StackLayout>
</template>
<template #content>

<ScrollView backgroundColor="#F8F9FA">
<StackLayout>

<!-- Premium Hero Section -->
<GridLayout 
rows="auto" 
backgroundColor="#1A1A1A"
padding="0"
marginBottom="0">

<!-- Background Gradient Effect -->
<StackLayout 
backgroundColor="#1A1A1A"
padding="40 24 60 24">

<!-- Premium Badge -->
<GridLayout 
columns="auto, *"
marginBottom="24"
horizontalAlignment="left">
<StackLayout 
    col="0"
    backgroundColor="#FFD700"
    borderRadius="20"
    padding="6 16"
    horizontalAlignment="left">
    <Label 
    text="PREMIUM SELECTION"
    fontSize="10"
    fontWeight="bold"
    color="#1A1A1A"
    letterSpacing="1.5" />
</StackLayout>
</GridLayout>

<!-- Main Heading -->
<Label 
text="Artisan Coffee"
fontSize="38"
fontWeight="bold"
color="#FFFFFF"
marginBottom="12"
letterSpacing="-0.5" />

<Label 
text="Hand-selected beans from the world's finest origins"
fontSize="16"
color="#B8B8B8"
textWrap="true"
lineHeight="24"
marginBottom="32" />

<!-- Stats Row -->
<GridLayout columns="*, *, *" marginBottom="8">
<StackLayout col="0">
    <Label 
    text="4.9"
    fontSize="28"
    fontWeight="bold"
    color="#FFD700"
    textAlignment="center" />
    <Label 
    text="Rating"
    fontSize="12"
    color="#808080"
    textAlignment="center"
    marginTop="4" />
</StackLayout>

<StackLayout col="1">
    <Label 
    text="50+"
    fontSize="28"
    fontWeight="bold"
    color="#FFD700"
    textAlignment="center" />
    <Label 
    text="Origins"
    fontSize="12"
    color="#808080"
    textAlignment="center"
    marginTop="4" />
</StackLayout>

<StackLayout col="2">
    <Label 
    text="100%"
    fontSize="28"
    fontWeight="bold"
    color="#FFD700"
    textAlignment="center" />
    <Label 
    text="Organic"
    fontSize="12"
    color="#808080"
    textAlignment="center"
    marginTop="4" />
</StackLayout>
</GridLayout>

</StackLayout>
</GridLayout>

<!-- Featured Products Section -->
<StackLayout padding="24 24 24 24" marginTop="-40">

<!-- Section Header -->
<GridLayout columns="*, auto" marginBottom="20">
<Label 
col="0"
text="Featured Collection"
fontSize="24"
fontWeight="bold"
color="#1A1A1A"
letterSpacing="-0.3" />
<Label 
col="1"
text="View All →"
fontSize="14"
fontWeight="600"
color="#3A2E2A"
verticalAlignment="center"
tap="onViewAllTap" />
</GridLayout>

<!-- Premium Product Card 1 -->
<GridLayout 
rows="auto"
backgroundColor="#FFFFFF"
borderRadius="20"
marginBottom="16"
elevation="8"
android:elevation="8">

<StackLayout padding="0">
<!-- Product Image -->
<GridLayout 
    height="220"
    backgroundColor="#F5F0EB"
    borderRadius="20 20 0 0">
    <Image 
    src="~/assets/coffee-product.png"
    stretch="aspectFill"
    borderRadius="20 20 0 0" />
    
    <!-- Favorite Icon -->
    <StackLayout 
    width="44"
    height="44"
    backgroundColor="#FFFFFF"
    borderRadius="22"
    horizontalAlignment="right"
    verticalAlignment="top"
    margin="16"
    tap="onFavoriteTap">
    <Label 
        text="♡"
        fontSize="24"
        color="#1A1A1A"
        textAlignment="center"
        verticalAlignment="center" />
    </StackLayout>
</GridLayout>

<!-- Product Details -->
<StackLayout padding="20">
    
    <!-- Origin Badge -->
    <Label 
    text="🇪🇹 Ethiopian Yirgacheffe"
    fontSize="12"
    fontWeight="600"
    color="#8B6F47"
    backgroundColor="#FFF8F0"
    padding="6 12"
    borderRadius="12"
    horizontalAlignment="left"
    width="auto"
    marginBottom="12" />
    
    <!-- Product Name -->
    <Label 
    text="Premium Single Origin"
    fontSize="20"
    fontWeight="bold"
    color="#1A1A1A"
    marginBottom="8"
    letterSpacing="-0.2" />
    
    <!-- Description -->
    <Label 
    text="Floral notes with hints of bergamot and dark chocolate. Light roast."
    fontSize="14"
    color="#666666"
    textWrap="true"
    lineHeight="20"
    marginBottom="16" />
    
    <!-- Rating and Reviews -->
    <GridLayout columns="auto, auto, *" marginBottom="16">
    <Label 
        col="0"
        text="⭐⭐⭐⭐⭐"
        fontSize="14"
        marginRight="8" />
    <Label 
        col="1"
        text="4.9"
        fontSize="14"
        fontWeight="bold"
        color="#1A1A1A"
        marginRight="4" />
    <Label 
        col="2"
        text="(247 reviews)"
        fontSize="13"
        color="#999999"
        verticalAlignment="center" />
    </GridLayout>
    
    <!-- Price and Add Button -->
    <GridLayout columns="auto, *">
    <StackLayout col="0" verticalAlignment="center">
        <Label 
        text="$24.99"
        fontSize="28"
        fontWeight="bold"
        color="#3A2E2A"
        letterSpacing="-0.5" />
        <Label 
        text="per 250g"
        fontSize="12"
        color="#999999"
        marginTop="-4" />
    </StackLayout>
    
    <StackLayout 
        col="1"
        backgroundColor="#3A2E2A"
        borderRadius="16"
        padding="16"
        horizontalAlignment="right"
        tap="onAddToCartTap">
        <Label 
        text="Add to Cart"
        fontSize="15"
        fontWeight="bold"
        color="#FFFFFF"
        textAlignment="center"
        letterSpacing="0.5" />
    </StackLayout>
    </GridLayout>
    
</StackLayout>
</StackLayout>
</GridLayout>

<!-- Premium Product Card 2 -->
<GridLayout 
rows="auto"
backgroundColor="#FFFFFF"
borderRadius="20"
marginBottom="16"
elevation="8"
android:elevation="8">

<StackLayout padding="0">
<!-- Product Image -->
<GridLayout 
    height="220"
    backgroundColor="#F5F0EB"
    borderRadius="20 20 0 0">
    <Image 
    src="~/assets/coffee-product-2.png"
    stretch="aspectFill"
    borderRadius="20 20 0 0" />
    
    <!-- Limited Edition Badge -->
    <StackLayout 
    backgroundColor="#FF6B6B"
    borderRadius="12"
    padding="6 12"
    horizontalAlignment="left"
    verticalAlignment="top"
    margin="16">
    <Label 
        text="LIMITED EDITION"
        fontSize="10"
        fontWeight="bold"
        color="#FFFFFF"
        letterSpacing="1" />
    </StackLayout>
    
    <!-- Favorite Icon -->
    <StackLayout 
    width="44"
    height="44"
    backgroundColor="#FFFFFF"
    borderRadius="22"
    horizontalAlignment="right"
    verticalAlignment="top"
    margin="16"
    tap="onFavoriteTap">
    <Label 
        text="♥"
        fontSize="24"
        color="#FF6B6B"
        textAlignment="center"
        verticalAlignment="center" />
    </StackLayout>
</GridLayout>

<!-- Product Details -->
<StackLayout padding="20">
    
    <!-- Origin Badge -->
    <Label 
    text="🇨🇴 Colombian Supremo"
    fontSize="12"
    fontWeight="600"
    color="#8B6F47"
    backgroundColor="#FFF8F0"
    padding="6 12"
    borderRadius="12"
    horizontalAlignment="left"
    width="auto"
    marginBottom="12" />
    
    <!-- Product Name -->
    <Label 
    text="Reserve Collection"
    fontSize="20"
    fontWeight="bold"
    color="#1A1A1A"
    marginBottom="8"
    letterSpacing="-0.2" />
    
    <!-- Description -->
    <Label 
    text="Rich caramel sweetness with notes of nuts and cocoa. Medium roast."
    fontSize="14"
    color="#666666"
    textWrap="true"
    lineHeight="20"
    marginBottom="16" />
    
    <!-- Rating and Reviews -->
    <GridLayout columns="auto, auto, *" marginBottom="16">
    <Label 
        col="0"
        text="⭐⭐⭐⭐⭐"
        fontSize="14"
        marginRight="8" />
    <Label 
        col="1"
        text="5.0"
        fontSize="14"
        fontWeight="bold"
        color="#1A1A1A"
        marginRight="4" />
    <Label 
        col="2"
        text="(189 reviews)"
        fontSize="13"
        color="#999999"
        verticalAlignment="center" />
    </GridLayout>
    
    <!-- Price and Add Button -->
    <GridLayout columns="auto, *">
    <StackLayout col="0" verticalAlignment="center">
        <Label 
        text="$32.99"
        fontSize="28"
        fontWeight="bold"
        color="#3A2E2A"
        letterSpacing="-0.5" />
        <Label 
        text="per 250g"
        fontSize="12"
        color="#999999"
        marginTop="-4" />
    </StackLayout>
    
    <StackLayout 
        col="1"
        backgroundColor="#3A2E2A"
        borderRadius="16"
        padding="16"
        horizontalAlignment="right"
        tap="onAddToCartTap">
        <Label 
        text="Add to Cart"
        fontSize="15"
        fontWeight="bold"
        color="#FFFFFF"
        textAlignment="center"
        letterSpacing="0.5" />
    </StackLayout>
    </GridLayout>
    
</StackLayout>
</StackLayout>
</GridLayout>

</StackLayout>

<!-- Why Choose Us Section -->
<StackLayout 
backgroundColor="#1A1A1A"
padding="40 24"
marginTop="24">

<Label 
text="Why Choose Bean Origin"
fontSize="26"
fontWeight="bold"
color="#FFFFFF"
textAlignment="center"
marginBottom="32"
letterSpacing="-0.3" />

<!-- Feature 1 -->
<GridLayout 
columns="auto, *"
marginBottom="28">

<StackLayout 
col="0"
width="56"
height="56"
backgroundColor="#FFD700"
borderRadius="28"
marginRight="20">
<Label 
    text="✓"
    fontSize="32"
    fontWeight="bold"
    color="#1A1A1A"
    textAlignment="center"
    verticalAlignment="center" />
</StackLayout>

<StackLayout col="1" verticalAlignment="center">
<Label 
    text="Direct Trade"
    fontSize="18"
    fontWeight="bold"
    color="#FFFFFF"
    marginBottom="6" />
<Label 
    text="We work directly with farmers to ensure fair prices and sustainable practices"
    fontSize="14"
    color="#B8B8B8"
    textWrap="true"
    lineHeight="20" />
</StackLayout>
</GridLayout>

<!-- Feature 2 -->
<GridLayout 
columns="auto, *"
marginBottom="28">

<StackLayout 
col="0"
width="56"
height="56"
backgroundColor="#FFD700"
borderRadius="28"
marginRight="20">
<Label 
    text="☕"
    fontSize="28"
    textAlignment="center"
    verticalAlignment="center" />
</StackLayout>

<StackLayout col="1" verticalAlignment="center">
<Label 
    text="Fresh Roasting"
    fontSize="18"
    fontWeight="bold"
    color="#FFFFFF"
    marginBottom="6" />
<Label 
    text="Roasted to order within 24 hours of shipping for peak freshness"
    fontSize="14"
    color="#B8B8B8"
    textWrap="true"
    lineHeight="20" />
</StackLayout>
</GridLayout>

<!-- Feature 3 -->
<GridLayout 
columns="auto, *">

<StackLayout 
col="0"
width="56"
height="56"
backgroundColor="#FFD700"
borderRadius="28"
marginRight="20">
<Label 
    text="🌱"
    fontSize="28"
    textAlignment="center"
    verticalAlignment="center" />
</StackLayout>

<StackLayout col="1" verticalAlignment="center">
<Label 
    text="100% Organic"
    fontSize="18"
    fontWeight="bold"
    color="#FFFFFF"
    marginBottom="6" />
<Label 
    text="Certified organic beans grown without harmful pesticides or chemicals"
    fontSize="14"
    color="#B8B8B8"
    textWrap="true"
    lineHeight="20" />
</StackLayout>
</GridLayout>

</StackLayout>

<!-- CTA Section -->
<StackLayout padding="40 24 60 24">

<StackLayout 
backgroundColor="#3A2E2A"
borderRadius="24"
padding="32 24"
elevation="12"
android:elevation="12">

<Label 
text="Start Your Journey"
fontSize="28"
fontWeight="bold"
color="#FFFFFF"
textAlignment="center"
marginBottom="12"
letterSpacing="-0.4" />

<Label 
text="Subscribe and save 15% on every order"
fontSize="15"
color="#D4B5A0"
textAlignment="center"
textWrap="true"
marginBottom="28"
lineHeight="22" />

<StackLayout 
backgroundColor="#FFD700"
borderRadius="16"
padding="18"
marginBottom="16"
tap="onSubscribeTap">
<Label 
    text="Subscribe Now"
    fontSize="17"
    fontWeight="bold"
    color="#1A1A1A"
    textAlignment="center"
    letterSpacing="0.5" />
</StackLayout>

<Label 
text="Free shipping • Cancel anytime • No commitments"
fontSize="12"
color="#8B6F47"
textAlignment="center"
textWrap="true" />

</StackLayout>

</StackLayout>

</StackLayout>
</ScrollView>






</template>
</app-layout>
</template>

<script>
import AppLayout from './template/AppLayout.vue';

export default {
name: 'PremiumHome',
components:{
AppLayout
},

methods: {
onViewAllTap() {
console.log('View all tapped');
// Navigate to products page
},

onFavoriteTap(args) {
console.log('Favorite tapped');
// Toggle favorite
},

onAddToCartTap() {
console.log('Add to cart tapped');
// Add product to cart
},

onSubscribeTap() {
console.log('Subscribe tapped');
// Navigate to subscription page
}
}
}
</script>