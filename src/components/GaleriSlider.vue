<template>
  <section class="Galeri px-16" style="padding: 24px 128px;">
    <!-- <swiper :options="swiperOptions">
    <swiper-slide v-for="item in galleryItems" :key="item.id">
      <div class="bg-gray-200 p-4 rounded-lg">
        <img class="w-[380px] h-[240px] mb-4 " :src="getImageUrl(item.galeriImg)" alt="Slide Image">
      </div>
    </swiper-slide>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </swiper>  -->
  <div class="flex gap-4">
    <h1 class="text-4xl font-bold text-center" style="color: #063D63;">GALERI</h1>
</div>
<div className="carousel carousel-center p-4 space-x-3  rounded-box">
  <div v-for="item in galleryItems" :key="item.id" className="carousel-item">
    <!-- <img :src="getImageUrl(item.galeriImg)" className="rounded-box "  style="width: 50rem; height: 30rem;"/> -->
    <div class="card flex relative overflow-hidden">
            <img :src="getImageUrl(item.galeriImg)" style="width: 50rem; height: 30rem;" alt="" class="">
            <div class="title absolute bg-b w-full h-full top-full">
                <h3 class="relative px-3 text-center font-medium text-white top-40">{{ item.tittle }}</h3>
            </div>
        </div> 
  </div> 
</div>      
  </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GaleriSlider',
  data() {
    return {
      galleryItems: [],
      swiperOptions: {
        // Add swiper options here if needed
      },
    };
  },
  mounted() {
    // Replace 'http://your-directus-url' with the actual URL of your Directus instance
    const apiUrl = 'http://0.0.0.0:8055/items/galeri';

    axios.get(apiUrl)
      .then(response => {
        this.galleryItems = response.data.data;
      })
      .catch(error => {
        console.error('Error fetching gallery items from Directus:', error);
      });
  },
  methods: {
      getImageUrl(imageId) {
        // Replace 'http://your-directus-url' with the actual URL of your Directus instance
        return `http://0.0.0.0:8055/assets/${imageId}`;
      },
    },
};

</script>

<style scoped>

.title{
    transition: all .5s ease-in;
    background-image: linear-gradient(to bottom, rgba(5,5,5,0), rgba(5,5,5,1))
}
.card:hover .title {
    top: 0;
    transition: all .5s ease-out;
}

.card img {
    transform: scale(1);
    transition: all .3s ease-out;
}

.card:hover img {
    transform: scale(1.1);
    transition: all .3s ease-in;
}

</style>