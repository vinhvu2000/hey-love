<template>
    <Header></Header>
    <SmallBoxChat v-for="boxChat in listBoxChat" :boxChat="boxChat" @click="openBoxChat(boxChat.id)"></SmallBoxChat>
</template>

<script>
import SmallBoxChat from "./SmallBoxChat.vue";
import Header from "./Header.vue";

export default {
    name: "Dashboard",
    components: {SmallBoxChat, Header},
    data() {
        return {
            listBoxChat: [{"id": 1}],
        }
    },
    methods: {
        openBoxChat(boxChatID) {
            this.$router.push({name: 'messages', params: {id: boxChatID}})
        }
    }

}
</script>

<style lang="scss" scoped>
</style>