<template>
    <section class="Berita px-16 mt-8" style="padding: 24px 128px;">
          <div class="flex justify-between">
              <div class="flex gap-4">
                  <h1 class="text-4xl font-semibold" style="color: #063D63;">BERITA</h1>
                  <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
              </div>
              <router-link to="/semuaBeritaView" class="items-center p-2">
                <div class="flex items-center mx-2 my-1 justify-between text-[#063d63] hover:text-[#063d63]/75 font-medium gap-2">
                    <a href="#">
                        <p class="text-base">
                        Lihat Semua Berita
                        </p>
                    </a>
                    <div class="">></div>
                </div>
                <div class="w-full bg-[#063d63] h-0.5"></div>
            </router-link>
          </div>
          
          <div class="w-100 h-80 relative">
              <div class="w-full h-80 left-0 top-4 absolute bg-gray-50 rounded-lg"></div>
              <div class="left-[500px] top-[40px] absolute text-base text-center text-neutral-500 font-semibold">24 Oktober 2022</div>
              <div class="w-200 h-24 left-[500px] top-[134px] absolute justify-center items-center inline-flex">
              <div class="w-100 h-24 text-justify text-neutral-500 font-normal pr-8" >{{ firtsData.isiBerita }}</div>
          </div>
          <div class="w-100 h-9 left-[500px] top-[80px] absolute justify-center items-center inline-flex">
              <div class="text-center text-black text-2xl font-semibold">{{ firtsData.Judul }}</div>
          </div>
              <img class="w-95 h-80 left-0 top-4 absolute rounded-l-lg" src="http://localhost:8055/assets/25a7941c-4543-4391-9291-98ac10adc6e2" />
              <a href="" class="w-28 h-5 left-[500px] top-[280px] absolute text-sky-900 font-semibold">Selengkapnya</a>
          </div>
  
          <div class="flex justify-between">
              <div v-for="item in items" :key="item.id"   class="w-96 h-96 mt-10 relative">
                  <div class="w-[380px] h-[420px] absolute bg-gray-50 rounded-lg"></div>
                  <div class="w-[320px] h-[120px] left-[16px] top-[248px] absolute justify-center items-center inline-flex">
                      <div class="w-[320px] h-[120px] text-black font-semibold">{{ item.Judul }}</div>
                  </div>
                  <img class="w-[380px] h-[240px] left-0 top-0 absolute rounded-t-lg" :src="getImageUrl(item.img)" :alt="item.Judul" />
                  <a class="w-28 h-5 left-[272px] top-[386px] absolute text-sky-900 text-xs font-semibold" href="">Selengkapnya</a>
                  <div class="w-32 h-5 left-[20px] top-[388px] absolute text-neutral-500 text-xs font-semibold">24 Oktober 2022</div>
              </div> 
          </div>
      </section>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      name: "BeritaEng",
    data() {
      return {
        items: [],
        firtsData: [],
      };
  
    },
  
    mounted() {
      // Replace 'http://your-directus-url' with the actual URL of your Directus instance
      const apiUrl = 'http://localhost:8055/items/beritaWeb'; 
  
      axios.get(apiUrl)
      .then(response => {
        this.items = response.data.data; // Adjust the property name based on your API response
        this.firtsData = response.data.data[0]
      })
      .catch(error => {
        console.error('Error fetching data from Directus:', error);
      });
    },
    methods: {
      getImageUrl(imageId) {
        // Replace 'http://your-directus-url' with the actual URL of your Directus instance
        return `http://localhost:8055/assets/${imageId}`;
      },
    },
  };
  
  </script>
  