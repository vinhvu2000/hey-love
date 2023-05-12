<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="transitionName" mode="out-in">
            <div :key="route.name">
                <component :is="Component"></component>
            </div>
        </transition>
    </router-view>
</template>

<script>
import Body from "./components/Body.vue";

export default {
    name: "App",
    components: {Body},
    data() {
        return {
            transitionName: undefined,
        }
    },
    watch: {
        $route(to, from) {
            this.transitionName = to.name === 'messages' ? 'slide' : 'slide-back'
        },
    },
}
</script>

<style lang="scss">
.slide-enter-active, .slide-leave-active,
.slide-back-enter-active, .slide-back-leave-active {
    transition: all 0.3s ease;
}

.slide-leave-to, .slide-back-leave-to {
    opacity: 0;
}

.slide-enter-from {
    transform: translateX(400px);
    opacity: 0;
}

.slide-back-enter-from {
    transform: translateX(-400px);
    opacity: 0;
}


</style>
