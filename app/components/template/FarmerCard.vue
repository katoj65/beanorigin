<template>
<StackLayout backgroundColor="#ffffff" padding="20" borderRadius="16" marginTop="0" orientation="horizontal">
<Image src="~/assets/icon/user.png" width="90" height="90" borderRadius="50" stretch="aspectFill" />
<StackLayout marginLeft="16" verticalAlignment="center">
<Label :text="user.names" fontSize="20" fontWeight="bold" color="#3A2E2A"/>
<Label :text="user.occupation" fontSize="14" color="#7a706c" marginTop="4"/>
<Label :text="user.location" fontSize="14" color="#6B4226" fontWeight="bold" marginTop="6"/>
</StackLayout>
</StackLayout>
</template>
<script>
export default {
data(){
return{
user:{
names:'Joshua Kato',
occupation:'Coffee Farmer . 12 Year',
location:'Wanjeyo, Mukono District'
}

}
}
}
</script>