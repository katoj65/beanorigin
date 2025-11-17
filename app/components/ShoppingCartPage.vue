<script>
import AppLayout from './template/AppLayout.vue';
export default {
components:{
AppLayout
}








}
</script>

<template>
<app-layout>
<template #header>
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="5" paddingRight="5" >
<Label text="Shopping Cart" class="header-title" col="0" fontSize="20"/>
</GridLayout>
</template>



<template #content>

<StackLayout padding="0">


    <!-- CART ITEM -->
    <StackLayout v-for="(item, i) in 3"
                 :key="i"
                 marginBottom="18"
                 backgroundColor="#ffffff"
                 borderRadius="14"
                 padding="14">

        <GridLayout columns="auto, *, auto">

            <!-- Product Image -->
            <Image col="0"
                   src="~/assets/product1.jpg"
                   width="90"
                   height="90"
                   stretch="aspectFill"
                   borderRadius="10" />

            <!-- Product Info -->
            <StackLayout col="1" marginLeft="16">
                <Label text="Arabica Supreme"
                       fontSize="18"
                       fontWeight="bold"
                       color="#3A2E2A" />

                <Label text="250g • Medium Roast"
                       fontSize="13"
                       color="#7a706c"
                       marginTop="4" />

                <Label text="UGX 25,000"
                       fontSize="16"
                       marginTop="10"
                       fontWeight="bold"
                       color="#6B4226" />
            </StackLayout>

            <!-- Quantity Control -->
            <StackLayout col="2" verticalAlignment="center">
                <GridLayout columns="auto, auto, auto" columnGap="12">


                    <Label text="1" fontSize="18" fontWeight="bold" color="#3A2E2A" />


                </GridLayout>
            </StackLayout>

        </GridLayout>
    </StackLayout>



    <!-- SUMMARY SECTION -->
    <StackLayout backgroundColor="#ffffff"
                 borderRadius="14"
                 padding="16"
                 marginTop="10">

        <GridLayout columns="*, auto" rows="auto" marginBottom="8">
            <Label text="Subtotal" fontSize="16" color="#4b443f" />
            <Label col="1" text="UGX 75,000" fontSize="16" color="#4b443f" />
        </GridLayout>

        <GridLayout columns="*, auto" rows="auto" marginBottom="8">
            <Label text="Delivery" fontSize="16" color="#4b443f" />
            <Label col="1" text="UGX 5,000" fontSize="16" color="#4b443f" />
        </GridLayout>

        <GridLayout columns="*, auto" rows="auto" marginTop="12">
            <Label text="Total"
                   fontSize="18"
                   fontWeight="bold"
                   color="#3A2E2A" />
            <Label col="1"
                   text="UGX 80,000"
                   fontSize="18"
                   fontWeight="bold"
                   color="#6B4226" />
        </GridLayout>

    </StackLayout>



</StackLayout>

</template>



<template #footer>
<Button text="Add to Cart" class="btn-add-cart">
<FormattedString>
<!-- <Span class="icon fas" text.decode="&#xf07a;"/> -->
<Span text=" Checkout"/>
</FormattedString>
</Button>
</template>
</app-layout>
</template>

<style scoped>
/* Add to Cart Button */
.btn-add-cart {
background-color: #6B4226;
color: #ffffff;
font-size: 18;
font-weight: bold;
padding: 14;
border-radius: 10;
}
</style>