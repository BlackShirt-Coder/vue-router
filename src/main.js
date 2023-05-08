import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import UserList from './components/users/UserList.vue';
import TeamLists from './components/teams/TeamLists.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/teams', component: TeamLists
        },
        {
            path: '/users', component: UserList
        },
        {
            path: '/teams/:teamId', component: TeamMembers
        }
    ]
});
app.use(router);
app.mount('#app');
