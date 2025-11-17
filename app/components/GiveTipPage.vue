<script>
import AppLayout from './template/AppLayout.vue';
import FarmerCard from './template/FarmerCard.vue';
export default {
components:{
AppLayout,
FarmerCard
},



methods:{

}

}
</script>

<template>
<app-layout>
<template #header>
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="5" paddingRight="5" >
<Label text="Send a Tip" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf0c9;" col="1" color="#fff" />
</GridLayout>
</template>




<template #content>
<!-- Farmer Profile Section -->
<StackLayout padding="0" marginTop="10">
<farmer-card/>

<!-- Story -->
<Label text="Your tip directly supports John’s farming work — from improving soil health and expanding his coffee farm to supporting his family and local community."
marginTop="16"
fontSize="14"
color="#6B5E5A"
textWrap="true" />
</StackLayout>


<!-- Impact Highlight -->
<StackLayout padding="18" backgroundColor="#ffffff" borderRadius="14" marginTop="20">
<Label text="🌱 Your contribution helps farmers adopt sustainable practices, improve yields, and grow better coffee."
fontSize="14"
textWrap="true"
color="#3A2E2A" />
</StackLayout>


<!-- Tip Amount Section -->
<Label text="Choose Tip Amount"
marginLeft="20"
marginTop="10"
fontSize="18"
color="#3A2E2A"
fontWeight="bold"
marginBottom="10"
/>

<GridLayout columns="*, *" margin="0" columnGap="20" rowGap="20">

<!-- Option 1 -->
<StackLayout col="0" padding="16" backgroundColor="#ffffff" borderRadius="12">
<Label text="UGX 2,000"
fontSize="18"
fontWeight="bold"
color="#6B4226"
textAlignment="center" />
</StackLayout>

<!-- Option 2 -->
<StackLayout col="1" padding="16" backgroundColor="#ffffff" borderRadius="12">
<Label text="UGX 5,000"
fontSize="18"
fontWeight="bold"
color="#6B4226"
textAlignment="center" />
</StackLayout>

<!-- Option 3 -->
<StackLayout col="0" padding="16" backgroundColor="#ffffff" borderRadius="12" width="45%">
<Label text="UGX 10,000"
fontSize="18"
fontWeight="bold"
color="#6B4226"
textAlignment="center" />
</StackLayout>

<!-- Option 4 -->
<StackLayout col="1" padding="16" backgroundColor="#ffffff" borderRadius="12" width="45%">
<Label text="UGX 20,000"
fontSize="18"
fontWeight="bold"
color="#6B4226"
textAlignment="center" />
</StackLayout>

</GridLayout>


<!-- Custom Amount Input -->
<StackLayout backgroundColor="#ffffff" borderRadius="12" padding="16" marginTop="20">
<Label text="Enter Custom Amount"
fontSize="16"
fontWeight="bold"
color="#3A2E2A" />

<TextField hint="UGX"
marginTop="10"
fontSize="18"
borderBottomWidth="1"
borderBottomColor="#6B4226"
color="#6B4226" />
</StackLayout>


<!-- Tip Button -->
<StackLayout margin="20">
<StackLayout padding="16"
backgroundColor="#6B4226"
borderRadius="12"
horizontalAlignment="stretch"
@tap="()=>{}">

<Label text="Send Tip"
color="#fff"
fontSize="18"
fontWeight="bold"
textAlignment="center" />
</StackLayout>
</StackLayout>








</template>



</app-layout>
</template>