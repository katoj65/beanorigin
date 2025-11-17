<script>
import AppLayout from './template/AppLayout.vue';
import BuyCoffeePage from './BuyCoffeePage.vue';

export default {
components:{
AppLayout
},

data(){
return{
products:[]

}},

methods:{
buyCoffeeNav(){
this.$navigateTo(BuyCoffeePage );
}




}



}
</script>
<template>
<app-layout>
<template #header>
<GridLayout columns="*, auto" verticalAlignment="center" paddingLeft="5" paddingRight="5" >
<Label text="Complete Transaction" class="header-title" col="0" fontSize="20"/>
<!-- <Label class="fas icon" text.decode="&#xf0c9;" col="1" color="#fff" /> -->
</GridLayout>
</template>

<template #content>
    <StackLayout padding="0" horizontalAlignment="center">

        <!-- SUCCESS ICON WITH GRADIENT CIRCLE -->
        <StackLayout
          width="100"
          height="100"
          borderRadius="60"
          backgroundColor="#6B4226"
          opacity="0.95"
          verticalAlignment="center"
          horizontalAlignment="center"
          marginTop="40"
        >
          <Label
            text="✔"
            fontSize="40"
            color="#ffffff"
            verticalAlignment="center"
            horizontalAlignment="center"
          />
        </StackLayout>

        <!-- TITLE -->
        <Label
          text="Payment Successful"
          fontSize="28"
          fontWeight="bold"
          color="#3B2E2A"
          marginTop="25"
        textAlignment="center"
        />

        <!-- MESSAGE -->
        <Label
          text="Your order has been confirmed."
          fontSize="16"
          color="#7a706c"
          textAlignment="center"
          marginTop="10"
          marginBottom="25"
          width="80%"
        />

        <!-- FLOATING WHITE CARD (GLASS EFFECT) -->
     <!-- SUMMARY SECTION -->
     <StackLayout backgroundColor="#ffffff"
     borderRadius="14"
     padding="16"
     marginTop="10">


<GridLayout columns="*, auto" rows="auto" marginBottom="8">
<Label text="Transaction ID" fontSize="16" color="#4b443f" />
<Label col="1" text="U58963463" fontSize="16" color="#4b443f" />
</GridLayout>


<GridLayout columns="*, auto" rows="auto" marginBottom="8">
<Label text="Payment Method" fontSize="16" color="#4b443f" />
<Label col="1" text="Mobile Money" fontSize="16" color="#4b443f" />
</GridLayout>




<GridLayout columns="*, auto" rows="auto" marginBottom="8">
<Label text="Subtotal" fontSize="16" color="#4b443f" />
<Label col="1" text="UGX 75,000" fontSize="16" color="#4b443f" />
</GridLayout>


<GridLayout columns="*, auto" rows="auto" marginBottom="8">
<Label text="Delivery" fontSize="16" color="#4b443f" />
<Label col="1" text="UGX 5,000" fontSize="16" color="#4b443f" />
</GridLayout>

<GridLayout columns="*, auto" rows="auto" marginBottom="8">
    <Label text="Delivery Time" fontSize="16" color="#4b443f" />
    <Label col="1" text="3–5 working days" fontSize="16" color="#4b443f" />
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












        <!-- CONTINUE BUTTON -->
        <StackLayout
          width="100%"
          backgroundColor="#6B4226"
          padding="14"
          borderRadius="12"
          marginTop="35"
          @tap="buyCoffeeNav"

        >
          <Label
            text="Continue Shopping"
            color="#ffffff"
            fontSize="18"
            textAlignment="center"
            fontWeight="bold"
          />
        </StackLayout>

        <!-- SMALL SUBLINK -->
        <Label
          text="View Order Details"
          color="#6B4226"
          fontSize="15"
          marginTop="15"
          textAlignment="center"
          @tap="$navigateBack()"

        />

      </StackLayout>

</template>



<template #footer>


</template>
</app-layout>
</template>



.page {
  background-color: #f7f3ef;
}

.container {
  padding: 24px;
  align-items: center;
}

.success-icon {
  font-size: 80;
  color: #4CAF50;
  margin-top: 30px;
}

.title {
  font-size: 26;
  font-weight: bold;
  margin-top: 16px;
  color: #3b3028;
}

.subtitle {
  font-size: 15;
  text-align: center;
  margin: 10px 0 25px;
  color: #6a5f58;
}

.summary {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 14;
}

.summary-title {
  font-size: 18;
  font-weight: bold;
  margin-bottom: 14px;
  color: #3b3028;
}

.row {
  margin-bottom: 10px;
}

.label {
  font-size: 15;
  color: #6a5f58;
}

.value {
  font-size: 15;
  color: #3b3028;
  font-weight: bold;
}

.actions {
  width: 100%;
  margin-top: 30px;
}

.link {
  font-size: 17;
  color: #2c6e49;
  margin-bottom: 14px;
  text-align: left;
}
</style>