<template>
    <Navbar/>
    <dharmawanita/>
    <Footer/>
</template>

<script>
import Navbar from '../components/navbar.vue';
import dharmawanita from '../components/dharmawanita.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'DharmaView',
    components: { Navbar, dharmawanita, Footer }
}
</script>