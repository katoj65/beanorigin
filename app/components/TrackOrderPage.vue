<script>
import ContactSupportPage from './ContactSupportPage.vue';
export default {


methods:{

contactSupport(){
this.$navigateTo(ContactSupportPage);
}

}

}
</script>



<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">

<!-- Header -->
<StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label text="Order Tracking" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
</StackLayout>

<!-- Order Progress -->
<ScrollView row="1">
<StackLayout padding="20" spacing="20">

<!-- Order Info -->
<StackLayout backgroundColor="white" padding="16" borderRadius="12" width="100%">
<Label text="Order ID: #123456" fontSize="16" fontWeight="bold" color="#6B4226"/>
<Label text="Expected Delivery: 25 Sept 2025" fontSize="14" color="#555" marginTop="5"/>
</StackLayout>

<!-- Progress Steps -->
<StackLayout backgroundColor="white" padding="16" borderRadius="12" width="100%" spacing="16">
<Label text="Order Status" fontSize="16" fontWeight="bold" color="#6B4226" marginBottom="10"/>

<Label text="✔ Order Placed" fontSize="14" color="#2f855a"/>
<Label text="✔ Processing" fontSize="14" color="#2f855a"/>
<Label text="🚚 Shipped" fontSize="14" color="#d97706"/>
<Label text="⬜ Delivered" fontSize="14" color="#999"/>
</StackLayout>

<!-- Farmer Impact -->
<StackLayout backgroundColor="white" padding="16" borderRadius="12" width="100%">
<Label text="Impact Story" fontSize="16" fontWeight="bold" color="#6B4226" marginBottom="10"/>
<Label text="Your order supported Farmer Ayele and offset 2kg of CO₂. Thank you for making coffee more sustainable!"
textWrap="true" fontSize="14" color="#555"/>
</StackLayout>

</StackLayout>
</ScrollView>

<!-- Action Buttons -->
<StackLayout row="2" backgroundColor="white" padding="20" spacing="12" borderTopLeftRadius="20" borderTopRightRadius="20">
<Button text="Contact Support"
backgroundColor="#6B4226"
color="#ffffff"
borderRadius="10"
padding="14"
fontSize="16"
fontWeight="bold"
@tap="contactSupport"
/>
<Button text="Back to Dashboard"
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

<style scoped>
.page { background-color: #fffaf3; }
</style>
