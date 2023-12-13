<template>
    <section>
        <div  class="justify-center flex mt-16">
            <div  v-for="activity in activities" :key="activity.id"  class="w-[1200px] h-[150px] justify-center items-center gap-[180px] inline-flex">
                <router-link :to="Berita(activity.urlActivity)" class="w-[150px] h-[119px] flex-col justify-center items-center gap-[11px] inline-flex">   
                    <div class="icon w-[90px] h-[90px] relative">
                        <div class="w-[90px] h-[90px] left-0 top-0 absolute bg-[#063D63] rounded-full"></div>
                        <img class="w-[46px] h-[46px] left-[20px] top-[22px] absolute" src="../assets/icon_departemen.png" />
                    </div>
                    <div class="text-center text-[#063D63] text-[15px] font-semibold ml-1">{{ activity.title }}</div>
                </router-link> 
            </div>
        </div>
        <div class="justify-center flex mt-12">
            <img src="../assets/garisAbu.png" alt="">
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'activity',
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    // Replace 'http://your-directus-url' with the actual URL of your Directus instance
    const apiUrl = 'http://0.0.0.0:8055/items/activity'; 

    axios.get(apiUrl)
    .then(response => {
      this.activities = response.data.data; // Adjust the property name based on your API response
    })
    .catch(error => {
      console.error('Error fetching data from Directus:', error);
    });
  },
  methods:{
    Berita(urlBerita){
    return `${urlBerita}`;
    },
  }
};
</script>

<style scoped>
.icon:hover{
    opacity: 75%;
    transition-duration: 300ms;
}
</style>
