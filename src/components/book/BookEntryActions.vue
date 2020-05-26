<template>
    <div>
        <div 
            class="mb-4"
            v-if="book.volumeInfo.previewLink"
        >
            <v-subheader>Ações</v-subheader>
            <v-btn 
            text
            color="primary"
            @click="goToPreview(book)"
            >
            Ver Preview
            </v-btn>
        </div> 
    </div> 
</template>
<script >
    export default {
        name: 'BookEntryActions',
        props: {
        book: { type: Object, required: true }
    }
    }
</script>