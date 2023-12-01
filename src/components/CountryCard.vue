<script setup lang="ts">
import ICountryInfo from './../models/ICountryInfo';

defineProps({
    country: {
        type: Object as () => ICountryInfo,
        required: true
    }
});

</script>


<template>
    <div class="country-card">
        <div class="country-thumbnail" :style="{ backgroundImage: `url(${country.thumbnailUrl})` }">
        </div>
        <div class="country-info">
            <img class="country-flag" :src="country.flagUrl" />
            <div>
                <strong class="country-name">{{ country.name }}</strong>
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
</style>