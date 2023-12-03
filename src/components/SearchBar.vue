<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';
import ContinentFilter from './ContinentFilter.vue';

// Data

const op = ref();
const searchTerm = ref('');
const buttonLabel = ref('Buscar');
const selectedContinent = ref('');

// Methods

const toggle = (event: Event) => {
    console.log('Clicked toggle')
    op.value.toggle(event);
};

const updateButtonLabel = () => {
    if (window.innerWidth < 450) {
        buttonLabel.value = '';
    } else {
        buttonLabel.value = 'Buscar';
    }
};

const emit = defineEmits(['update:searchTerm', 'update:selectedContinent']);

const handleContinentSelection = (continentName: string) => {
    selectedContinent.value = continentName;
    op.value.hide();
};

// Lifecycle hooks

onMounted(() => {
    updateButtonLabel();
    window.addEventListener('resize', updateButtonLabel);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateButtonLabel);
});

watchEffect(() => {
    emit('update:searchTerm', searchTerm.value);
    emit('update:selectedContinent', selectedContinent.value);
});

</script>

<template>
    <div class="search-container">
        <label for="search-input">País</label>
        <div class="input-container">
            <InputText class="search-input" 
            placeholder="Escribe el país que deseas ver" 
            v-model="searchTerm" 
            @click="toggle"/>
            <OverlayPanel ref="op">
                <ContinentFilter @update:selectedContinent="handleContinentSelection"></ContinentFilter>
            </OverlayPanel>
            <Button class="search-button" icon="pi pi-search" :label="buttonLabel">
            </Button>
        </div>
        <small v-if="selectedContinent !== null && selectedContinent !== ''">
            Selected continent: {{ selectedContinent }}
        </small>
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
    flex-wrap: wrap;
}

.search-input {
    flex-grow: 1;
}

.input-container .p-button {
    flex-grow: 0;
}

.continent-select {
    width: 9rem;
}
</style>