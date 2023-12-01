<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const searchTerm = ref('');

</script>

<template>
    <div class="search-container">
        <label for="search-input">País</label>
        <div class="input-container">
            <InputText class="search-input" placeholder="Escribe el país que deseas ver" :model-value="searchTerm" />
            <Button class="search-button" icon="pi pi-search" label="Buscar" />
        </div>
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
}
.search-input {
    width: 30rem;
    margin-right: 1rem;
}
</style>