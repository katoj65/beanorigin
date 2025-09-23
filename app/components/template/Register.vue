<script>
export default {

}
</script>

<template>
<StackLayout row="1">

<!-- Email -->
<TextField
hint="First Name"
autocorrect="false"
autocapitalizationType="none"
class="input mb-4"
/>

<!-- Email -->
<TextField
hint="Last Name"
autocorrect="false"
autocapitalizationType="none"
class="input mb-4"
/>




<!-- Email -->
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
text="Register"
class="btn-primary mb-4"

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
