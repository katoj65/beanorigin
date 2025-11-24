<script>
import AuthenticationService from '../../service/AuthenticationService.js'; 
import * as ApplicationSettings from '@nativescript/core/application-settings';
export default {
data(){
return{
form:{
email:'katoj65@gmail.com',
password:'0987654321',
fname:'joshua',
lname:'kato',
},

isLoading:false,
error:'',






}
},

methods:{
async register(){
this.error='';
if(this.form.email==='' || this.form.password==='' || this.form.fname==='' || this.form.lname===''){
this.error='Please fill in all required fields.';
return;
}else{

try{

this.isLoading=true;
const auth=new AuthenticationService();
const response = await auth.register(this.form.fname,this.form.lname,this.form.email,this.form.password);

//registration failed
if(response.statusCode===400){
//successful registration
this.error='Registration failed. Please try again.';
}else if(response.statusCode===422){
//email exists
this.error='Email already exists.';
}
else if(response.statusCode===200){
//successful registration
const loggedInUser = {
fname:this.form.fname,
lname:this.form.lname,
email:this.form.email
};

//store user profile locally
const user=JSON.stringify(loggedInUser);
ApplicationSettings.setString('createProfile', user);
this.isLoading=false;

//console.log(response);




}
}catch(error){
this.error='An error occurred during registration. Please try again.';
}finally{
this.isLoading=false;
}




}

}




}

}
</script>

<template>
<StackLayout row="1">

<Label v-if="error" :text="error" textAlignment="center" color="white" fontSize="15" padding="10"/>



<!-- Email -->
<TextField
hint="First Name"
autocorrect="false"
autocapitalizationType="none"
class="input mb-4"
v-model="form.fname"
/>

<!-- Email -->
<TextField
hint="Last Name"
autocorrect="false"
autocapitalizationType="none"
class="input mb-4"
v-model="form.lname"
/>




<!-- Email -->
<TextField
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input mb-4"
v-model="form.email"
/>

<!-- Password -->
<TextField
hint="Password"
secure="true"
class="input mb-6"
v-model="form.password"
/>

<!-- Login Button -->
<Button
text="Register"
class="btn-primary mb-4"
@tap="register"

/>


</StackLayout>
</template>

<style scoped>
.page {
background-color: #6B4226; /* Coffee brown background */
}
.app-title {
font-size: 26;
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
