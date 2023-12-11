<template>
    <Navbar/>
    <sejarahSingkat/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import sejarahSingkat from '../components/sejarahSingkat.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'sejarahSingkatView',
    components: { Navbar, sejarahSingkat, Footer }
    }
</script>