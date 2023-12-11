<template>
    <Navbar/>
    <strukturOrganisasi/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import strukturOrganisasi from '../components/strukturOrganisasi.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'strukturOrganisasiView',
    components: { Navbar, strukturOrganisasi, Footer }
    }
</script>