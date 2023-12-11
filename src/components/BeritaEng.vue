<template>
  <section class="Berita px-16 mt-8" style="padding: 24px 128px;">
        <div class="flex justify-between items-center">
            <div class="flex gap-4">
                <h1 class="text-4xl font-semibold" style="color: #063D63;">BERITA</h1>
                <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
            </div>
            <router-link to="/semuaBeritaView" class="items-center p-2">
                <div class="flex items-center mx-2 my-1 justify-between text-[#063d63] font-medium hover:text-[#063d63]/75 gap-2">
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
            <div class="w-full h-80 left-0 top-4 absolute bg-gray-50"></div>
            <div class="left-[500px] top-[40px] absolute text-base text-center text-neutral-500 font-semibold">24 Oktober 2022</div>
            <div class="w-200 h-24 left-[500px] top-[134px] absolute justify-center items-center inline-flex">
            <div class="w-100 h-24 text-justify text-neutral-500 font-normal pr-8">Acara puncak Dies Natalis ke-62 FT Unhas dihadiri oleh Rektor Unhas, Bapak Prof. Dr. Ir. Jamaluddin Jompa, M.Sc. para wakil Rektor, Dekan, Direktur, dan jajaran pimpinan Unhas. Juga hadir beberapa tamu undangan, baik dari alumni, mitra-mitra FT Unhas, dan pemerintah setempat. Dekan FT Unhas Bapak Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T, M.T. IPM. memberikan sambutan dan sekaligus meresmikan secara simbolis Café Insinyur, Aplikasi M-Berkas, Program Internasionalisasi P2MJKI...</div>
        </div>
        <div class="w-100 h-9 left-[500px] top-[80px] absolute justify-center items-center inline-flex">
            <div class="text-center text-black text-2xl font-semibold">Puncak Dies Natalis ke-62, FT-UH</div>
        </div>
            <img class="w-95 h-80 left-0 top-4 absolute" src="../assets/main_berita.png" />
            <div class="w-28 h-5 left-[500px] top-[280px] absolute text-sky-900 font-semibold">Selengkapnya</div>
        </div>

        <div class="flex justify-between">
            <div class="w-96 h-96 mt-10 relative">
                <div class="w-[380px] h-[420px] absolute bg-gray-50"></div>
                <div class="w-[320px] h-[120px] left-[16px] top-[248px] absolute justify-center items-center inline-flex">
                    <div class="w-[320px] h-[120px] text-black font-semibold">Kunjungan Kerja Fakultas Sipil dan Perencanaan Universitas Balikpapan Dalam Rangka Studi Banding Tinjauan Kurikulum Pendidikan</div>
                </div>
                <img class="w-[380px] h-[240px] left-0 top-0 absolute" src="../assets/berita1.png" />
                <div class="w-28 h-5 left-[272px] top-[386px] absolute text-sky-900 text-xs font-semibold">Selengkapnya</div>
                <div class="w-32 h-5 left-[20px] top-[388px] absolute text-neutral-500 text-xs font-semibold">24 Oktober 2022</div>
            </div>

            <div class="w-96 h-96 mt-10 relative">
                <div class="w-[380px] h-[420px] absolute bg-gray-50"></div>
                <div class="w-[320px] h-[120px] left-[16px] top-[248px] absolute justify-center items-center inline-flex">
                    <div class="w-[320px] h-[120px] text-black font-semibold">Kerjasama Penyelenggaraan PS PPI Antara Fakultas Teknik Universitas Hasanuddin dengan Fakultas Teknik Universitas Halu Oleo</div>
                </div>
                <img class="w-[380px] h-[240px] left-0 top-0 absolute" src="../assets/berita2.png" />
                <div class="w-28 h-5 left-[272px] top-[386px] absolute text-sky-900 text-xs font-semibold">Selengkapnya</div>
                <div class="w-32 h-5 left-[20px] top-[388px] absolute text-neutral-500 text-xs font-semibold">24 Oktober 2022</div>
            </div>

            <div class="w-96 h-96 mt-10 relative">
                <div class="w-[380px] h-[420px] absolute bg-gray-50"></div>
                <div class="w-[320px] h-[120px] left-[16px] top-[248px] absolute justify-center items-center inline-flex">
                    <div class="w-[320px] h-[120px] text-black font-semibold">Kunjungan Kerja Tim FT - Universitas Tanjungpura</div>
                </div>
                <img class="w-[380px] h-[240px] left-0 top-0 absolute" src="../assets/berita3.png" />
                <div class="w-28 h-5 left-[272px] top-[386px] absolute text-sky-900 text-xs font-semibold">Selengkapnya</div>
                <div class="w-32 h-5 left-[20px] top-[388px] absolute text-neutral-500 text-xs font-semibold">24 Oktober 2022</div>
            </div>  
        </div>
    </section>
</template>

<script>
export default {
    name: "BeritaEng"
}
</script>