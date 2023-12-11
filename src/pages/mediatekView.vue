<template>
    <Navbar/>
    <mediatek/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import mediatek from '../components/mediatek.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'mediatekView',
    components: { Navbar, mediatek, Footer }
    }
</script>