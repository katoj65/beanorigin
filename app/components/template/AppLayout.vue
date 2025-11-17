<script>


export default {
data(){
return{
menu:[


],



}
},


methods:{

}
}
</script>
<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto">
<!-- Header -->
<StackLayout row="0" class="header p-5">
<slot name="header"/>
</StackLayout>
<!-- Dashboard Content -->
<ScrollView row="1">
<StackLayout class="p-5">
<slot name="content"/>
</StackLayout>
</ScrollView>
<StackLayout row="2" class="p-4">
<slot name="footer"/>
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
