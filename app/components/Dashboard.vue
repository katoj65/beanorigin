<script>
import MarketPage from './MarketPage.vue';
import LearnImpactPage from './LearnImpactPage.vue';
import ScanQRCodePage from './ScanQRCodePage.vue';
import SupportFarmerPage from './SupportFarmerPage.vue';
import WalletPage from './WalletPage.vue';
import SettingsPage from './SettingsPage.vue';
import DashboardMenu from './DashboardMenu.vue';


export default {
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
}


}
}
</script>


<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto"> <!-- Added third row for static button -->

<!-- Header -->
<StackLayout row="0" class="header items-center">


<GridLayout rows="auto" columns="auto, *, auto, auto" backgroundColor="#6B4226" padding="5" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label col="0" text.decode="&#xf0c9;" fontSize="20" color="#fff" verticalAlignment="left" class="fas icon" @tap="menuNav" />
<Label col="1" fontSize="20" fontWeight="bold" color="#fff" textAlignment="center" verticalAlignment="center" />
<Label col="2" text.decode="&#xf142;" class="fas icon" fontSize="20" color="#fff" verticalAlignment="center" @tap="settingsNav" />
</GridLayout>



<Image src="~/assets/logo.png" stretch="aspectFit" width="80" height="80" />
<Label text="Bean Origin" class="app-title" />
<Label text="From Farm to Cup, Transparently" class="subtitle" style="text-align: center;"/>
</StackLayout>

<!-- Dashboard Content -->
<ScrollView row="1">
<StackLayout class="p-5">
<!-- Scan QR -->
<StackLayout class="card mb-5" @tap="scanNav">
<Label text.decode="&#xf02a; Scan QR Code" class="card-title">
<FormattedString>
<Span text.decode="&#xf02a;" class="fas" style="color:black;"></Span>
<Span text=" Scan QR Code"></Span>
</FormattedString>
</Label>
<Label text="On a coffee package, scan to see:" class="card-subtitle mb-3" />
<Label text="• Farmer story" class="card-item" />
<Label text="• Location" class="card-item" />
<Label text="• Impact (fair price, carbon savings)" class="card-item" />
</StackLayout>

<!-- Learn Impact -->
<StackLayout class="card mb-5" @tap="impactNav">
<Label class="card-title fas">
<FormattedString>
<Span text.decode="&#xf4d8;" class="fas" style="color:green;"></Span>
<span text=" Learn Impact"></span>
</FormattedString>
</Label>
<Label text="“This coffee supported 1 farmer + offset 2kg of CO₂.”"
class="impact-text" textWrap="true" />
</StackLayout>

<!-- Support Farmers -->
<StackLayout class="card mb-5" @tap="farmerSupportNav">
<Label class="card-title fas">
<FormattedString>
<Span text.decode="&#xf2b5;" style="color:orange;"></Span>
<Span text=" Support Farmers"></Span>
</FormattedString>
</Label>

<Label text="Send a tip, donation, or plant a tree through the app."
class="card-subtitle" textWrap="true" />
</StackLayout>
</StackLayout>
</ScrollView>

<!-- Static Buy Button -->
<StackLayout row="2" padding="10">
<Button class="btn-buy fas icon"  backgroundColor="#6B4226" color="white" @tap="navMarket">
<FormattedString>
<Span  text.decode="&#xf07a;" class="fas icon" style="padding-right:10px;"/> <!-- icon -->
<Span text=" Buy Coffee Products" /> <!-- text -->
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
padding: 20;
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
