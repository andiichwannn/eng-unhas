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
        </div>

        <div class="container mx-auto mt-8">
            <div class="flex flex-wrap justify-between gap-8">
                <div class="card">
                    <div class="w-[360px]">
                        <img src="../assets/informasi1.png" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">THE 3RD EPI INTERNATIONAL CONFERENCE ON SCIENCE AND ENGINEERING 2019</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">23 September 2019</p>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="w-[360px]">
                        <img src="../assets/informasi2.png" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">WORKSHOP & SIMPOSIUM NASIONAL GEOMEKANIKA 5 2019</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">23 September 2019</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="w-[360px]">
                        <img src="../assets/informasi3.png" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">09 Juli 2019</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="w-[360px]">
                        <img src="../assets/informasi4.png" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">International Guest Lecture on Journal Article</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">25 Juni 2019</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="w-[360px]">
                        <img src="../assets/informasi5.png" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">ICCEE 2019</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">18 Januari 2019</p>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="w-[360px]">
                        <img src="../assets/informasi1.png" alt="" class="w-full h-[480px] rounded-t-2xl">
                    </div>
                    <div class="px-4 py-3 w-[360px] rounded-b-2xl" style="background-color: #f4f4f4;">
                        <p class="text-sm font-semibold">The 3th EPI EICSE 2019</p>
                        <div class="flex pt-5">
                            <img src="../assets/kalender.png" alt="">
                            <p class="text-xs" style="padding: 2px 0 0 8px;">18 Januari 2019</p>
                        </div>
                    </div>
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
        </div>
    </section>
</template>

<script>
export default {
    name: "semuaInformasi"
}
</script>