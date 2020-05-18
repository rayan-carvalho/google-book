<template>
    <v-app>
        <router-view/>
         <feedback/>
    </v-app>
</template>

<script>
    import Feedback from './components/feedback/FeedBack.vue';
    export default {
        name: 'App',
        components:{ Feedback },
    };
</script>
