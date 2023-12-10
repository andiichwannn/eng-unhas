<template>
    <Navbar/>
    <semuaBerita/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import semuaBerita from '../components/semuaBerita.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'semuaBeritaView',
    components: { Navbar, semuaBerita, Footer }
    }
</script>