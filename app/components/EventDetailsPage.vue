<template>
    <Page class="page" actionBarHidden="true">
      <GridLayout rows="auto, *">

        <!-- Header -->
        <StackLayout row="0" class="header">
          <Label text="Event Details" class="header-title" />
        </StackLayout>

        <!-- Content -->
        <ScrollView row="1">
          <StackLayout class="container" spacing="20">

            <!-- Event Image -->
            <Image src="~/assets/coffee.jpg" stretch="aspectFill" class="event-image" />

            <!-- Event Title -->
            <Label text="Coffee Sustainability Workshop" class="event-title" textWrap="true" />

            <!-- Event Details -->
            <StackLayout class="event-info" spacing="8">
              <Label text="📅 Date: September 30, 2025" class="event-text" />
              <Label text="📍 Location: Kampala, Uganda" class="event-text" />
              <Label text="⏰ Time: 10:00 AM - 2:00 PM" class="event-text" />
            </StackLayout>

            <!-- Event Description -->
            <Label text="Join us for a hands-on workshop where coffee lovers and farmers come together to learn sustainable farming practices, fair trade principles, and carbon offset initiatives."
                   textWrap="true" class="event-description" />

            <!-- Register Button -->
            <Button text="Register Now" class="btn-register" />

          </StackLayout>
        </ScrollView>
      </GridLayout>
    </Page>
  </template>

  <style scoped>
  .page {
    background-color: #fffaf3;
    padding: 0; /* Remove default page padding */
  }

  /* Compact Header */
  .header {
    background-color: #6B4226;
    padding-top: 12; /* small padding for status bar */
    padding-bottom: 12;
    width: 100%;
    justify-content: center; /* vertically center the title */
    border-bottom-left-radius: 20;
    border-bottom-right-radius: 20;
    shadow-color: #000;
    shadow-opacity: 0.15;
    shadow-radius: 6;
  }
  .header-title {
    font-size: 20;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
  }

  /* Container */
  .container {
    padding: 20;
  }

  /* Event Image */
  .event-image {
    width: 100%;
    height: 200;
    border-radius: 12;
    margin-bottom: 12;
  }

  /* Event Title */
  .event-title {
    font-size: 20;
    font-weight: bold;
    color: #6B4226;
    margin-bottom: 8;
  }

  /* Event Info */
  .event-info {
    background-color: white;
    border-radius: 12;
    padding: 12;
    shadow-color: #000;
    shadow-opacity: 0.05;
    shadow-radius: 4;
  }
  .event-text {
    font-size: 14;
    color: #444;
  }

  /* Event Description */
  .event-description {
    font-size: 14;
    color: #555;
    margin-top: 12;
  }

  /* Register Button */
  .btn-register {
    background-color: #6B4226;
    color: #fff;
    font-weight: bold;
    border-radius: 8;
    padding: 14;
    font-size: 15;
    margin-top: 20;
  }
  </style>
