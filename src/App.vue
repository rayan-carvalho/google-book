<template>
    <v-app>
        <app-header />
        <v-content>
            <router-view />
        </v-content>        
        <feedback />
    </v-app>
</template>

<script>
    import apiConfig from './components/api/apiConfig';
    import Feedback from './components/feedback/FeedBack.vue';
    import AppHeader from './components/header/AppHeader.vue';
    export default {
        name: 'App',
        components: { Feedback, AppHeader },
        mixins: [apiConfig],
        created() {

            this.createInterceptors();

            if(window.localStorage.authToken && window.localStorage.userId){
                this.$store.commit('setAuthToken',window.localStorage.authToken);
                this.$store.commit('setUserId',window.localStorage.userId);                
            }else{
                this.$router.push('/');
            }
        }
    };
</script>
