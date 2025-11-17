<script>
import MarketPage from './MarketPage.vue';
import LearnImpactPage from './LearnImpactPage.vue';
import ScanQRCodePage from './ScanQRCodePage.vue';
import SupportFarmerPage from './SupportFarmerPage.vue';
import WalletPage from './WalletPage.vue';
import SettingsPage from './SettingsPage.vue';
import DashboardMenu from './DashboardMenu.vue';
import NearByCafePage from './NearByCafePage.vue';
import BuyCoffeePage from './BuyCoffeePage.vue';


export default {
data(){
return{
menu:[
{title:'Buy Product'},
{title:'Scan Coffee'},
{title:'Nearby Cafe'},
{title:'Green Rewards'},
{title:'Sustainability Gulide'},
{title:'Events'},


],



}
},


methods:{
navMarket(){
this.$navigateTo(MarketPage);
},

impactNav(){
this.$navigateTo(LearnImpactPage);
},

scanNav(){
this.$navigateTo(ScanQRCodePage);
},

farmerSupportNav(){
this.$navigateTo(SupportFarmerPage);
},

walletNav(){
this.$navigateTo(WalletPage);
},

settingsNav(){
this.$navigateTo(SettingsPage);
},

menuNav(){
this.$navigateTo(DashboardMenu);
},

menuNearby(){
this.$navigateTo(NearByCafePage);
},

buyCoffeeNav(){
this.$navigateTo(BuyCoffeePage);
}


}
}
</script>


<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto"> <!-- Added third row for static button -->

<!-- Header -->



<StackLayout row="0" class="header items-center">
<GridLayout rows="auto" columns="auto, *, auto, auto" backgroundColor="#6B4226" padding="10" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label col="1" text="Bean Origin" fontSize="20" fontWeight="bold" color="#fff" textAlignment="left" verticalAlignment="center" />
<Label col="2" text.decode="&#xf002;" class="fas icon" fontSize="20" color="#fff" verticalAlignment="center" @tap="settingsNav" marginRight="20" />
<Label col="3"  text.decode="&#xf142;" class="fas icon" fontSize="20" color="#fff" verticalAlignment="center" @tap="settingsNav" />
</GridLayout>
</StackLayout>





<!-- Dashboard Content -->
<ScrollView row="1">



<StackLayout class="p-5">




<GridLayout
rows="auto"
backgroundImage="~/assets/banner6.jpg"
backgroundRepeat="no-repeat"
backgroundSize="cover"
backgroundPosition="center"
padding="10"
height="150"
borderRadius="20"
marginBottom="20"
backgroudColor="#fff"
>

<StackLayout verticalAlignment="center">

<Label
text="Good Morning, Joshua!"
fontSize="25"
fontWeight="bold"
textAlignment="right"
color="#6B4226"


/>

<Label
text="Order Premium"
color="#6B4226"
fontSize="18"
marginTop="5"
textAlignment="right"
fontWeight="bold"
/>


<Label
text="Coffee"
color="#6B4226"
fontSize="18"
marginTop="0"
textAlignment="right"
fontWeight="bold"
/>

</StackLayout>

</GridLayout>





<GridLayout columns="*, *" rows="auto, auto, auto, auto" rowGap="15" columnGap="15" padding="0">
<!-- Row 0 -->
<StackLayout col="0" row="0" backgroundColor="white" borderRadius="14" padding="20" horizontalAlignment="center" verticalAlignment="center" width="45%" @tap="buyCoffeeNav">
<Image src="~/assets/icon/coffee-bag.png" width="50" height="50" />
<Label text="Buy Coffee" fontSize="14" fontWeight="bold" color="#6B4226" textAlignment="center" marginTop="10" />
</StackLayout>


<StackLayout col="1" row="0" backgroundColor="white" borderRadius="14" padding="20" horizontalAlignment="center" verticalAlignment="center" width="45%">
<Image src="~/assets/icon/qr.png" width="50" height="50" />
<Label text="Scan Product" fontSize="14" fontWeight="bold" color="#6B4226" textAlignment="center" marginTop="10" />
</StackLayout>







<!-- Row 1 -->
<StackLayout col="0" row="1" backgroundColor="white" borderRadius="14" padding="20" horizontalAlignment="center" verticalAlignment="center" width="45%" marginTop="15" @tap="menuNearby">
<Image src="~/assets/icon/coffee-cup.png" width="50" height="50" />
<Label text="Nearby Cafe" fontSize="14" fontWeight="bold" color="#6B4226" textAlignment="center" marginTop="10" />
</StackLayout>



<StackLayout col="1" row="1" backgroundColor="white" borderRadius="14" padding="20" horizontalAlignment="center" verticalAlignment="center" width="45%" marginTop="15">
<Image src="~/assets/icon/customer-support.png" width="50" height="50" />
<Label text="Customer Service" fontSize="14" fontWeight="bold" color="#6B4226" textAlignment="center" marginTop="10" />
</StackLayout>








<!-- Row 2 -->
<StackLayout col="0" row="2" backgroundColor="white" borderRadius="14" padding="20" horizontalAlignment="center" verticalAlignment="center" width="45%"  marginTop="15">
<Image src="~/assets/icon/gift.png" width="50" height="50" />
<Label text="Green Rewards" fontSize="14" fontWeight="bold" color="#6B4226" textAlignment="center" marginTop="10" />
</StackLayout>


<StackLayout col="1" row="2" backgroundColor="white" borderRadius="14" padding="20" horizontalAlignment="center" verticalAlignment="center" width="45%"  marginTop="15">
<Image src="~/assets/icon/carbon-credit.png" width="50" height="50" />
<Label text="Carbon Credit" fontSize="14" fontWeight="bold" color="#6B4226" textAlignment="center" marginTop="10" />
</StackLayout>

<!-- Row 3 -->




</GridLayout>

</StackLayout>




</ScrollView>






<!-- Static Buy Button -->
<StackLayout row="2" padding="10">
<Button class="btn-buy fas icon"  backgroundColor="#6B4226" color="white" @tap="navMarket">
<FormattedString>
<!-- <Span  text.decode="&#xf07a;" class="fas icon" style="padding-right:10px;"/> -->
<!-- icon -->
<Span text="Coffee Products" /> <!-- text -->
</FormattedString>
</Button>


</StackLayout>





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
.p-5 { padding: 20; }
</style>
