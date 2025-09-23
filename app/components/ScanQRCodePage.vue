<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *">

<!-- Header -->
<StackLayout row="0" class="header">
<Label text="Scan QR Code" class="header-title" />
</StackLayout>

<!-- Main Content -->
<ScrollView row="1">
<StackLayout class="container" spacing="20">

<!-- Instructions -->
<Label text="Point your camera at the QR code on the coffee package to view the farmer’s story, location, and impact."
textWrap="true" class="intro" />

<!-- Scanner Placeholder -->
<StackLayout class="scanner-box" verticalAlignment="center" horizontalAlignment="center">
<Label text="📷" class="scanner-icon" />
<Label text="QR Scanner will appear here" class="scanner-text" />
</StackLayout>

<!-- Example Result Placeholder -->
<StackLayout class="result-box">
<Label text="Example Result:" class="result-title" />
<Label text="Farmer: Ayele from Ethiopia" class="result-text" />
<Label text="Impact: Fair price paid, offset 2kg CO₂" class="result-text" />
</StackLayout>

</StackLayout>
</ScrollView>
</GridLayout>
</Page>
</template>

<style scoped>
.page {
background-color: #fffaf3;
}

/* Header */
.header {
background-color: #6B4226;
padding: 20;
border-bottom-left-radius: 20;
border-bottom-right-radius: 20;
shadow-color: #000;
shadow-opacity: 0.15;
shadow-radius: 6;
}
.header-title {
font-size: 22;
font-weight: bold;
color: #ffffff;
text-align: center;
}

/* Content */
.container {
padding: 20;
}
.intro {
font-size: 14;
text-align: center;
color: #444;
margin-bottom: 20;
}

/* Scanner Box */
.scanner-box {
border-width: 2;
border-color: #6B4226;
border-radius: 12;
width: 250;
height: 250;
justify-content: center;
align-items: center;
background-color: #fdfdfd;
}
.scanner-icon {
font-size: 40;
color: #6B4226;
}
.scanner-text {
font-size: 14;
color: #888;
margin-top: 10;
}

/* Result Box */
.result-box {
background-color: white;
border-radius: 12;
padding: 16;
margin-top: 20;
shadow-color: #000;
shadow-opacity: 0.1;
shadow-radius: 4;
}
.result-title {
font-size: 16;
font-weight: bold;
color: #6B4226;
margin-bottom: 8;
}
.result-text {
font-size: 14;
color: #444;
}
</style>
