<script>
import Dashboard from './Dashboard.vue';
import Register from './template/Register.vue';
import DashboardBuyer from './DashboardBuyer.vue';
export default {
components:{
Register
},

data(){return{
screen:0,
loginText:"Don't have an account? Sign Up",
registerText:'Already have an account? Login',

}},

methods: {


navHome(){
this.$navigateTo(DashboardBuyer);
},

screens(){
if(this.screen===0){
this.screen=1;
}
else{
this.screen=0;
}



}
},












}
</script>




<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *" class="p-6">
<!-- Logo / Header -->
<StackLayout row="0" class="items-center mb-10 mt-10">
<Image src="~/assets/logo.png" stretch="aspectFit" width="140" height="140"/>
<Label text="Bean Origin" class="app-title" />
<Label text="From Farm to Cup, Transparently" class="subtitle" style="text-align: center;font-size: 14;
color: #f0e68c;"/>
</StackLayout>

<!-- Login Form -->
<StackLayout row="1" class="p-4" >
<!-- Email -->


<StackLayout v-if="screen===0">

<TextField
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input mb-4"
/>

<!-- Password -->
<TextField
hint="Password"
secure="true"
class="input mb-6"
/>

<!-- Login Button -->
<Button
text="Login"
class="btn-primary mb-4"
@tap="navHome"/>

</StackLayout>
<Register v-else/>


<!-- Signup Redirect -->
<Label
:text="screen===0?loginText:registerText"
class="signup-link text-center"
@tap="screens"/>
</StackLayout>
</GridLayout>

</Page>
</template>

<style scoped>
.page {
background-color: #6B4226; /* Coffee brown background */
}
.app-title {
font-size: 27;
font-weight: bold;
color: #ffffff;
margin-top: 12;
text-align: center;
}
.input {
border-width: 1;
border-color: #ffffff;
border-radius: 8;
padding: 12;
font-size: 16;
color: #fff;
placeholder-color: #ddd;
}
.btn-primary {
background-color: #ffffff;
color: #6B4226;
border-radius: 10;
padding: 14;
font-size: 18;
font-weight: bold;
}
.signup-link {
font-size: 14;
color: #f0e68c;
}
.mb-4 { margin-bottom: 16; }
.mb-6 { margin-bottom: 24; }
.mb-10 { margin-bottom: 40; }
.mt-10 { margin-top: 40; }
.p-6 { padding: 24; }
</style>
