<template>
    <section style="margin-top: 200px; margin-bottom: 64px; padding: 0 124px;">
        <div class="flex items-center justify-between">
            <div class="flex gap-4">
                <h1 class="text-4xl font-semibold" style="color: #063D63;">INFORMASI</h1>
                <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
            </div>
            <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari Informasi disini..."
                class="w-full px-4 py-2 bg-transparent focus:outline-none"
                />
                <button @click="search" class="px-4 py-2 bg-[#063d63] text-white hover:bg-[#063d63]/90 focus:outline-none">
                Cari
                </button>
            </div>
        </div>

        <div class="container mx-auto mt-8">
            <div class="flex flex-wrap justify-between gap-8">
                <div v-for="item in items" :key="item.id"  class="card">
                    <div class="w-[360px]">
                        <img :src="getImageId(item.imgInformasi)" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">{{ item.Judul }}</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">{{ item.tanggalInformasi }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
 import axios from 'axios';
  export default {
      name: "semuaInformasi",
    data() {
      return {
        items: [],
        firtsData: [],
      };
  
    },
  
    mounted() {
      // Replace 'http://your-directus-url' with the actual URL of your Directus instance
      const apiUrl = 'http://0.0.0.0:8055/items/Informasi'; 
  
      axios.get(apiUrl)
      .then(response => {
        this.items = response.data.data; // Adjust the property name based on your API response
        this.firtsData = response.data.data[0]
      })
      .catch(error => {
        console.error('Error fetching data from Directus:', error);
      });
    },
    methods:{
        getImageId(imageId) {
        // Replace 'http://your-directus-url' with the actual URL of your Directus instance
        return `http://0.0.0.0:8055/assets/${imageId}`;
    },
    }
  };
</script>