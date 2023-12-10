<template>
    <Navbar/>
    <departemen/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import departemen from '../components/departemen.vue';
    import Footer from '../components/Footer.vue';

    export default {
    components: { Navbar, departemen, Footer },
    name: 'departemenView',
    }
</script>