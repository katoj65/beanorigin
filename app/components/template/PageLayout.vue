<script>
export default {
data(){
return{




}
},



}
</script>


<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *, auto"> <!-- Added third row for static button -->
<slot></slot>
</GridLayout>
</Page>
</template>
<style>
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
