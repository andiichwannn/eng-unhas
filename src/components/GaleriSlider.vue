<template>
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="../static/galeri/1.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="../static/galeri/1.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="../static/galeri/1.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="../static/galeri/1.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'SliderTwo',
    data() {
      return {
        currentSlide: 1,
      }
    },
    methods: {
      prev() {
        if (this.currentSlide > 1) {
          this.currentSlide--
        } else {
          this.currentSlide = 5
        }
      },
      next() {
        if (this.currentSlide === 5) {
          this.currentSlide = 1
        } else {
          this.currentSlide++
        }
      },
    },
  }
  
  </script>