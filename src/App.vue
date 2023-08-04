<template>
  <v-app class="grey lighten-4"> 
    <NavBar />
    <v-content class="mx-4">
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer.vue'
export default {
  name: "App",
 components: {
  NavBar,
  Footer
 },

  data() {
    return {
      //
    };
  }
};
</script>