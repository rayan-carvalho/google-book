<template>
    <div>
        <div v-if="condition">
            <div class="text-center">
                <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
                >
                </v-progress-circular>
            </div>
        </div>     
        <div v-if="!condition">
            <slot/>
        </div> 
    </div>
</template>

<script>   
    
    export default {
        name: 'Loading',
        props: {
            condition: { type: Boolean, required: true},
        }                    
     
    };
</script>
<style scoped>

</style>