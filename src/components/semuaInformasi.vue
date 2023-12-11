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
                placeholder="Cari informasi disini..."
                class="w-full px-4 py-2 bg-transparent focus:outline-none"
                />
                <button @click="search" class="px-4 py-2 bg-[#063d63] text-white hover:bg-[#063d63]/90 focus:outline-none">
                Cari
                </button>
            </div>
            <div class="grid grid-cols-2 gap-y-8 items-center mt-8">
        </div>
        </div>
        <div class="grid grid-cols-2 gap-y-8 items-center mt-8">
            <div v-for="item in items" :key="item.id" class="h-24 py-2 px-8 mx-4" style="background-color: #f4f4f4;">
                <h1 class="text-sm max-w-lg font-semibold">{{ item.Judul }}</h1>
                <div class="flex pt-5">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-xs" style="padding: 2px 0 0 8px;">{{ item.tanggalInformasi }}</p>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div v-for="(item, index) in informasiData" :key="index" class="mb-8">
                <img :src="getImageUrl(item.gambar)" alt="" class="rounded-xl mb-4 mx-auto" style="height: 250px" />
                <h4 class="text-center text-black font-semibold text-lg" style="font-size: 20px; padding-right: 150px; padding-left: 150px;">
                    {{ item.judul }}
                </h4>
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
  };
</script>