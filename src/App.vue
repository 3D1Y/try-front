<template>
  <div class="outer">
    <Header />
    <router-view />
    <Footer v-show="!this.$route.meta.hiddenFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>