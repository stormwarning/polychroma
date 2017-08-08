<template>
<section class="container flex-auto bg-light-gray">
    <!-- <img src="../assets/img/NuxtMicro.png" alt="Nuxt.js Logo" class="logo" /> -->
    <gradient></gradient>
    <h1 class="title">
        USERS
    </h1>
    <ul class="users">
        <li class="user" v-for="(user, index) in users" v-bind:key="index">
            <nuxt-link :to="{ name: 'id', params: { id: index }}" class="button">
                {{ user.name }}
            </nuxt-link>
        </li>
    </ul>
</section>
</template>

<script>
import Gradient from '~components/Gradient.vue'
import axios from '~plugins/axios'


export default {
    components: {
        Gradient
    },

    data () {
        return {
            users: []
        }
    },

    asyncData (context) {
        return axios.get('/api/users').then((res) => {
            return {users: res.data}
        })
    },

    head () {
        return {
            title: 'Users'
        }
    },
}
</script>

<style scoped>
.title {
    margin: 30px 0;
}

.users {
    list-style: none;
    margin: 0;
    padding: 0;
}

.user {
    margin: 10px 0;
}
</style>
