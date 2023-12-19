<template>
  <section class="Galeri px-16" style="padding: 24px 128px;">
    <div class="flex gap-4">
        <h1 class="text-4xl font-bold text-center" style="color: #063D63;">GALERI</h1>
        <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
    </div>
    <div className="carousel carousel-center p-4 space-x-3 rounded-box">
        <div v-for="item in galleryItems" :key="item.id" className="carousel-item">
            <div class="card flex relative overflow-hidden">
                <img :src="getImageUrl(item.galeriImg)" style="width: 30rem; height: 18rem;" alt="" class="">
                <div class="title absolute bg-b w-full h-full top-full">
                    <h3 class="relative px-3 text-center font-medium text-white top-52">{{ item.tittle }}</h3>
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
      },
    };
  },
  mounted() {
    const apiUrl = 'http://localhost:8055/items/galeri';

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
        return `http://localhost:8055/assets/${imageId}`;
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