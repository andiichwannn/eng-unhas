<template>
    <section style="margin-top: 200px; margin-bottom: 64px; padding: 0 124px;">
        <div class="flex items-center justify-between">
            <div class="flex gap-4">
                <h1 class="text-4xl font-semibold" style="color: #063D63;">BERITA</h1>
                <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
            </div>
            <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari berita disini..."
                class="w-full px-4 py-2 bg-transparent focus:outline-none"
                />
                <button @click="search" class="px-4 py-2 bg-[#063d63] text-white hover:bg-[#063d63]/90 focus:outline-none">
                Cari
                </button>
            </div>
        </div>
        
        <div v-for="item in items" :key="item.id" class="my-6">
            <div class="w-100 h-80 relative">
                <div class="w-full h-full left-0 top-4 absolute bg-gray-50"></div>
                <div class="left-[500px] top-[50px] absolute  text-neutral-500 font-semibold">24 Oktober 2022</div>
                <div class="w-200 h-24 left-[500px] top-[140px] absolute justify-center items-center inline-flex">
                <div class="w-100 h-24 text-neutral-500 font-normal pr-8 mt-12 text-justify" style="margin-top: 70px;">{{ item.IsiBerita}}</div>
            </div>
            <div class="w-100 h-9 left-[500px] top-[80px] absolute">
                <div class="pr-8 text-black text-2xl font-semibold text-justify">{{ item.JudulBerita }}</div>
            </div>
                <img class="mt-12 ml-4 w-[380px] h-[240px] left-0 top-0 absolute" :src="getImageUrl(item.imgBerita)" />
                <a :href="getIdBerita(item.id)" class="w-28 h-5 left-[500px] top-[260px] absolute text-sky-900 font-semibold">Selengkapnya</a>
            </div>
            
        </div>

        <div class="flex items-center justify-center mt-16 space-x-3">
            <button class="px-3 py-1 bg-[#063d63] rounded-md border-2 border-[#063d63] text-white">1</button>
            <button class="px-3 py-1 bg-transparent hover:bg-blue-100 rounded-md border-2 border-gray-500">2</button>
            <button class="px-3 py-1 bg-transparent hover:bg-blue-100 rounded-md border-2 border-gray-500">3</button>
            <button class="px-3 py-1 bg-transparent hover:bg-blue-100 rounded-md border-2 border-gray-500">4</button>
            <button class="px-3 py-1 bg-transparent hover:bg-blue-100 rounded-md border-2 border-gray-500">...</button>
            <button class="px-3 py-1 bg-transparent hover:bg-blue-100 rounded-md border-2 border-gray-500">9</button>
        </div>
    </section>
</template>

<script>

import axios from 'axios';

export default {
    name: "semuaBerita",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    const apiUrl = 'http://localhost:8055/items/AllBerita'; 

    axios.get(apiUrl)
    .then(response => {
      this.items = response.data.data; 
    })
    .catch(error => {
      console.error('Error fetching data from Directus:', error);
    });
  },
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:8055/assets/${imageId}`;
    },
    getIdBerita(idBerita){
        return `http://localhost:5173/beritaDetails/${idBerita}`;
    },

  },
};
</script>