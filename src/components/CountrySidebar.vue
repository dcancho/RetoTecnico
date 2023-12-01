<script setup lang="ts">
import ICountryInfo from './../models/ICountryInfo';
import Sidebar from 'primevue/sidebar';

defineProps({
    country: {
        type: Object as () => ICountryInfo,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    }
});

</script>

<template>
    <Sidebar :visible="visible">
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
    </Sidebar>


</template>