<template>
<v-footer class="d-flex flex-column primary">
    <div class="bg-teal d-flex w-100 align-center px-4">
        <p><strong>MaedotAid for a brighter Future!<br></strong>Mekelle-Tigray, Ethiopia</p>
        <!-- <v-spacer></v-spacer>
        <v-btn 
        href="https://www.facebook.com/meles.gebreyesus"  
  target="_blank"
   class="butn mx-4">
        <v-icon class="butn white--text" >mdi-facebook</v-icon>
      </v-btn>
      <v-btn  href="https://www.linkedin.com/in/meles-g-weldegebriel-1b7911a/"  
  target="_blank"
  class="butn mx-4">
        <v-icon class="butn white--text" >mdi-linkedin</v-icon>
      </v-btn>
      <v-btn  class="butn mx-4">
        <v-icon class="butn white--text" >mdi-instagram</v-icon>
      </v-btn>
      <v-btn  href="mailto:tsegay844@gmail.com?subject=My%20Message&body=This%20is%20my%20prefilled%20message." class="butn mx-4">
        <v-icon class="butn white--text" >mdi-email</v-icon>
      </v-btn>
       -->
    </div>

    <!-- <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div> -->
</v-footer>
</template>
<script>
    export default {
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),
        methods: {
            navigateToMessaging() {
                // Navigate to the messaging page using router-link
                this.$router.push({
                    name: 'messaging',
                    params: {
                        recipient: 'tsegay844.com'
                    }
                });
            }
        }
    }
</script>
<!-- <template>
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn  class="butn mx-8">
        <v-icon class="butn white--text" >mdi-facebook</v-icon>
      </v-btn>
      <v-btn  class="butn mx-8">
        <v-icon class="butn white--text" >mdi-facebook</v-icon>
      </v-btn>
      <v-btn  class="butn mx-8">
        <v-icon class="butn white--text" >mdi-facebook</v-icon>
      </v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Copyright</strong>
      </div>
    </v-footer>
  
</template>

  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
    }
 <script>
 < /script>
</script> -->
