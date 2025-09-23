<template>
<GridLayout
columns="auto, *"
padding="0"
margin="0"
borderRadius="8"
backgroundColor="white"
verticalAlignment="center"
width="100%"
horizontalAlignment="center"
>

<!-- Search Icon -->
<Label
text.decode="&#xf002;"
class="fas"
fontSize="18"
color="#6B4226"
col="0"
verticalAlignment="center"
marginLeft="10"/>

<!-- Search Input -->
<TextField
hint="Search for products.."
hintColor="#D3D3D3"
col="1"
fontSize="15"
color="#6B4226"
borderWidth="0"
backgroundColor="transparent"
marginLeft="8"
verticalAlignment="center"/>
</GridLayout>
</template>