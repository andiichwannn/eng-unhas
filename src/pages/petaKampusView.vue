<template>
    <Navbar/>
    <petaKampus/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import petaKampus from '../components/petaKampus.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'petaKampusView',
    components: { Navbar, petaKampus, Footer }
    }
</script>