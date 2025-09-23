<template>
    <Page class="page" actionBarHidden="true">
      <GridLayout rows="auto, *">

        <!-- Header -->
        <StackLayout row="0" class="header">
          <Label text="Learn the Impact" class="header-title" />
        </StackLayout>

        <!-- Main Content -->
        <ScrollView row="1">
          <StackLayout class="container" spacing="20">

            <!-- Intro -->
            <Label text="Every purchase creates change. Discover how your choice supports farmers, education, and sustainability."
                   textWrap="true" class="intro" />

            <!-- Section 1: Farmer Impact -->
            <StackLayout class="impact-card">
              <Image src="~/assets/coffee.jpg" class="impact-image" />
              <Label text="Empowering Farmers" class="impact-title" />
              <Label text="Your purchase helps smallholder farmers earn fair income, improve their families’ wellbeing, and access new markets."
                     textWrap="true" class="impact-text" />
            </StackLayout>

            <!-- Section 2: Education Impact -->
            <StackLayout class="impact-card">
              <Image src="~/assets/coffee.jpg" class="impact-image" />
              <Label text="Investing in Education" class="impact-title" />
              <Label text="Part of the revenue funds STEM education, equipping the next generation with tools to innovate and solve global challenges."
                     textWrap="true" class="impact-text" />
            </StackLayout>

            <!-- Section 3: Sustainability Impact -->
            <StackLayout class="impact-card">
              <Image src="~/assets/coffee.jpg" class="impact-image" />
              <Label text="Sustainability First" class="impact-title" />
              <Label text="We prioritize eco-friendly farming, reforestation, and carbon credit initiatives that protect the planet for the future."
                     textWrap="true" class="impact-text" />
            </StackLayout>

            <!-- Call to Action -->
            <Button text="Shop with Purpose" class="btn-action" />

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

  /* Impact Cards */
  .impact-card {
    background-color: white;
    border-radius: 12;
    padding: 16;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 4;
  }
  .impact-image {
    width: 100;
    height: 100;
    margin-bottom: 10;
    horizontal-align: center;
  }
  .impact-title {
    font-size: 18;
    font-weight: bold;
    color: #6B4226;
    margin-bottom: 5;
  }
  .impact-text {
    font-size: 14;
    color: #555;
  }

  /* Button */
  .btn-action {
    background-color: #6B4226;
    color: #fff;
    border-radius: 8;
    padding: 14;
    font-weight: bold;
    margin-top: 20;
  }
  </style>
