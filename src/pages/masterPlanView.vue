<template>
    <Navbar/>
    <masterPlan/>
    <Footer/>
</template>

<script>
    import Navbar from '../components/navbar.vue';
    import masterPlan from '../components/masterPlan.vue';
    import Footer from '../components/Footer.vue';

    export default {
    name: 'masterPlanView',
    components: { Navbar, masterPlan, Footer }
    }
</script>