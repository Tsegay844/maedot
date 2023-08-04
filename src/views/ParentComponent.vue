<template>
  <div> <ContactForm @submitted="submitted"/>  
    <Listofdata/></div>
   
  </template>
  
  <script>
  import ContactForm from './ContactForm'  
  import Listofdata from './Listofdata'
  
  export default {
    components: {
      ContactForm,
      Listofdata  
    },
    methods: {
      submitted(data) {
        this.$refs.listofdata.submitted(data)   
      } 
    }
  }  
  </script>