<template>
  <div id="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container fluid class="my-5">
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span right class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span right class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout>
        

        <v-card flat tile v-for="project in projects" :key="project.title">

            <v-row row wrap>

                  <v-col cols="12" md="6" :class="`pl-3 project ${project.status}`">
                    <div class="caption grey--text">Project Title</div>
                    <div>{{project.title}}</div>
                  </v-col>

                  <v-col xs="2">
                    <div class="caption grey--text">Person</div>
                    <div>{{project.person}}</div>
                  </v-col>

                  <v-col xs="2">
                    <div class="caption grey--text">Due Date</div>
                    <div>{{project.due}}</div>
                  </v-col>

                  <v-col xs="2">
                    <!-- <div class="caption grey--text">Status</div>
                    <div>{{project.status}}</div> -->
                    <div calign="right">
                      <v-chip small :color="`${project.status}`" 
                      :class="`v-chip--active white--text caption my-2`">
                        {{project.status}}
                      </v-chip>
                    </div>
                  </v-col>

                </v-row>

                <v-row cols="12">
                <v-divider></v-divider>
            </v-row>
        </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
data() {
  return{
   projects: [
      { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
   ]
  }
},
methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>


<style>
.project.complete {
border-left: 4px solid #3cd1c2;
}

.project.ongoing{
border-left: 4px solid #e0c444;
}

.project.overdue{
border-left: 4px solid #ce1c16;
}

.v-chip.ongoing {
  background: #fed330;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.overdue {
  background: #fc5c65;
}
</style>