<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *">
<!-- Header -->
<StackLayout row="0" backgroundColor="#6B4226" padding="15" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label text="Farmer's Story" class="header-title" textAlignment="center"/>
</StackLayout>

<!-- Content -->
<ScrollView row="1">
<StackLayout class="p-5" spacing="16">

<!-- Product Overview -->
<!-- <StackLayout class="card">
<Image src="~/assets/item1.jpg" stretch="aspectFit" height="140" style="border-radius:20px;"/>
<Label text="Instant Coffee" class="product-title" textAlignment="center"/>
<Label text="$18 / 250g" class="product-price" textAlignment="center"/>
<Label text="Roast: Medium • Harvest: 2025" class="product-meta" textAlignment="center"/>
</StackLayout> -->

<!-- Farmer Story -->
<StackLayout class="card">
<!-- <Label text="Farmer" class="card-title"/> -->
<StackLayout orientation="horizontal" spacing="12" paddingRight="10">
<Label text.decode="&#xf2bd;" class="fas icon" fontSize="40" color="#6B4226"></Label>
<StackLayout>
<Label text="Joshua Kato" class="farmer-name" style="padding-left:35px;"/>
<Label text="From Mukono, Uganda. Kato has been cultivating coffee for 20 years, continuing his family’s tradition." class="farmer-story" textWrap="true" style="padding-left:35px;"/>
</StackLayout>
</StackLayout>
<Label text="“This coffee helps send my children to school.”" class="farmer-quote" textWrap="true"/>
</StackLayout>

<!-- Origin & Location -->
<StackLayout class="card">
<Label text="📍 Origin & Location" class="card-title"/>
<Image src="~/assets/map.png" height="120" stretch="aspectFill" borderRadius="10"/>
<Label text="Region: Mukono, Uganda • Altitude: 1900m" class="location-info" textWrap="true"/>
</StackLayout>

<!-- Impact & Sustainability -->
<StackLayout class="card">
<Label text="🌱 Impact & Sustainability" class="card-title"/>
<Label text="✔️ Farmer received 30% above market price" class="impact-item"/>
<Label text="✔️ 2kg of CO₂ offset per bag" class="impact-item"/>
<Label text="✔️ Organic & Fair Trade Certified" class="impact-item"/>
</StackLayout>

<!-- Flavor Profile -->
<StackLayout class="card">
<Label text="☕ Flavor Notes" class="card-title"/>
<Label text="Floral aroma with citrus notes, smooth chocolate finish." class="flavor" textWrap="true"/>
<Label text="Best brewed with V60 or French Press." class="brew" textWrap="true"/>
</StackLayout>

<!-- Actions -->
<StackLayout class="actions" spacing="12">
<Button text="🛒 Add to Cart" class="btn"/>
<Button text="💸 Buy Carbon Credit" class="btn"/>
</StackLayout>

</StackLayout>
</ScrollView>
</GridLayout>
</Page>
</template>

<style scoped>
.page { background-color: #fffaf3; }

/* Header */
.header-title {
font-size: 22;
font-weight: bold;
color: #ffffff;
}

/* Cards */
.card {
background-color: white;
border-radius: 14;
padding: 16;
shadow-color: #000;
shadow-opacity: 0.08;
shadow-radius: 6;
}
.card-title {
font-size: 18;
font-weight: bold;
color: #6B4226;
margin-bottom: 8;
}

/* Product */
.product-title { font-size: 18; font-weight: bold; color: #6B4226; margin-top: 8; }
.product-price { font-size: 16; font-weight: bold; color: #2f855a; margin-top: 4; }
.product-meta { font-size: 14; color: #555; margin-top: 2; }

/* Farmer */
.farmer-name { font-size: 14; font-weight: bold; color: #333; }
.farmer-story { font-size: 13; color: #555; }
.farmer-quote { font-size: 14; font-style: italic; color: #2f855a; margin-top: 8; }

/* Location */
.location-info { font-size: 14; color: #444; margin-top: 8; }

/* Impact */
.impact-item { font-size: 14; color: #2f855a; margin-top: 4; }

/* Flavor */
.flavor { font-size: 14; color: #333; }
.brew { font-size: 13; color: #555; margin-top: 4; }

/* Actions */
.actions { margin-top: 12; }
.btn {
background-color: #6B4226;
color: #fff;
font-size: 16;
font-weight: bold;
padding: 12;
border-radius: 10;
}
.btn-outline {
border-width: 1;
border-color: #6B4226;
color: #6B4226;
font-size: 16;
font-weight: bold;
padding: 12;
border-radius: 10;
background-color: transparent;
}

/* Spacing */
.p-5 { padding: 20; }
</style>
