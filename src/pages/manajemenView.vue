<template>
    <Navbar/>
    <manajemen/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import manajemen from '../components/manajemen.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'manajemenView',
    components: { Navbar, manajemen, Footer }
    }
</script>