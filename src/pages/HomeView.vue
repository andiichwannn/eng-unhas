<template>
  <Navbar/>
  
  <body>
    <Hero/>
    <message/>
    <activity/>
    <Sambutan/>
    <GaleriSlider/>
    <BeritaEng/>
    <informasi/>
    <Footer/>
  </body>
</template>

<script>
import Hero from '../components/Hero.vue';
import activity from '../components/activity.vue';
import GaleriSlider from '../components/GaleriSlider.vue'
import BeritaEng from '../components/BeritaEng.vue';
import Navbar from '../components/navbar.vue';
import Sambutan from '../components/sambutan.vue';
import informasi from '../components/informasi.vue';
import Footer from '../components/Footer.vue';
import message from '../components/message.vue';

export default {
  components: { Hero, activity, GaleriSlider, BeritaEng, Navbar, Sambutan, informasi, Footer, message },
  name: 'HomeView',
}
</script>



