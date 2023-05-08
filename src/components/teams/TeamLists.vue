<template>
    <ul>
        <team-item
          v-for="team in teams"
          :key="team.id"
          :id="team.id"
          :name="team.name"
          :member-count="team.members.length"
        ></team-item>
      </ul>
</template>
<script>
import TeamItem from './TeamItem.vue'

export default{
    inject:['teams'],
    components:{
      TeamItem
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>