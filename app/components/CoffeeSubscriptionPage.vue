
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
<Label text="Coffee Subscription" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf002;" col="1" color="#fff" />
</GridLayout>
</template>
<template #content>






<StackLayout padding="0">



<!-- SEGMENT SECTION -->
<StackLayout marginBottom="20" backgroundColor="#fffaf3" padding="0">
<StackLayout>
    <Label 
        text="Choose Your Plan Today" 
        fontSize="20" 
        fontWeight="bold"
        color="#3A2E2A" 
        marginBottom="12" 
        textAlignment="left"
        horizontalAlignment="left" />
</StackLayout>


<GridLayout columns="*, *, *, *" rows="auto" columnGap="20">
<StackLayout col="0" horizontalAlignment="left">
<Label text="Daily" fontSize="17" fontWeight="bold" color="#6B4226" />
</StackLayout>


<StackLayout col="1" horizontalAlignment="left">
<Label text="Weekly" fontSize="17" fontWeight="bold" color="#A97458" />
</StackLayout>


<StackLayout col="2" horizontalAlignment="left">
<Label text="Monthly" fontSize="17" fontWeight="bold" color="#A97458" />
</StackLayout>

</GridLayout>
</StackLayout>







<!-- Subscription Item 2: Pro Plan -->
<GridLayout 
columns="120, *" 
rows="auto"
backgroundColor="#FFFFFF"
borderRadius="16"
padding="16"
marginBottom="10"
 v-for="(k,key) in 10" :key="key"
 @tap="showPageNav"
>

<!-- Popular Badge -->
<Label 
col="0"
colSpan="2"
text="Coffee Types and Names" 

color="#FFFFFF"
fontSize="10"
fontWeight="bold"
padding="4 12"
borderRadius="8"
marginBottom="12"
horizontalAlignment="left"
width="100"
textAlignment="center" />

<!-- Image -->
<Image 
col="0"
row="1"
src="~/assets/images/img1.jpg"
width="104"
height="104"
borderRadius="12"
stretch="aspectFill"
marginRight="16"
loadMode="async" />

<!-- Content -->
<StackLayout col="1" row="1" verticalAlignment="center">
<Label 
text="Name of the Coffee" 
fontSize="17"
fontWeight="bold"
color="#1A1A1A"
marginBottom="6"
textWrap="true" />

<Label 
text="Advanced features for professionals " 
fontSize="14"
color="#6B7280"
marginBottom="12"
textWrap="true" />

<GridLayout columns="auto, auto" width="100%">
<Label 
col="0"
text="$9.99" 
fontSize="17"
fontWeight="bold"
color="#6B4226"
marginRight="4" />
<Label 
col="1"
text="  Daily" 
fontSize="14"
color="#9CA3AF"
verticalAlignment="bottom"
marginBottom="4" />
</GridLayout>
</StackLayout>
</GridLayout>










<!-- Footer Info -->
<StackLayout 
backgroundColor="#FFFFFF"
borderRadius="12"
padding="20"
marginBottom="10">
<Label 
text="✓ All plans include 7-day free trial" 
fontSize="14"
color="#374151"
marginBottom="8" />
<Label 
text="✓ Cancel anytime, no questions asked" 
fontSize="14"
color="#374151"
marginBottom="8" />
<Label 
text="✓ Secure payment with encryption" 
fontSize="14"
color="#374151" />
</StackLayout>

</StackLayout>




</template>
</app-layout>
</template>