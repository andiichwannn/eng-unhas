<template>
  <section class="Galeri px-16" style="padding: 24px 128px;">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="item in galleryItems" :key="item.id">
      <div class="bg-gray-200 p-4 rounded-lg">
        <img class="w-[380px] h-[240px] mb-4 " :src="getImageUrl(item.galeriImg)" alt="Slide Image">
        <h3 class="text-xl font-semibold">{{ item.tittle }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </swiper>           
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