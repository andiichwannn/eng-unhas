<template>
    <Navbar/>
    <akreditasi/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import akreditasi from '../components/akreditasi.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'akreditasiView',
    components: { Navbar, akreditasi, Footer }
    }
</script>