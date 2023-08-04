<template>
<div class="c-form">
  <ul>
      <li v-for="data in datas">
        <div>{{ data.name }}</div>
        <div>{{ data.email }}</div>
        <div>{{ data.message }}</div>      
      </li>   
    </ul>
</div> 
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        datas: []
      }  
    },
    methods: {
      submitted(data) {
        this.datas.push(data)   
      }  
    },
    created() {
      this.$on('submitted', this.submitted)   
      console.log('Form submitted!')  
    }
  }
  </script>
  <style>
.c-form{
  margin-top: 60px;
}
</style>