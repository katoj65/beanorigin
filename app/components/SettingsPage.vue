<template>
    <Page class="page" actionBarHidden="true">
      <GridLayout rows="auto, *">

        <!-- Header -->
        <StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
          <Label text="Settings" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
        </StackLayout>

        <!-- Content -->
        <ScrollView row="1">
          <StackLayout padding="20" spacing="20">

            <!-- Profile Section -->
            <StackLayout horizontalAlignment="center" spacing="8">
              <Image src="~/assets/logo.png" width="100" height="100" stretch="aspectFill" borderRadius="50"/>
              <Label text="John Doe" fontSize="18" fontWeight="bold" color="#333"/>
              <Label text="johndoe@email.com" fontSize="14" color="#666"/>
            </StackLayout>

            <!-- User Settings -->
            <Label text="User Settings" fontSize="16" fontWeight="bold" color="#6B4226" marginTop="20"/>
            <StackLayout spacing="12">
              <GridLayout columns="auto, *" class="settings-item">
                <Label text="👤" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Edit Profile" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="💳" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Wallet" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="📦" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="My Orders" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="☎️" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Contact Support" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="🚪" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Logout" col="1" fontSize="14" color="#d9534f" fontWeight="bold" verticalAlignment="center"/>
              </GridLayout>
            </StackLayout>

            <!-- App Settings -->
            <Label text="App Settings" fontSize="16" fontWeight="bold" color="#6B4226" marginTop="20"/>
            <StackLayout spacing="12">
              <GridLayout columns="auto, *" class="settings-item">
                <Label text="🔔" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Notifications" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="🌙" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Dark Mode" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="🌍" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="Language" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>

              <GridLayout columns="auto, *" class="settings-item">
                <Label text="ℹ️" col="0" fontSize="18" verticalAlignment="center"/>
                <Label text="About App" col="1" fontSize="14" color="#333" verticalAlignment="center"/>
              </GridLayout>
            </StackLayout>

          </StackLayout>
        </ScrollView>

      </GridLayout>
    </Page>
  </template>

  <style scoped>
  .page { background-color: #fffaf3; }

  .settings-item {
    background-color: #fff;
    border-radius: 12;
    padding: 12;
    shadow-color: #000;
    shadow-opacity: 0.05;
    shadow-radius: 3;
  }
  </style>
