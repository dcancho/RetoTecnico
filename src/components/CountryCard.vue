<script setup lang="ts">
import { ref, onMounted, toRef } from 'vue';
import { ICountryInfo } from './../models/ICountryInfo';
import { GetFlagUrlPictureByCode, GetThumbnailUrlByCountryAndCapitalName } from '../services/CountryService';

const props = defineProps({
    country: {
        type: Object as () => ICountryInfo,
        required: true
    }
});

const isVisible = ref(false);
const card = ref(null);
const localCountry = toRef(props, 'country');

onMounted(() => {
    const observer = new IntersectionObserver(
        async ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.disconnect();
                const thumbnailResponse = await GetThumbnailUrlByCountryAndCapitalName(localCountry.value.name, localCountry.value.capital);
                const flagResponse = await GetFlagUrlPictureByCode(localCountry.value.code);
                if (thumbnailResponse || flagResponse) {
                    localCountry.value.areImagesLoaded = true;
                }
                localCountry.value.flagUrl = flagResponse;
                localCountry.value.thumbnailUrl = thumbnailResponse;
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
    );
    if (card.value) {
        observer.observe(card.value);
    }
});



</script>


<template>
    <div class="country-card" ref="card">
        <div v-if="country.areImagesLoaded" class="country-thumbnail"
            :style="{ backgroundImage: `url(${localCountry.thumbnailUrl})` }">
        </div>
        <div v-else class="country-thumbnail not-loaded">
            <img class="loading-icon" src="./../assets/loading-icon.jpg" />
        </div>
        <div class="country-info">
            <img v-if="country.areImagesLoaded" class="country-flag" :src="localCountry.flagUrl" />
            <img v-else class="country-flag not-loaded loading-icon" src="./../assets/loading-icon.jpg" />
            <div>
                <p class="country-name title">{{ country.name }}</p>
                <p class="country-capital">{{ country.continent }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.country-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    background-color: white;
    max-height: 16rem;
}

.loading-icon {
    width: 25%;
    object-fit: cover;
    animation: rotation 3s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.not-loaded {
    display: flex;
    justify-content: center;
    align-items: center;
}

.country-flag.not-loaded {
    width: 2rem;
    height: 2rem;
}

.country-thumbnail {
    width: 100%;
    height: 150px;
    background-size: cover;
    background-position: center;
}

.country-flag {
    height: 3rem;
    object-fit: cover;
}

.country-info {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

p {
    margin: 0;

}

.title {
    font-weight: bold;
    color: var(--primary-color);
}
</style>