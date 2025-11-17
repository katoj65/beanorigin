<script>
import AppLayout from './template/AppLayout.vue';
export default {
components:{
AppLayout
},
data(){
return{





}
},

methods:{






}






}
</script>
<template>
<app-layout>
<template #header>
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="5" paddingRight="5" >
<Label text="Plant a Tree" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf0c9;" col="1" color="#fff" />
</GridLayout>
</template>


<template #content>

<StackLayout backgroundColor="#fffaf3">






<!-- Tree Options Section -->
<Label text="Choose Tree Package"
fontSize="18"
fontWeight="bold"
color="#3A2E2A"
marginLeft="20"
marginTop="10" marginBottom="20"/>

<StackLayout margin="0" rowGap="16">

<!-- Option 1 -->
<GridLayout rows="auto" columns="auto, *" padding="14" backgroundColor="#ffffff" borderRadius="12">
<Image src="~/assets/images/tree.jpg"
width="70"
height="70"
stretch="aspectFill"
borderRadius="10" />

<StackLayout col="1" marginLeft="14" verticalAlignment="center">
<Label text="1 Tree"
fontSize="17"
fontWeight="bold"
color="#3A2E2A" />

<Label text="Perfect for beginners, start your green journey."
fontSize="14"
color="#6B5E5A"
textWrap="true" />

<Label text="UGX 5,000"
fontSize="16"
color="#6B4226"
fontWeight="bold"
marginTop="6" />
</StackLayout>
</GridLayout>

<!-- Option 2 -->
<GridLayout rows="auto" columns="auto, *" padding="14" backgroundColor="#ffffff" borderRadius="12">
<Image src="~/assets/images/tree.jpg"
width="70"
height="70"
stretch="aspectFill"
borderRadius="10" />

<StackLayout col="1" marginLeft="14" verticalAlignment="center">
<Label text="5 Trees"
fontSize="17"
fontWeight="bold"
color="#3A2E2A" />

<Label text="Support reforestation with a meaningful contribution."
fontSize="14"
color="#6B5E5A"
textWrap="true" />

<Label text="UGX 20,000"
fontSize="16"
color="#6B4226"
fontWeight="bold"
marginTop="6" />
</StackLayout>
</GridLayout>

<!-- Option 3 -->
<GridLayout rows="auto" columns="auto, *" padding="14" backgroundColor="#ffffff" borderRadius="12">
<Image src="~/assets/images/tree.jpg"
width="70"
height="70"
stretch="aspectFill"
borderRadius="10" />

<StackLayout col="1" marginLeft="14" verticalAlignment="center">
<Label text="10 Trees"
fontSize="17"
fontWeight="bold"
color="#3A2E2A" />

<Label text="Create lasting environmental impact."
fontSize="14"
color="#6B5E5A"
textWrap="true" />

<Label text="UGX 40,000"
fontSize="16"
color="#6B4226"
fontWeight="bold"
marginTop="6" />
</StackLayout>
</GridLayout>

</StackLayout>


<!-- Plant Button -->
<StackLayout margin="20">
<StackLayout padding="16"
backgroundColor="#3A8C4E"
borderRadius="12"
horizontalAlignment="stretch"
@tap="()=>{}">

<Label text="Plant Tree Now"
color="#fff"
fontSize="18"
fontWeight="bold"
textAlignment="center" />
</StackLayout>
</StackLayout>

</StackLayout>



</template>


</app-layout>
</template>