<template>
  <Header></Header>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
</template>

<script>
import SmallBoxChat from "./SmallBoxChat.vue";
import Header from "./Header.vue";

export default {
  name: "Dashboard",
  components: {SmallBoxChat,Header}

}
</script>

<style lang="scss" scoped>
</style>