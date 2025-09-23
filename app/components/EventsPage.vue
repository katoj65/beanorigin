<template>
<Page class="page" actionBarHidden="true">
<GridLayout rows="auto, *" backgroundColor="#fffaf3">

<!-- Header -->
<GridLayout row="0" rows="auto" columns="auto, *, auto" backgroundColor="#6B4226" padding="15" borderBottomLeftRadius="20" borderBottomRightRadius="20">
<Label col="0" text.decode="&#xf0c9;" fontSize="20" color="#fff" class="fas icon" @tap="goBack" />
<Label col="1" text="Coffee Events" fontSize="22" fontWeight="bold" color="#fff" textAlignment="center"/>
<Label col="2" text.decode="&#xf142;" fontSize="20" color="#fff" class="fas icon" @tap="detailNav" />
</GridLayout>

<!-- Event List -->
<ScrollView row="1">
<StackLayout class="p-5" spacing="12"> <!-- Reduced spacing -->

<!-- Event Card 1 -->
<StackLayout class="card">
<Image src="~/assets/coffee.jpg" stretch="aspectFill" borderTopLeftRadius="14" borderTopRightRadius="14" height="140"/>
<StackLayout padding="12">
<Label text="☕ Coffee Tasting Workshop" class="card-title" />
<Label text="Location: Kampala Coffee Hub" class="card-subtitle" />
<Label text="Date: 10th Oct 2025 | Time: 2:00 PM - 5:00 PM" class="date-badge" />
<Label text="Join local farmers and baristas to explore the art of coffee tasting." class="card-description" textWrap="true" />
<Button text="Register" class="btn-register"   @tap="detailNav"/>
</StackLayout>
</StackLayout>

<!-- Event Card 2 -->
<StackLayout class="card">
<Image src="~/assets/coffee.jpg" stretch="aspectFill" borderTopLeftRadius="14" borderTopRightRadius="14" height="140"/>
<StackLayout padding="12">
<Label text="🌱 Sustainable Coffee Farming Seminar" class="card-title" />
<Label text="Location: Entebbe Convention Center" class="card-subtitle" />
<Label text="Date: 20th Oct 2025 | Time: 10:00 AM - 1:00 PM" class="date-badge" />
<Label text="Learn best practices for sustainable coffee production and carbon savings." class="card-description" textWrap="true" />
<Button text="Register" class="btn-register"  @tap="detailNav"/>
</StackLayout>
</StackLayout>

<!-- Event Card 3 -->
<StackLayout class="card">
<Image src="~/assets/coffee.jpg" stretch="aspectFill" borderTopLeftRadius="14" borderTopRightRadius="14" height="140"/>
<StackLayout padding="12">
<Label text="🎉 Coffee Expo 2025" class="card-title" />
<Label text="Location: Kampala City Hall" class="card-subtitle" />
<Label text="Date: 5th Nov 2025 | Time: 9:00 AM - 6:00 PM" class="date-badge" />
<Label text="Experience new coffee products, meet farmers, and attend workshops." class="card-description" textWrap="true" />
<Button text="Register" class="btn-register"  @tap="detailNav"/>
</StackLayout>
</StackLayout>

<!-- Event Card 4 -->
<StackLayout class="card">
<Image src="~/assets/coffee.jpg" stretch="aspectFill" borderTopLeftRadius="14" borderTopRightRadius="14" height="140"/>
<StackLayout padding="12">
<Label text="📖 Barista Training Session" class="card-title" />
<Label text="Location: Coffee Academy, Jinja" class="card-subtitle" />
<Label text="Date: 12th Nov 2025 | Time: 1:00 PM - 4:00 PM" class="date-badge" />
<Label text="Hands-on training for aspiring baristas and coffee enthusiasts." class="card-description" textWrap="true" />
<Button text="Register" class="btn-register"  @tap="detailNav"/>
</StackLayout>
</StackLayout>

</StackLayout>
</ScrollView>

</GridLayout>
</Page>
</template>

<script>
import EventDetailsPage from './EventDetailsPage.vue';
export default {
methods: {
goBack() {
this.$navigateBack();
},

detailNav(){
this.$navigateTo(EventDetailsPage);
},


}
}
</script>

<style scoped>
.page {
background-color: #fffaf3;
}

.card {
background-color: white;
border-radius: 14;
shadow-color: #000;
shadow-opacity: 0.15;
shadow-radius: 6;
overflow: hidden;
}

.card-title {
font-size: 18;
font-weight: bold;
color: #6B4226;
margin-bottom: 4;
}

.card-subtitle {
font-size: 14;
color: #555;
margin-bottom: 6;
}

.card-description {
font-size: 14;
color: #333;
margin-bottom: 8;
}

.date-badge {
background-color: #6B4226;
color: #fff;
font-size: 12;
font-weight: bold;
padding: 4;
border-radius: 6;
align-self: flex-start;
margin-bottom: 8;
}

.btn-register {
background-color: #6B4226; /* Same as header */
color: #fff;
font-weight: bold;
font-size: 14;
padding: 10;
border-radius: 10;
text-align: center;
}

.p-5 { padding: 20; }
</style>
