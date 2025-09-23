<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="auto, * , auto">

      <!-- Header -->
      <StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
        <Label text="Contact Support" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
      </StackLayout>

      <!-- Support Form -->
      <ScrollView row="1">
        <StackLayout padding="20" spacing="16">

          <Label text="We’re here to help! Fill out the form below or reach us directly."
                 fontSize="14" color="#555" textWrap="true" marginBottom="10"/>

          <!-- Name -->
          <TextField hint="Your Name" borderRadius="10" borderWidth="1" borderColor="#ccc" padding="12" fontSize="14" />

          <!-- Email -->
          <TextField hint="Your Email" keyboardType="email" borderRadius="10" borderWidth="1" borderColor="#ccc" padding="12" fontSize="14" />

          <!-- Message -->
          <TextView hint="Your Message" borderRadius="10" borderWidth="1" borderColor="#ccc" padding="12" fontSize="14" height="120" />

          <!-- Submit Button -->
          <Button text="Send Message"
                  backgroundColor="#6B4226"
                  color="#ffffff"
                  fontSize="16"
                  fontWeight="bold"
                  borderRadius="10"
                  padding="14"/>
        </StackLayout>
      </ScrollView>

      <!-- Quick Actions -->
      <StackLayout row="2" backgroundColor="white" padding="20" spacing="12" borderTopLeftRadius="20" borderTopRightRadius="20">
        <Button text="📞 Call Support"
                backgroundColor="#ffffff"
                color="#6B4226"
                borderWidth="1"
                borderColor="#6B4226"
                borderRadius="10"
                padding="14"
                fontSize="16"
                fontWeight="bold"/>

        <Button text="✉️ Email Support"
                backgroundColor="#6B4226"
                color="#ffffff"
                borderRadius="10"
                padding="14"
                fontSize="16"
                fontWeight="bold"/>
      </StackLayout>

    </GridLayout>
  </Page>
</template>

<style scoped>
.page { background-color: #fffaf3; }
</style>
