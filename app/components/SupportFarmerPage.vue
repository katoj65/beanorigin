<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="auto, *">

      <!-- Header -->
      <StackLayout row="0" class="header">
        <Label text="Support Farmers" class="header-title" />
      </StackLayout>

      <!-- Content -->
      <ScrollView row="1">
        <StackLayout class="container" spacing="20">

          <!-- Intro -->
          <Label text="Your contribution empowers coffee farmers, strengthens communities, and protects the environment."
                 textWrap="true" class="intro" />

          <!-- Donation Section -->
          <StackLayout class="support-card">
            <Label text="💰 Send a Donation" class="support-title" />
            <Label text="Help farmers invest in better tools, education, and healthcare." textWrap="true" class="support-text" />
            <Button text="Donate Now" class="btn-action" />
          </StackLayout>

          <!-- Tip Section -->
          <StackLayout class="support-card">
            <Label text="☕ Send a Tip" class="support-title" />
            <Label text="Show appreciation directly to farmers for their hard work." textWrap="true" class="support-text" />
            <Button text="Send Tip" class="btn-action" />
          </StackLayout>

          <!-- Tree Planting Section -->
          <StackLayout class="support-card">
            <Label text="🌱 Plant a Tree" class="support-title" />
            <Label text="Contribute to reforestation and offset carbon emissions with every tree." textWrap="true" class="support-text" />
            <Button text="Plant a Tree" class="btn-action" />
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
  margin-bottom: 10;
}

/* Support Cards */
.support-card {
  background-color: white;
  border-radius: 14;
  padding: 20;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4;
}
.support-title {
  font-size: 18;
  font-weight: bold;
  color: #6B4226;
  margin-bottom: 8;
}
.support-text {
  font-size: 14;
  color: #555;
  margin-bottom: 12;
}

/* Buttons */
.btn-action {
  background-color: #6B4226;
  color: #ffffff;
  border-radius: 8;
  padding: 14;
  font-weight: bold;
  font-size: 15;
}
</style>
