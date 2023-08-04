<template>
  <nav :style="{ 'margin-left': drawer ? '230px' : '0' }">
    <v-toolbar id="toolbar" class="teal" flat>
      <!-- <v-icon @click.stop="drawer = !drawer">mdi-dots-vertical</v-icon> -->
      <div class="logo-avatar"> <v-avatar class="teal" size="70">
          <v-img src="../assets/logo.jpg" height="70" width="70" contain></v-img>
        </v-avatar>
      </div>
      <v-toolbar-title id="title" class="text-uppercase">
        <P v-if="$vuetify.breakpoint.smAndUp" color="grey">እናት የኦቾሎኒ
 ቅቤ <br> Enat Peanut Butter</p>
        <P v-if="$vuetify.breakpoint.xs" style="font-size: 14px;" color="grey">እናት የኦቾሎኒ ቅቤ <br> Enat Peanut Butter</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="links"><v-toolbar-items>
           <router-link v-if="$vuetify.breakpoint.mdAndUp" to="/Home" class="link"
            :style="{ color: 'black',   hover }">Home</router-link>
          <router-link v-if="$vuetify.breakpoint.mdAndUp" to="/OurProducts" class="link"
            :style="{ color: 'black', hover }">Products</router-link>
          <router-link v-if="$vuetify.breakpoint.mdAndUp" to="/AboutView" class="link"
            :style="{ color: 'black' }">About Us</router-link>
          <router-link v-if="$vuetify.breakpoint.mdAndUp" to="/Contact" class="link"
            :style="{ color: 'black' }">Contacts</router-link>
          <v-icon v-if="$vuetify.breakpoint.mdAndUp" class="link" :style="{ color: 'dimgray' }">mdi-magnify</v-icon>
          <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.mdAndUp" class="link"
            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <sapn v-if="$vuetify.breakpoint.sm" class="link">Menu</sapn>
        </v-toolbar-items></div>
    </v-toolbar>
    <v-navigation-drawer id="sidedrawer" v-show="drawer" app v-model="drawer" class="black" location="left">
      <v-toolbar class="orange" id="close" flat>
        <v-spacer></v-spacer>
        <v-btn class="butn ml-100" icon @click="drawer = false">
          <v-icon class="butn white--text" aria-setsize="60">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>


      <!-- <v-btn id="close" class="butn ml-100" icon @click.stop="drawer = !drawer">
        <v-icon class="butn white--text" aria-setsize="60">mdi-chevron-left</v-icon>
      </v-btn> -->
      <!-- <v-btn class="white--text" v-show="mini" icon @click.stop="mini = !mini">
        <v-app-bar-nav-icon calss="white--text"></v-app-bar-nav-icon>
      </v-btn> -->

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-item class="white--text">{{ link.text }}</v-list-item-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        // { icon: 'md:home', text: '', route: '/' },
        { icon: 'mdi-home ', text: 'Home', route: '/Home' },
        { icon: 'mdi-food', text: 'Products', route: '/OurProducts' },
        { icon: 'mdi-briefcase', text: 'About Us', route: '/AboutView' },
        { icon: 'person', text: 'Contact-us', route: '/Contact' },
      ],

    }
  }
}
</script>

<style>
.active-drawer {
  margin-left: 250px;
}

.centered {
  text-align: center;
}

.link {
  margin-top: 27px;
  padding: 15px;
  color: black;

  /* text-decoration: none !important; */
  .link-menu {
    margin-top: 27px;
    padding: 0px;
    color: black;
  }

}

.link:hover {
  color: rgb(57, 6, 238) !important 
}

.links {
  margin-right: 5px;
}

link-text {
  color: black;
}

.logo-avatar {
  margin-left: 0px;
}

#title {
  margin-top: 20px;
}

#toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
}

.active-drawer {
  margin-top: 80px;
  margin-left: 230px;
}

#sidedrawer {
  margin-top: 51px;
}

#close {
  margin-left: 15;
}
</style>
