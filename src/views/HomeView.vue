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
    
    <v-card flat
    height="20px"></v-card> 
      <h3 style="color:dimgray">Our Story</h3>
      <v-divider height="5px" color="dimgrey" />
      <v-card flat
    height="2px"></v-card>
      <p>It had been a regular day for us; we had been living amidst war for months. While returning from work, we ran into a man who carried bags of vegetables, the load of which seemed too heavy for him. Per our custom, we offered to help and were given directions to a school in the vicinity. Little did we know how fateful that day would be!
<br>The school, known to few at the time, sheltered many displaced individuals who ran for safety, what we observed deeply affected us. It did not take us long to decide that we needed to take significant action, and we needed an army to do so. Hence, we talked to our friends, who spoke to more friends, resulting in doctors who wanted to help the displaced individuals.
<br>Today, that small yet pivotal decision has created a team of over 400 medical and non-medical volunteers under the locally registered NGO of Maedot, selfless and dedicated to helping the affected people of Tigray.</p>
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
    <v-card class="mx-auto"
    max-width="1250"
    flat>
    
    <v-card flat
    height="5px"></v-card> 
      <h3 style="color:dimgray">Our Mission</h3>
      <v-divider height="5px" color="dimgrey" />
      <v-card flat
    height="2px"></v-card>
      <p>• To establish health surveillance and preventative measures.<br>
        • Develop a means that ensures feasible and sustainable access to health care in the sites.<br>
        • Provide a system for the appropriate solicitation of supervised aid according to the needs on the ground.<br>
        • To identify and highlight the gravity of problems such as deterioration of nutritional status and find possible solutions to provide an appropriate response.<br>
        • Coordinate with all interested parties and individuals to facilitate aid and promote better living conditions.<br>
        • Design specific projects that are based on needs and collaborate as implementing partners.</p>
        To fulfill our oaths and provide equitable health care for the community that nurtured and sheltered us.
To create a transcendent organ that functions as a family to help our community.
       
    </v-card> 
    <v-card class="mx-auto"
    max-width="1250"
    flat>
    
    <v-card flat
    height="5px"></v-card> 
      <h3 style="color:dimgray">Our Vission</h3>
      <v-divider height="5px" color="dimgrey" />
      <v-card flat
    height="2px"></v-card>
      <p>
        • To fulfill our oaths and provide equitable health care for the community that nurtured and sheltered us.<br>
        • To create a transcendent organ that functions as a family to help our community.</p>
       
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
