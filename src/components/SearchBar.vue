<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref, onMounted, onUnmounted } from 'vue';

const searchTerm = ref('');
const buttonLabel = ref('Buscar');
const updateButtonLabel = () => {
    if (window.innerWidth < 400) {
        buttonLabel.value = '';
    } else {
        buttonLabel.value = 'Buscar';
    }
};


onMounted(() => {
    updateButtonLabel();
    window.addEventListener('resize', updateButtonLabel);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateButtonLabel);
});

</script>

<template>
    <div class="search-container">
        <label for="search-input">País</label>
        <div class="input-container">
            <InputText class="search-input" placeholder="Escribe el país que deseas ver" :model-value="searchTerm" />
            <Button class="search-button" icon="pi pi-search" :label="buttonLabel">
           </Button>
        </div>
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
}

.search-input {
    flex-grow: 1;
}

.input-container .p-button {
    flex-grow: 0;
}


</style>