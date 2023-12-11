<template>
    <Navbar/>
    <visiMisi/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import visiMisi from '../components/visiMisi.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'visiMisiView',
    components: { Navbar, visiMisi, Footer }
    }
</script>