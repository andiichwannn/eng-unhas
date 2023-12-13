<template>
  <section class="Galeri px-16" style="padding: 24px 128px;">
    <div class="flex gap-4">
        <h1 class="text-4xl font-semibold" style="color: #063D63;">GALERI</h1>
        <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
    </div>

    <div class="container flex w-auto justify-between mx-0 my-auto mt-6">
        <div class="card flex relative overflow-hidden">
            <img src="../assets/Galeri1.png" alt="" class="h-full">
            <div class="title absolute bg-b w-full h-full top-full">
                <h3 class="relative px-3 text-center font-medium text-white top-40">Pengabdian Masyarakat</h3>
            </div>
        </div> 
        <div class="card flex relative overflow-hidden">
            <img src="../assets/Galeri2.png" alt="" class="h-full">
            <div class="title absolute bg-b w-full h-full top-full">
                <h3 class="relative px-3 text-center font-medium text-white top-40">Rapat Kerja Fakultas Teknik</h3>
            </div>
        </div> 
        <div class="card flex relative overflow-hidden">
            <img src="../assets/Galeri3.png" alt="" class="h-full">
            <div class="title absolute bg-b w-full h-full top-full">
                <h3 class="relative px-3 text-center font-medium text-white top-40">Pelantikan dan Pengabdian Sumpah Jabatan Pejabat</h3>
            </div>
        </div> 
    </div>                
  </section>
</template>

<script>
export default{
    name: 'GaleriSlider'
}
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