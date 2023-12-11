<template>
    <Navbar/>
    <semuaInformasi/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import semuaInformasi from '../components/semuaInformasi.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'semuaInformasiView',
    components: { Navbar, semuaInformasi, Footer }
    }
</script>