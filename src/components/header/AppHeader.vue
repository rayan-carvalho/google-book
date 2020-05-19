<template>

     <v-app-bar
      color="secondary"
      app
      dark
    >
        <v-toolbar-title>Projeto</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$store.state.logged">
            <v-btn 
                text
                @click="goToBookList"
            >
                Livros
            </v-btn>
             <v-btn 
                text
                @click="goToCollection"                
             >
                Minha Coleção
            </v-btn> 
             <v-btn 
                text
                @click="logout"
             >
                Sair
            </v-btn>     
        </v-toolbar-items>
    </v-app-bar>

</template>

<script>
 
   
    export default {
        name: 'App',
        methods: {
            goToBookList() {
                this.$router.push('/book');
            },
            goToCollection() {
                //this.$router.push('/book');
            },
            logout() {
                this.$store.commit('setAthToken', '');
                this.$store.commit('setLogged', false);
                this.$router.push('/');
            }
        }        
    };
</script>
