<template>
    <v-container>
      <v-list dense>
        <v-subheader>Family Members</v-subheader>
        <v-list-item v-for="member in members" :key="member.id">
          <v-list-item-content>
            <v-list-item-title>{{ member.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ member.age }} years old</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
    data() {
      return {
        members: []
      };
    },
    mounted() {
      fetch('http://localhost:3000/api/family')
        .then(response => response.json())
        .then(data => {
          this.members = data;
        })
        .catch(error => {
          console.error('Error fetching family members:', error);
        });
    }
  };
  </script>
  