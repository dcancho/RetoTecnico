<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();

const activeState = ref([true, false, false])
const isSmallScreen = ref(window.innerWidth < 600);

const updateIsSmallScreen = () => {
    isSmallScreen.value = window.innerWidth < 600;
}

onMounted(() => {
  window.addEventListener('resize', updateIsSmallScreen);
  updateIsSmallScreen();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsSmallScreen);
});

const items = computed(() => [
  { label: isSmallScreen.value ? '' : 'Home', icon: 'pi pi-fw pi-home', path: '/', active: activeState.value[0] },
  { label: isSmallScreen.value ? '' : 'Settings', icon: 'pi pi-fw pi-cog', path: '/settings', active: activeState.value[1] },
  { label: isSmallScreen.value ? '' : 'About', icon: 'pi pi-fw pi-book', path: '/about', active: activeState.value[2] }
]);

const navigate = (path: string, index: number) => {
    router.push(path);
    activeState.value = activeState.value.map((_, i) => i === index);
}
</script>

<template>
    <div class="menu-container">
        <div class="brand-container">
            <img class="menu-logo" alt="Vue logo" src="./../assets/vue.svg" />
        </div>
        <div class="menu">
            <Button v-for="(item, index) in items" :key="index"
                    @click="navigate(item.path, index)" 
                    class="menu-button" 
                    :class="{ active: item.active }">
                <i :class="item.icon"></i>
                {{ item.label }}
            </Button>
        </div>
    </div>
</template>

<style scoped>
.menu-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    background-color: var(--surface-d);
    box-sizing: border-box;
}
.brand-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
}
.menu-logo {
    width: 5rem;
}
.menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.menu-button {
    width: 100%;
    text-align: left;
}

.menu-button.active {
    background-color: #007bff;
    color: white;
}

@media (max-width: 600px) {
    .menu-container {
        flex-direction: row;
        padding: 0.5rem;
    }
    .brand-container {
        margin: 0;
    }
    .menu {
        flex-direction: row;
        gap: 0.5rem;
        justify-content: flex-end;
    }
    .menu-logo {
        width: 3rem;
    }
    .menu-button {
        width: auto;
    }
}
</style>