<template>
 
        <v-snackbar 
            v-model="showMessage"
            multi-line
            :color="color"
        >
            {{ message }}
            <v-btn
                text              
                @click="showMessage = false"
            >
                Fechar
            </v-btn>
        </v-snackbar>
 
</template>

<script>
    export default {
        name: 'Feedback',
        data(){
            return{
                 message: '',
                 showMessage: false,    
                 color: '',            
            };
        }, 
        watch:{
            '$store.state.message.text' : 'setMessage',
        },
        methods:{
            setMessage(){
                this.message = this.$store.state.message.text;
                this.color = this.$store.state.message.type == 'ERROR' ? 'error' : 'sucess';
                this.showMessage = true;
            }
            
        }      
        
    };
</script>


<style scoped>

</style>