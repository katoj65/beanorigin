




<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="auto, *">

      <!-- Header -->
      <StackLayout row="0" backgroundColor="#6B4226" padding="20" borderBottomLeftRadius="20" borderBottomRightRadius="20">
        <Label text="My Wallet" fontSize="22" fontWeight="bold" color="#ffffff" textAlignment="center"/>
      </StackLayout>

      <!-- Wallet Content -->
      <ScrollView row="1">
        <StackLayout padding="20" spacing="20">

          <!-- Balance Card -->
          <StackLayout backgroundColor="#ffffff" borderRadius="16" padding="20" shadowColor="#000" shadowOpacity="0.1" shadowRadius="6">
            <Label text="Wallet Balance" fontSize="16" color="#555"/>
            <Label text="$125.00" fontSize="28" fontWeight="bold" color="#6B4226" marginTop="8"/>
          </StackLayout>

          <!-- Actions -->
          <GridLayout columns="*, *" columnSpacing="16">
            <Button text="Top Up" col="0"
                    backgroundColor="#6B4226"
                    color="#fff"
                    fontSize="16"
                    borderRadius="10"
                    padding="14"
                    fontWeight="bold"/>

            <Button text="Withdraw" col="1"
                    backgroundColor="#ffffff"
                    borderWidth="1"
                    borderColor="#6B4226"
                    color="#6B4226"
                    fontSize="16"
                    borderRadius="10"
                    padding="14"
                    fontWeight="bold"/>
          </GridLayout>

          <!-- Transactions -->
          <Label text="Recent Transactions" fontSize="18" fontWeight="bold" color="#6B4226" marginTop="10"/>

          <StackLayout spacing="12">

            <!-- Transaction Item 1 -->
            <GridLayout columns="*, auto" backgroundColor="#fff" borderRadius="12" padding="12" shadowColor="#000" shadowOpacity="0.05" shadowRadius="3">
              <StackLayout col="0">
                <Label text="Coffee Purchase - Ethiopian Yirgacheffe" textWrap="true" fontSize="14" color="#333"/>
                <Label text="Sep 20, 2025" fontSize="12" color="#888"/>
              </StackLayout>
              <Label col="1" text="- $18.00" fontSize="14" fontWeight="bold" color="#d9534f" verticalAlignment="center"/>
            </GridLayout>

            <!-- Transaction Item 2 -->
            <GridLayout columns="*, auto" backgroundColor="#fff" borderRadius="12" padding="12" shadowColor="#000" shadowOpacity="0.05" shadowRadius="3">
              <StackLayout col="0">
                <Label text="Wallet Top-Up" fontSize="14" color="#333"/>
                <Label text="Sep 18, 2025" fontSize="12" color="#888"/>
              </StackLayout>
              <Label col="1" text="+ $50.00" fontSize="14" fontWeight="bold" color="#28a745" verticalAlignment="center"/>
            </GridLayout>

            <!-- Transaction Item 3 -->
            <GridLayout columns="*, auto" backgroundColor="#fff" borderRadius="12" padding="12" shadowColor="#000" shadowOpacity="0.05" shadowRadius="3">
              <StackLayout col="0">
                <Label text="Coffee Purchase - Colombian Supremo" textWrap="true" fontSize="14" color="#333"/>
                <Label text="Sep 15, 2025" fontSize="12" color="#888"/>
              </StackLayout>
              <Label col="1" text="- $16.00" fontSize="14" fontWeight="bold" color="#d9534f" verticalAlignment="center"/>
            </GridLayout>

          </StackLayout>

        </StackLayout>
      </ScrollView>

    </GridLayout>
  </Page>
</template>

<style scoped>
.page { background-color: #fffaf3; }
</style>
