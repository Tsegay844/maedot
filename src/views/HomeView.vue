<template>
  <div class="home">
    <!-- <v-card :class="['card', `card--${$vuetify.breakpoint.name}`]" :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      display: flex, justify: center
    }">
      <v-container fluid>
        <v-card-title :class="{
          'card-title-xs': $vuetify.breakpoint.xsOnly,
          'card-title-sm': $vuetify.breakpoint.smAndUp,
          'card-title-md': $vuetify.breakpoint.mdAndUp,
        }" style="color:whitesmoke">
          <span v-if="$vuetify.breakpoint.smAndUp"> <Strong>Peanut Foods Manufacturing Company</Strong></span>
          <span v-if="$vuetify.breakpoint.xs"> <Strong>Peanut Foods Manufacturing </Strong></span>
        </v-card-title>
        <v-divider height="5px" color="dimgrey" />
        <v-card-text :class="{
          'card-text-xs': $vuetify.breakpoint.xsOnly,
          'card-text-sm': $vuetify.breakpoint.smAndUp,
          'card-text-md': $vuetify.breakpoint.mdAndUp,
          'card-text-lg': $vuetify.breakpoint.lgAndUp
        }" style="color:wheat">
          <span>Enjoy the most delicious and creamiest <Strong>Enat Peanut Butter.</Strong> It is all-natural peanut
            butter.</span>
        </v-card-text>
      </v-container>
      <v-divider height="5px" color="dimgrey" />
    </v-card> -->
    <v-carousel :cycle="true" :interval="5000" :show-navigation="true" :height="400">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    >
  </v-carousel-item>
  </v-carousel>
    <v-card class="mx-auto"
    max-width="1250"
    flat>
    <v-divider height="5px" color="dimgrey" />
    <v-card flat
    height="20px"></v-card> 
      <h3 style="color:dimgray">Our Vision</h3>
      <v-card flat
    height="2px"></v-card>
      <p>To create a network of professionals from different crafts and engage in multi sectorial policy designing and shaping, subsequently promoting professionalism and research based, community driven sustainable solutions to problems with in the community.</p>
      <!-- <v-container fluid>
      <v-row dense>
        <v-col
        cols="12" xs="12" sm="6" md="4" lg="3"
          v-for="bodyImage in bodyImages"
          :key="bodyImage.title"
        >
          <v-card>
            <v-img
              :src="bodyImage.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="220px"
              cover
            >  
            </v-img>
            <P class="text-8 text-italic text-center" > {{bodyImage.title}}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    </v-card> 

    <!-- image for trat -->
    <!-- <v-card :class="['card', `card--${$vuetify.breakpoint.name}`]" :style="{
      backgroundImage: `url(${bgImage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '90%',
      display: flex, justify: center
    }"  height="500px">
      <v-container fluid>
        <v-card-title :class="{
          'card-title-xs': $vuetify.breakpoint.xsOnly,
          'card-title-sm': $vuetify.breakpoint.smAndUp,
          'card-title-md': $vuetify.breakpoint.mdAndUp,
        }" style="color:whitesmoke">
        </v-card-title>
        <v-divider height="5px" color="dimgrey" />
        <v-card-text :class="{
          'card-text-xs': $vuetify.breakpoint.xsOnly,
          'card-text-sm': $vuetify.breakpoint.smAndUp,
          'card-text-md': $vuetify.breakpoint.mdAndUp,
          'card-text-lg': $vuetify.breakpoint.lgAndUp
        }" style="color:#6200ea">
          <span style="font-size: 28px;"><Strong>Conformity Assessment by Ethiopian Food and Drug Authority</Strong></span>
        </v-card-text>
      </v-container>
      <v-divider height="5px" color="dimgrey" />
    </v-card> -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
        {  title: 'peanut-plant', src: require("../assets/mprofile1.png") },
        {  title: 'raw-peanuts', src: require("../assets/mprofile2.jpg") },
        {  title: 'peanut cream', src: require("../assets/mprofile3.jpg") },
        {  title: 'peanut cream', src: require("../assets/mprofile4.jpg") },
        ],
      }
    },
  }
</script>

<style>
.home {
  margin-top: 80px;
}

.card-title-xs {
  font-size: 14px;
}

.card-title-sm {
  font-size: 22px;
}

.card-title-md {
  font-size: 24px;
}

.card-title-lg {
  font-size: 32px;
}

.card-text-xs {
  font-size: 12px;
}

.card-text-sm {
  font-size: 18px;
}

.card-text-md {
  font-size: 20px;
}

.card-text-sm {
  font-size: 22px;
}
.body{
  margin-left: 200px;
  margin-right: 200px;
}
.text-10 {
  font-size: 5px !important;
}

.text-italic {
  font-style: italic !important; 
}

.text-center {
  text-align: center !important;
}


</style>
