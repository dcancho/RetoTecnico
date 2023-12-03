<script setup lang="ts">
import { defineProps, onMounted, ref, } from 'vue';
import { ICountryInfo } from './../models/ICountryInfo';
import { GetPopulationByCode } from '../services/CountryService';
import Button from 'primevue/button';
import ListBox from 'primevue/listbox';
import { useRouter } from 'vue-router';

// Data

const router = useRouter();

const props = defineProps({
  country: {
    type: Object as () => ICountryInfo | null,
    required: true
  }
});

const population = ref(0);

// Methods

const emit = defineEmits(['update:visible']);

const emitClick = () => {
  emit('update:visible', false);
  router.push('/');
}

// Lifecycle hooks

onMounted(() => {
  const countryCode = props.country?.code;
  if (countryCode) {
    GetPopulationByCode(countryCode).then((result) => {
      population.value = result;
    });
  }
});
</script>

<template>
  <div class="wrapper">
    <div class="action">
      <Button class="btn btn-primary" @click="emitClick">Close</Button>
    </div>
    <div class="content-container">
      <img class="thumbnail-img" :src="country?.thumbnailUrl" :alt="country?.name" />
      <div>
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
          <div>          <p><span class="title">Regions:</span></p>
          <ListBox :options="country?.subdivisions" /></div>
        </div>
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.thumbnail-img {
  width: 100%;
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
  margin-bottom: 1rem;
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
  overflow-y: scroll;
  gap: 1rem;
  max-height: 18rem;
}

@media(max-width: 900px) {
  .thumbnail-img {
    width: 100%;
  }
}

</style>