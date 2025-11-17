<script>
import PlantTreePage from './PlantTreePage.vue';
import AppLayout from './template/AppLayout.vue';
import GiveTipPage from './GiveTipPage.vue';

export default {
components:{
AppLayout
},

data(){
return{
products:[
{name:'Arabica Coffee (Washed)', description:''},
{name:'Arabica Coffee (Natural)', description:''},
{name:'Robusta Coffee', description:''},
{name:'Cocoa Beans', description:''},
],


}},

methods:{
plantTreeNav(){
this.$navigateTo(PlantTreePage);
},

tipNav(){
this.$navigateTo(GiveTipPage);
}




}





}
</script>
<template>
<app-layout>
<template #header>
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="5" paddingRight="5" >
<Label text="Farmer's Story" class="header-title" col="0" fontSize="20"/>
<Label class="fas icon" text.decode="&#xf0c9;" col="1" color="#fff" />
</GridLayout>
</template>

<template #content>
<StackLayout>

<StackLayout backgroundColor="#ffffff" padding="20" borderRadius="16" marginTop="0" orientation="horizontal">

<Image src="~/assets/icon/user.png"
width="90"
height="90"
borderRadius="50"
stretch="aspectFill" />

<StackLayout marginLeft="16" verticalAlignment="center">

<Label text="Joshua Kato"
fontSize="20"
fontWeight="bold"
color="#3A2E2A"/>

<Label text="Coffee Farmer • 12 Years"
fontSize="14"
color="#7a706c"
marginTop="4"/>

<Label text="Kaliro, Uganda"
fontSize="14"
color="#6B4226"
fontWeight="bold"
marginTop="6"/>
</StackLayout>
</StackLayout>




<!-- STORY SECTION -->
<StackLayout marginTop="20" padding="10">

<Label text="His Journey"
    fontSize="20"
    color="#3A2E2A"
    fontWeight="bold"
    marginBottom="10"/>

<Label text="Sarah is a third-generation coffee farmer who has dedicated her life to cultivating high-quality Arabica beans in the hills of Eastern Uganda. Her farm thrives on sustainable practices passed down through her parents and grandparents."
    fontSize="15"
    color="#4b443f"
    textWrap="true"
    marginBottom="10"/>

<Label text="Through Bean Origin, her coffee is traceable from farm to cup, giving buyers confidence in quality while ensuring she earns a fair price for her work."
    fontSize="15"
    color="#4b443f"
    textWrap="true"
    marginBottom="10"/>
</StackLayout>




<!-- FARM DETAILS -->
<StackLayout backgroundColor="#ffffff"
        borderRadius="16"
        padding="20"
        marginTop="10">

<Label text="Farm Details"
    fontSize="18"
    fontWeight="bold"
    color="#3A2E2A"
    marginBottom="12"/>

<GridLayout rows="auto, auto, auto" columns="auto, *" rowGap="10">

<Label row="0" col="0" text="🌱" fontSize="22" />
<Label row="0" col="1" text="Organic, pesticide-free" fontSize="15" color="#4b443f" />

<Label row="1" col="0" text="🌄" fontSize="22" />
<Label row="1" col="1" text="Altitude: 1800m" fontSize="15" color="#4b443f" />

<Label row="2" col="0" text="☕" fontSize="22" />
<Label row="2" col="1" text="Variety: Arabica SL14" fontSize="15" color="#4b443f" />

</GridLayout>
</StackLayout>




<StackLayout backgroundColor="#ffffff" borderRadius="16" padding="20" marginTop="10">
<Label text="Farm Products" fontSize="18" fontWeight="bold" color="#3A2E2A" marginBottom="12"/>
<StackLayout>
<Label :text="i.name" fontSize="15" v-for="(i,key) in products" :key="key" />
</StackLayout>
</StackLayout>






<!-- SUPPORT BUTTON -->
<GridLayout
columns="*, *"
rows="auto"
marginTop="20"
marginLeft="16"
marginRight="16"
columnGap="12">

<!-- Tip a Farmer -->
<StackLayout
    col="0"
    padding="16"
    backgroundColor="#6B4226"
    borderRadius="10"
    horizontalAlignment="stretch"
    verticalAlignment="center"
    width="48%"
    @tap="tipNav">

    <Label
        text="Tip a Farmer"
        color="#fff"
        fontSize="16"
        fontWeight="bold"
        textAlignment="center" />

</StackLayout>

<!-- Plant a Tree -->
<StackLayout
    col="1"
    padding="16"
    backgroundColor="#3A8C4E"
    borderRadius="10"
    horizontalAlignment="stretch"
    verticalAlignment="center"
    width="48%"
    @tap="plantTreeNav">

    <Label
        text="Plant a Tree"
        color="#fff"
        fontSize="16"
        fontWeight="bold"
        textAlignment="center" />

</StackLayout>

</GridLayout>








</StackLayout>
</template>



<template #footer>









</template>
</app-layout>
</template>