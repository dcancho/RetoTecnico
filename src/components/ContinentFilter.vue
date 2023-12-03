<template>
    <div class="wrapper">
        <div class="header">
            <p>Filtrar por continentes</p>
            <p class="primary-color"
            @click="emitSelect('')"><a>Limpiar</a></p>
        </div>
        <div class="continent-display">
            <div class="continent" 
            v-for="continent in continents" 
            :key="continent.name"
            @click="emitSelect(continent.name)">
                <img :src="continent.imagePath" :alt="continent.name">
                <p>{{ continent.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['update:selectedContinent']);
const selectedContinent = ref('');

const emitSelect = (continentName: string) => {
    selectedContinent.value = continentName;
    emit('update:selectedContinent', selectedContinent.value);
}

const continents = [
    {
        name: 'Africa',
        imagePath: './africa.png'
    },
    {
        name: 'Antarctica',
        imagePath: './antarctica.png'
    },
    {
        name: 'Asia',
        imagePath: './asia.png'
    },
    {
        name: 'Europe',
        imagePath: './europe.png'
    },
    {
        name: 'North America',
        imagePath: './north_america.png'
    },
    {
        name: 'Oceania',
        imagePath: './oceania.png'
    },
    {
        name: 'South America',
        imagePath: './south_america.png'
    }
]

</script>

<style scoped>
.continent {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
}

.continent:hover {
    cursor: pointer;
    background-color: var(--surface-b);
    border-radius: 0.5rem;
}

.continent-display {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 20rem;
    max-height: 20rem;
    overflow-y: scroll;
}

.header {
    display: flex;
    justify-content: space-between;
}

.wrapper {
    min-width: 20rem;
}

.primary-color {
    color: var(--primary-color);
    cursor: pointer;
}

.primary-color:hover {
    color: var(--primary-color-hover);
}

img {
    width: 5rem;
    height: 5rem;
}
</style>