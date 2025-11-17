<script>
import CoffeeShopOrderPage from './CoffeeShopOrderPage.vue';
import CoffeeShopItemPage from './CoffeeShopItemPage.vue';
export default {
components:{

},

data(){
return{
items:[

{name:'Nescafe Classic Coffee ',image:'~/assets/images/img1.jpg'},
{name:'Arabic coffee ',image:'~/assets/images/img2.jpg'},
{name:'Nescafe Original Coffee ',image:'~/assets/images/img3.jpg'},
{name:'Arabic Instant Coffee ',image:'~/assets/images/img4.jpg'},
{name:'Arabic Roasted Coffee ',image:'~/assets/images/img5.jpg'}

],



}
},

methods:{
orderNav(){
this.$navigateTo(CoffeeShopOrderPage);
},

itemNav(){
this.$navigateTo(CoffeeShopItemPage);
}






}




}
</script>


<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto"> <!-- Added third row for static button -->

<GridLayout rows="auto" columns="auto, *, auto" padding="15" backgroundColor="#6B4226" class="header p-5">

    <!-- Left: Logo -->
    <Image
        row="0" col="0"
        src="~/assets/logos/logo1.jpg"
        width="40" height="40"
        stretch="aspectFit"
        borderRadius="20" />

    <!-- Center: App Name -->
    <StackLayout row="0" col="1" horizontalAlignment="left" paddingLeft="10">
        <Label
            text="Coffee Shop 1"
            color="#ffffff"
            fontSize="21"
            textAlignment="left"
            fontWeight="bold" />
        <Label
            text="Open from Mon - Sun | 8:00 am - 12:00 am"
            color="#f5deb3"
            fontSize="12"
            textAlignment="left" />
    </StackLayout>

    <!-- Right: Icon -->
    <Label
        row="0" col="2"
        text.decode="&#xf0c9;"
        class="fas"
        color="#ffffff"
        fontSize="22"
        verticalAlignment="center"
        horizontalAlignment="right" />

</GridLayout>








<!-- Dashboard Content -->
<ScrollView row="1">
<StackLayout class="p-5">

<StackLayout>
<GridLayout columns="*, *" rows="auto" padding="0" columnGap="15" marginBottom="15">

<!-- Tile 1 -->
<StackLayout col="0" backgroundColor="#ffff" borderRadius="12"
padding="10" horizontalAlignment="center" verticalAlignment="center" width="48%">
<Label  textAlignment="center">
<FormattedString>
<Span  text.decode="&#xf095;" class="fas icon" style="padding-right:10px;" fontSize="20" color="#6B4226"/>
<Span text=" Contact" color="#6B4226" fontSize="15"   fontWeight="bold"/>
</FormattedString>
</Label>
</StackLayout>


<!-- Tile 2 -->
<StackLayout
col="1"
backgroundColor="#ffff"
borderRadius="12"
padding="10"
horizontalAlignment="center"
verticalAlignment="center"
width="48%">

<Label  textAlignment="center">
<FormattedString>
<Span  text.decode="&#xf3c5;" class="fas icon" style="padding-right:10px;" fontSize="20" color="#6B4226"/>
<Span text=" Location" color="#6B4226" fontSize="15"   fontWeight="bold"/>
</FormattedString>
</Label>
</StackLayout>

</GridLayout>












<!-- Restaurant Menu Item Card -->
<GridLayout columns="auto, *, auto"
rows="auto"
padding="12"
backgroundColor="#ffffff"
borderRadius="14"
marginBottom="18"
shadowColor="#000"
shadowOpacity="0.15"
shadowRadius="10"
shadowOffsetX="0"
shadowOffsetY="3"
v-for="(i,key) in items" :key="key"
@tap="itemNav"
>

<!-- Food Image -->
<Image :src="i.image"
col="0"
width="90"
height="90"
stretch="aspectFill"
borderRadius="12" />

<!-- Content -->
<StackLayout col="1" paddingLeft="12" verticalAlignment="center">

<!-- Title -->
<Label :text="i.name"
fontSize="16"
fontWeight="bold"
color="#6B4226" />

<!-- Description -->
<Label text="Coffee & roasted chicken"
fontSize="12"
color="#777"
textWrap="true"
marginTop="4" />

<!-- Price -->
<Label text="UGX 22,000"
fontSize="14"
fontWeight="bold"
color="#6B4226"
marginTop="6" />

</StackLayout>
</GridLayout>
</StackLayout>
</StackLayout>
</ScrollView>


<!-- Static Buy Button -->
<StackLayout row="2" padding="10">
<Button class="btn-buy fas icon"  backgroundColor="#6B4226" color="white" @tap="orderNav">
<FormattedString>
<!-- <Span  text.decode="&#xf07a;" class="fas icon" style="padding-right:10px;"/> -->
<!-- icon -->
<Span text="Order Now" /> <!-- text -->
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
/* Header */
.header {
background-color: #6B4226;
border-bottom-left-radius: 20;
border-bottom-right-radius: 20;
padding-bottom: 16;
}
.header-title {
font-size: 22;
font-weight: bold;
color: #ffffff;
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
