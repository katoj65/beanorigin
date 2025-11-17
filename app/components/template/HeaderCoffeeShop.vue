<template>
    <GridLayout rows="auto" columns="auto, *, auto" padding="15" backgroundColor="#6B4226" class="header p-5">

        <!-- Left: Logo -->
        <Image
            row="0" col="0"
            src="~/assets/logos/logo1.jpg"
            width="40" height="40"
            stretch="aspectFit"
            borderRadius="20" />

        <!-- Center: App Name -->
        <StackLayout row="0" col="1" horizontalAlignment="left" paddingLeft="10">
            <Label
                text="Coffee Shop 1"
                color="#ffffff"
                fontSize="21"
                textAlignment="left"
                fontWeight="bold" />
            <Label
                text="Open from Mon - Sun | 8:00 am - 12:00 am"
                color="#f5deb3"
                fontSize="12"
                textAlignment="left" />
        </StackLayout>

        <!-- Right: Icon -->
        <Label
            row="0" col="2"
            text.decode="&#xf0c9;"
            class="fas"
            color="#ffffff"
            fontSize="22"
            verticalAlignment="center"
            horizontalAlignment="right" />

    </GridLayout>

</template>