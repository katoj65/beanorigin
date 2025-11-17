<script>
import TrackOrderPage from './TrackOrderPage.vue';
export default {


methods: {
trackOrder(){
this.$navigateTo(TrackOrderPage);
},



},
}
</script>



<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">

<!-- Header -->
<StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label text="Transaction Complete" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
</StackLayout>

<!-- Success Content -->
<ScrollView row="1">
<StackLayout padding="30" spacing="20" verticalAlignment="center" horizontalAlignment="center">

<!-- Success Icon -->
<Label text.decode="&#xf14a;" class="fas icon" color="#ffff" fontSize="70" textAlignment="center"/>

<!-- Thank You Message -->
<Label text="Payment Successful!" fontSize="22" fontWeight="bold" color="#6B4226" textAlignment="center"/>
<Label text="Thank you for supporting our farmers and choosing sustainable coffee."
fontSize="14"  textAlignment="center" marginBottom="20" color="#ffff" textWrap="true"/>

<!-- Transaction Details -->
<StackLayout backgroundColor="white" padding="20" borderRadius="12" width="90%">
<GridLayout columns="*, auto" marginBottom="8">
<Label text="Order ID" fontSize="14" color="#555" col="0"/>
<Label text="#123456" fontSize="14" fontWeight="bold" color="#444" col="1"/>
</GridLayout>
<GridLayout columns="*, auto" marginBottom="8">
<Label text="Total Paid" fontSize="14" color="#555" col="0"/>
<Label text="$20" fontSize="14" fontWeight="bold" color="#444" col="1"/>
</GridLayout>
<GridLayout columns="*, auto" marginBottom="8">
<Label text="Payment Method" fontSize="14" color="#555" col="0"/>
<Label text="Card" fontSize="14" fontWeight="bold" color="#444" col="1"/>
</GridLayout>
<GridLayout columns="*, auto">
<Label text="Date" fontSize="14" color="#555" col="0"/>
<Label text="14 Nov 2025" fontSize="14" fontWeight="bold" color="#444" col="1"/>
</GridLayout>
</StackLayout>

</StackLayout>
</ScrollView>

<!-- Buttons -->
<StackLayout row="2" backgroundColor="white" padding="20" spacing="12" borderTopLeftRadius="20" borderTopRightRadius="20">
<Button text="Track Order"
backgroundColor="#6B4226"
color="#ffffff"
borderRadius="10"
padding="14"
fontSize="16"
fontWeight="bold"
@tap="trackOrder"
/>
<Button text="Back to Shopping"
backgroundColor="#ffffff"
color="#6B4226"
borderWidth="1"
borderColor="#6B4226"
borderRadius="10"
padding="14"
fontSize="16"
fontWeight="bold"/>
</StackLayout>

</GridLayout>
</Page>
</template>
