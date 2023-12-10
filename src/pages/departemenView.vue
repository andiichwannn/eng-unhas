<template>
    <Navbar/>
    <departemen/>
    <footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import departemen from '../components/departemen.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'departemenView',
    components: { Navbar, departemen, Footer }
    }
</script>