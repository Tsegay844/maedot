<template>
  <div class="c-formfrom"><v-form @submit.prevent="submit">
      
      <v-text-field 
        v-model="name"      
      />
     
      <v-text-field     
        v-model="email"       
      />
      
      <v-textarea 
        v-model="message"
      /> 
      
      <v-btn  
        type="submit"   
      >
        Submit
      </v-btn>
      
    </v-form></div>
    
  </template>
  
  <script>
  export default {
    data() {  
      return {
        name: '',
        email: '',   
        message: ''      
      }   
    },
    methods: {
      submit() {
        this.$emit('submitted', {
          name: this.name,
          email: this.email,   
          message: this.message   
        })  
        
        this.name = ''
        this.email = ''  
        this.message = ''
      }    
    }   
  } 
  </script>
  <style>
.c-formfrom{
  margin-top: 80px;
}
</style>