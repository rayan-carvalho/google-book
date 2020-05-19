<template>
  <div>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    v-model="textSearch"
                    label="Pesquisar..."
                    @input="doSearch"
                >
                </v-text-field>    
            </v-col>
        </v-row>  
        <v-row 
            justify="center"
            v-if="!textSearch"
        >
            <v-col 
                cols="12"
                md="4"
                class="text-center"
            >
                <p class="overline">Digite algo para iniciar a pesquisa.</p>
            </v-col>    
        </v-row>        
        <loading :condition="searchOnGoing">
            <v-row>
                <v-col 
                    v-for="(book, i) in bookList"
                    :key="i"
                    cols="12"
                    md="3" 
                    lg="2"          
                >
                    <book-item :book="book"/>
                </v-col>
            </v-row> 
        </loading>     
  </div>
      

</template>

<script>    
    import Loading from '../loading/Loading.vue';
    import BookItem from '../book/BookItem.vue';
    const axios = require('axios');
    export default {
        name: 'BookList',
        components: { Loading, BookItem },
        
        data() {
            return {
                url: process.env.VUE_APP_GOOGLE_BOOK_API_URL,
                bookList: [],
                textSearch: '',
                searchOnGoing: false,
            }
        },        
        /*created(){            
            axios.get(this.url).then((response) =>{
                this.bookList = response.data.items;
            });
        },*/
        methods:{
            doSearch() {
                if(this.textSearch){
                    this.searchOnGoing = true,
                    axios.get(`${this.url}${this.textSearch}`).then((response) =>{
                        this.bookList = response.data.items;
                        this.searchOnGoing = false;
                    });
                }else{
                     this.bookList = [];
                }                   
                
            }
            
        }
        
     
    };
</script>
<style scoped>

</style>