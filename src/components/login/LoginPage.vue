<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col 
                cols="12"
                md="4"
                lg="3"
                class="text-center"
            >
                <h6 class="display-1 text-uppercase">Login</h6>
                
                <v-text-field 
                    label="Token"
                    v-model="token" 
                />
                
                <v-text-field 
                    label="ID do Usuário"
                    v-model="userID" 
                />

                <v-btn
                    depressed
                    dark
                    block
                    color="secondary"
                    class="mb-2"
                    @click="login"
                >
                    Login
                </v-btn>
                
                <v-btn 
                    text
                    @click="loginAsGuest"
                    color="blue"
                >
                    Entrar como visitante
                </v-btn>

            </v-col>    
        </v-row>       

    </v-container>
</template>

<script>
    
    export default {
        name: 'LoginPage',      
        data(){
            return{
                 userID : process.env.VUE_APP_USER_GOOGLE_BOOK_API,
                 token: process.env.VUE_APP_TOKEN,                
            }
        },
        methods: {
            login() {
                if(this.userID && this.token){                    
                    this.$store.commit('setAuthToken',this.token);
                    this.$store.commit('setUserId',this.userID);                    
                    this.$router.push('/book');
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve informar um ID de Usuário e um Token.'); 
                }

            },
            loginAsGuest() {
                this.$store.commit('setLogged', true);
                this.$router.push('/book');               

            }
        } 
    };
</script>
<style scoped>

</style>