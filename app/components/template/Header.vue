<template>
<StackLayout row="0" class="header items-center">
<GridLayout rows="auto" columns="auto, *, auto, auto" backgroundColor="#6B4226" padding="10" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label col="1" text="Bean Origin" fontSize="20" fontWeight="bold" color="#fff" textAlignment="left" verticalAlignment="center" />
<Label col="2" text.decode="&#xf002;" class="fas icon" fontSize="20" color="#fff" verticalAlignment="center" @tap="settingsNav" marginRight="20" />
<Label col="3"  text.decode="&#xf142;" class="fas icon" fontSize="20" color="#fff" verticalAlignment="center" @tap="settingsNav" />
</GridLayout>
</StackLayout>
</template>
<style scoped>

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

.mb-3 { margin-bottom: 12; }
.mb-5 { margin-bottom: 20; }
.p-5 { padding: 20; }
</style>

