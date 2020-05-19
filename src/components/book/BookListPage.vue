<template>
   <div class="ma-5 pa-5">
   <v-container fluid>
       <v-row>
           <v-col 
                cols="12"
                md="4"
                lg="3"
           >
            <h6 class="display-1 text-uppercase">Livros</h6>
           </v-col>
       </v-row>

      <book-list />

   </v-container>
   </div>
</template>

<script>    
    import BookList from './BookList.vue';
    export default {
        name: 'BookListPage',
        components: { BookList }   
     
    };
</script>
<style scoped>

</style>