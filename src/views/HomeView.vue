<template>
    <div class="view-wrapper">
        <SearchBar />
        <div class="countries-container">
            <div class="countries-grid">
                <CountryCard class="country-card" v-for="country in countries" :country="country"
                    @click="selectedCountry = country; visible = true;" />
            </div>
            <CountrySidebar class="country-sidebar" v-if="selectedCountry" :country="selectedCountry"
                @update:visible="handleVisibleUpdate" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CountryCard from './../components/CountryCard.vue';
import CountrySidebar from './../components/CountrySidebar.vue';
import SearchBar from './../components/SearchBar.vue';
import ICountryInfo from './../models/ICountryInfo';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';



const countries = ref<ICountryInfo[]>([]);

onMounted(async () => {
    const client = new ApolloClient({
        uri: 'https://countries.trevorblades.com',
        cache: new InMemoryCache()
    });

    const query = gql`
    query {
            countries {
                name
                capital
                native
                currency
                languages {
                  name
                }
                subdivisions{
                  name
                }
            }
        }
    `

    const {data} = await client.query({query});
    countries.value = data.countries.map(country => ({
        ...country,
        languages: country.languages.map(language => language.name),
        regions: country.subdivisions.map(subdivision => subdivision.name)
    }));
})



const visible = ref<boolean>(false);
const selectedCountry = ref<ICountryInfo | null>(null);
/*
const countries: ICountryInfo[] = [
    {
        flagUrl: "https://flagcdn.com/w320/co.png",
        thumbnailUrl: "https://th.bing.com/th/id/OIP.th6rmQr7LVkqyLr8wr1oPgHaFC?w=730&h=496&rs=1&pid=ImgDetMain",
        name: "Colombia",
        continent: "South America",
        capital: "Bogotá",
        languages: ["Spanish"],
        population: 48759958,
        currency: "COP",
        regions: ["Cauca", "Cundinamarca", "Valle del Cauca"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/es.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Spain",
        continent: "Europe",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    },
    {
        flagUrl: "https://flagcdn.com/w320/pe.png",
        thumbnailUrl: "https://th.bing.com/th/id/R.8d8921f7453ca8df8b287e06794dd4ee?rik=iw2x%2bN49i3MlEg&riu=http%3a%2f%2fvivedetusrentas.com.pe%2fwp-content%2fuploads%2f2020%2f03%2fPanor%c3%a1mica-costa-verde.png&ehk=iOLXjOiA8uyOCdNEAr19pEZmYnDBmaxC661UWqWnIEY%3d&risl=&pid=ImgRaw&r=0",
        name: "Peru",
        continent: "South America",
        capital: "Lima",
        languages: ["Spanish"],
        population: 48759958,
        currency: "PEN",
        regions: ["Ancash", "Cajamarca", "Lima"],
    }];

    */

const handleVisibleUpdate = (value: boolean) => {
    visible.value = value;
    selectedCountry.value = null;
}

</script>

<style scoped>
.country-sidebar {
    height: min-content;
}

.view-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 3rem;
    overflow-y: auto;
}

.countries-container {
    display: flex;
    flex-direction: row;
}

.countries-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.country-card {
    width: 20rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}
</style>