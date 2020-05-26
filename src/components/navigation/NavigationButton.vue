<template>
    <v-btn
        text
        small
        color="primary"
        @click="goToDetails"
    >
        Ver detalhes
    </v-btn>     
</template>

<script>
export default {
    name : 'NavigationButton',
    props: {
        url: { type:String, required:true },
    },            
    methods: {
        goToDetails() {
            this.$router.push(this.url);
        }
    }
}
</script>