<script>
import TestPage from './TestPage.vue';
import EventsPage from './EventsPage.vue';
export default {

methods:{
testNav(){
this.$navigateTo(TestPage);
},

eventNav(){
this.$navigateTo(EventsPage);
},




}


}
</script>



<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *" backgroundColor="#fffaf3">

<!-- Header -->
<StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label text="Main Menu" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
</StackLayout>

<!-- Vertical List Menu -->
<ScrollView row="1">
<StackLayout spacing="12" padding="20">

<!-- Dashboard -->
<StackLayout class="menu-item" orientation="horizontal" @tap="eventNav">
<Label text.decode="&#xf073;" fontSize="22" width="40" class="fas icon" color="#6B4226"/>
<Label text="Events" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Orders -->
<StackLayout class="menu-item" orientation="horizontal" @tap="testNav">
<Label text="📦" fontSize="22" width="40"/>
<Label text="Orders" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Track Package -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToTrack">
<Label text="&#xf073;" fontSize="22" width="40"/>
<Label text="Track Package" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Wallet -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToWallet">
<Label text="💳" fontSize="22" width="40"/>
<Label text="Wallet" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Support -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToSupport">
<Label text="☎️" fontSize="22" width="40"/>
<Label text="Support" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Settings -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToSettings">
<Label text="⚙️" fontSize="22" width="40"/>
<Label text="Settings" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Learn Impact -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToImpact">
<Label text="🌍" fontSize="22" width="40"/>
<Label text="Learn Impact" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Support Farmers -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToFarmers">
<Label text="👨‍🌾" fontSize="22" width="40"/>
<Label text="Support Farmers" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Buy Carbon Credit -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToCarbon">
<Label text="♻️" fontSize="22" width="40"/>
<Label text="Buy Carbon Credit" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Farmers’ Stories -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToStories">
<Label text="📖" fontSize="22" width="40"/>
<Label text="Farmer Stories" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Advisory -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToAdvise">
<Label text="💡" fontSize="22" width="40"/>
<Label text="Advisory" fontSize="16" verticalAlignment="center"/>
</StackLayout>

<!-- Donate -->
<StackLayout class="menu-item" orientation="horizontal" @tap="goToDonate">
<Label text="🎁" fontSize="22" width="40"/>
<Label text="Donate" fontSize="16" verticalAlignment="center"/>
</StackLayout>

</StackLayout>
</ScrollView>

</GridLayout>
</Page>
</template>

<style scoped>
.page { background-color: #fffaf3; }

.menu-item {
background-color: #fff;
border-radius: 12;
padding: 14;
shadow-color: #000;
shadow-opacity: 0.08;
shadow-radius: 3;
}
</style>
