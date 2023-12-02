<script setup lang="ts">
import { defineProps, onMounted, ref, } from 'vue';
import { ICountryInfo } from './../models/ICountryInfo';
import Button from 'primevue/button';
import ListBox from 'primevue/listbox';

const props = defineProps({
  country: {
    type: Object as () => ICountryInfo | null,
    required: true
  }
});

const population = ref(0);


const emit = defineEmits(['update:visible']);

const emitClick = () => {
  emit('update:visible', false);
}

onMounted(() => {
  fetch(`https://restcountries.com/v3.1/alpha?codes=${props.country?.code}`)
    .then(response => response.json())
    .then(data => {
      population.value = data[0].population;
    });
})


</script>

<template>
  <div class="wrapper">
    <div class="action">
      <Button class="btn btn-primary" @click="emitClick">Close</Button>
    </div>
    <div class="content-container">
      <img class="thumbnail-img" :src="country?.thumbnailUrl" :alt="country?.name" />
      <div class="header-container">
        <img class="flag-img" :src="country?.flagUrl" :alt="country?.name" />
        <div>
          <h2 class="title">{{ country?.name }}</h2>
          <p>{{ country?.continent }}</p>
        </div>
      </div>
      <div class="country-info">
        <p><span class="title">Capital:</span> {{ country?.capital }}</p>
        <p><span class="title">Population:</span> {{ population }}</p>
        <p><span class="title">Currency:</span> {{ country?.currency }}</p>
        <p><span class="title">Languages:</span> {{ country?.languages.join(', ') }}</p>
        <p><span class="title">Regions:</span></p>
        <ListBox :options="country?.subdivisions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  background-color: var(--surface-a);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.thumbnail-img {
  height: 15rem;
  width: 20rem;
  object-fit: cover;
}

.flag-img {
  height: 3rem;
  object-fit: cover;
}

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

p,
h2 {
  margin: 0;
}

.title {
  font-weight: bold;
  color: var(--primary-color);
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.country-info {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>