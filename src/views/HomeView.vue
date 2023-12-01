<script setup lang="ts">
import SearchBar from './../components/SearchBar.vue';
import ICountryInfo from './../types';
import CountryCard from './../components/CountryCard.vue';
import CountrySidebar from './../components/CountrySidebar.vue';
import { ref } from 'vue';

const selectedCountry = ref<ICountryInfo | null>(null);

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
    }
];


</script>

<template>
    <div class="view-wrapper">
        <SearchBar />
        <div class="countries-container">
            <div class="countries-grid">
                <CountryCard class="country-card" 
                v-for="country in countries" 
                :country="country" 
                @click="selectedCountry = country"/>
            </div>
        </div>
        <CountrySidebar v-if="selectedCountry" :visible="selectedCountry" :country="selectedCountry" />
    </div>
</template>

<style scoped>
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
    wrap: wrap;
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