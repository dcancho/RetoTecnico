<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

const searchTerm = ref('');
const buttonLabel = ref('Buscar');
const selectedContinent = ref('');
const continents = ref([
    'Africa',
    'Antarctica',
    'Asia',
    'Europe',
    'North America',
    'Oceania',
    'South America'
]);

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
            <Dropdown class="continent-select" v-model="selectedContinent" :options="continents" placeholder="Continent"></Dropdown>
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

.continent-select {
    width: 8rem;
}
</style>