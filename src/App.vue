<script setup>
// import Navbar from './components/navbar.vue';
import DharmaView from './pages/DharmaView.vue';
import HomeView from './pages/HomeView.vue';
</script>

<template>
<div id="app">
    <router-link to="/"></router-link>
    <router-link to="/dharma"></router-link>
  <router-view></router-view>
</div>
<!-- <Navbar></Navbar> -->
</template>
