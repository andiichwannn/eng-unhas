<template>
    <Navbar/>
    <kalenderAkademik/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import kalenderAkademik from '../components/kalenderAkademik.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'kalenderAkademikView',
    components: { Navbar, kalenderAkademik, Footer }
    }
</script>