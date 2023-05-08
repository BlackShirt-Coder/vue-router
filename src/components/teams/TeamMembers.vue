<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="team in member" :key="team.id" :name="team.fullName" :role="team.role"></user-item>
    </ul>
  </section>
</template>
<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: { UserItem },
  data() {
    return {
      teamName: '',
      member:[]

    }
  },
  inject: ['users', 'teams'],
  created() {
    
    const teamId = this.$route.params.teamId;
    const selectedMember=[];
    const selectedTeam = this.teams.find(team=> 
      team.id === teamId
    );

    const members=selectedTeam.members;
    for(const member of members){
     const selectedUser= this.users.find(user =>
        user.id === member //u1
      )
       selectedMember.push(selectedUser);
       this.teamName=selectedTeam.name;
       this.member=selectedMember;

    }



  }



}

</script>
<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>