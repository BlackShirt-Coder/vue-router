<template>
 <the-navigation @set-page="setActivePage"></the-navigation>
<!-- <button @click="confirm()">confirm</button> -->
 <main>
<router-view></router-view>
 </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation,
   
  },
  data(){
    return {
      activePage: 'team-lists',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    }
  },
  provide(){
   return {
    users:this.users,
    teams:this.teams
   }
  },
  methods:{
    setActivePage(page){
      this.activePage=page;
      // console.log(this.activePage);
    },
    confirm(){
      this.$router.push('/teams');
    }
  },
  
}
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>