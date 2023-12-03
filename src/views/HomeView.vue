<template>
    <div class="view-wrapper">
        <SearchBar class="search-container"
        @update:search-term="searchTerm = $event" 
        @update:selected-continent="selectedContinent = $event"/>
        <div class="countries-container">
            <div class="countries-grid">
                <CountryCard class="country-card" v-for="country in filteredCountries" :country="country"
                    @click="selectCountry(country)" />
            </div>
            <CountrySidebar class="country-sidebar" v-if="selectedCountry" :country="selectedCountry"
                @update:visible="handleVisibleUpdate" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import CountryCard from './../components/CountryCard.vue';
import CountrySidebar from './../components/CountrySidebar.vue';
import SearchBar from './../components/SearchBar.vue';
import {ICountryInfo} from './../models/ICountryInfo';
import { useRoute, useRouter } from 'vue-router';
import { GetICountry } from './../services/CountryService';


const countries = ref<ICountryInfo[]>([]);
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    countries.value = await GetICountry();
})

const selectCountry = (country: ICountryInfo) => {
    selectedCountry.value = country;
    router.push({ name: 'Country', params: { country: country.name } });
};

watch(() => route.params.country, (newCountryName) => {
    selectedCountry.value = countries.value.find(country => country.name === newCountryName) || null;
});

const visible = ref<boolean>(false);
const selectedCountry = ref<ICountryInfo | null>(null);
const selectedContinent = ref<string | null>('');
const searchTerm = ref<string>('');

const filteredCountries = computed(() => {
    return countries.value.filter((country) => {
        const searchTermMatch = country.name.toLowerCase().includes(searchTerm.value.toLowerCase());
        const continentMatch = selectedContinent.value === null || selectedContinent.value === '' || country.continent === selectedContinent.value;
        return searchTermMatch && continentMatch;
    });
});

const handleVisibleUpdate = (value: boolean) => {
    visible.value = value;
    selectedCountry.value = null;
}

</script>

<style scoped>
.country-sidebar {
    height: min-content;
    min-width: 20rem;
}

.view-wrapper {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
    box-sizing: border-box;
}

.countries-container {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    box-sizing: border-box;
    flex-grow: 1;
}

.countries-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    overflow-y: scroll;
    box-sizing: border-box;
}

.country-card {
    width: 20rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

.search-container {
    width: 100%;
    max-width: 50rem;
    flex-grow: 0;
}

@media (max-width: 900px) {
    .countries-container {
        flex-direction: column-reverse;
        justify-content: center;
    }

    .country-sidebar {
        flex-grow: 0;
        min-height: 25rem;
        overflow-y: scroll;
        width: 20rem;
        align-self: center;
    }

    .countries-grid {
        flex-grow: 1;
    }
}
</style>