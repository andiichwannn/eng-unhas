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
        <div class="grid grid-cols-2 gap-y-8 items-center mt-8">
            <div class="h-24 py-2 px-8 mx-4" style="background-color: #f4f4f4;">
                <h1 class="text-sm max-w-lg font-semibold">THE 3RD EPI INTERNATIONAL CONFERENCE ON SCIENCE AND ENGINEERING 2019</h1>
                <div class="flex pt-5">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-xs" style="padding: 2px 0 0 8px;">23 September 2019</p>
                </div>
            </div>
            <div class="h-24 py-4 px-8 mx-4" style="background-color: #f4f4f4;">
                <h1 class="text-sm max-w-lg font-semibold">WORKSHOP & SIMPOSIUM NASIONAL GEOMEKANIKA 5 2019</h1>
                <div class="flex pt-5">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-xs" style="padding: 2px 0 0 8px;">06 Agustus 2019</p>
                </div>
            </div>
            <div class="h-24 py-4 px-8 mx-4" style="background-color: #f4f4f4;"> 
                <h1 class="text-sm max-w-lg font-semibold">Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas</h1>
                <div class="flex pt-5">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-xs" style="padding: 2px 0 0 8px;">09 Juli 2019</p>
                </div>
            </div>
            <div class="h-24 py-4 px-8 mx-4" style="background-color: #f4f4f4;">
                <h1 class="text-sm max-w-lg font-semibold">International Guest Lecture on Journal Article</h1>
                <div class="flex pt-5">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-xs" style="padding: 2px 0 0 8px;">25 Juni 2019</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'informasi'
}
</script>
