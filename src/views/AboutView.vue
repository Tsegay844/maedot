<template>
  <div class="about">
    <v-row no-gutters>
    <v-col
      cols="12"
      sm="10"
    >
      <v-card elevation="0">
        <v-card-title class="cyan darken-1" :style="{ background: 'url(' + imageSrc + ')' }">
          <span class="text-h5 white--text"><Strong>About Us</Strong> </span>
        </v-card-title>
        <span><br>Enat Peanut Butter is one of the leading peanut butter companies in Ethiopia. Our mission is to create delicious, healthy and sustainable products that satisfy our customers' taste buds. We use only the finest quality peanuts and ingredients to ensure that our peanut butter is rich in flavor and packed with nutrients. From classic smooth and crunchy varieties to unique flavors, we have something special for everyone. Try Eat Peanut Butter today!</span>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      sm="2" v-if="$vuetify.breakpoint.mdAndUp"
      class="align-end"
    >
      <v-card elevation="0">
        <v-card-title class="cyan darken-1">
          <span class="text-h5 white--text"><Strong>call-us</Strong> </span>
        </v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>+251912388296</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>+251914892551</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>
<style>
.about{
  margin-top: 65px;
}
</style>

<script>
export default {
  data () {
  return {
    imageSrc: require("../assets/bg1.jpg"),
  }
} 
}
</script>