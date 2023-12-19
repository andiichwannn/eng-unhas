<template>
    <section class="Informasi px-16 my-16" style="padding: 24px 128px;">
        <div class="flex justify-between">
            <div class="flex gap-4">
                <h1 class="text-4xl font-semibold" style="color: #063D63;">INFORMASI</h1>
                <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
            </div>
            <router-link to="/semuaInformasiView" class="items-center p-2">
                <div class="flex items-center mx-2 my-1 justify-between text-[#063d63] hover:text-[#063d63]/75 font-medium gap-2">
                    <a href="#">
                        <p class="text-base">
                        Lihat Semua Informasi
                        </p>
                    </a>
                    <div class="">></div>
                </div>
                <div class="w-full bg-[#063d63] h-0.5"></div>
            </router-link>
        </div>
        <div class="grid grid-cols-2 flex gap-8 items-center mt-8">
            <div v-for="item in items" :key="item.id" class="h-24 py-3 px-8 flex flex-col justify-between rounded-lg" style="background-color: #f4f4f4;">
                <h1 class="text-sm max-w-lg font-semibold">{{ item.Judul }}</h1>
                <div class="flex pt-3">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-xs" style="padding: 2px 0 0 8px;">{{ item.tanggalInformasi }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
 import axios from 'axios';
  export default {
      name: "informasi",
    data() {
      return {
        items: [],
        firtsData: [],
      };
  
    },
  
    mounted() {
      const apiUrl = 'http://localhost:8055/items/Informasi'; 
  
      axios.get(apiUrl)
      .then(response => {
        this.items = response.data.data; 
        this.firtsData = response.data.data[0]
      })
      .catch(error => {
        console.error('Error fetching data from Directus:', error);
      });
    },
  };
</script>
