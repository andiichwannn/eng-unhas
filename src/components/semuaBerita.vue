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
        
        <div class="my-6">
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
            
            <div class="w-100 h-80 relative mt-6">
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

            <div class="w-100 h-80 relative mt-6">
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

            <div class="w-100 h-80 relative mt-6">
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
            
            <div class="w-100 h-80 relative mt-6">
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
        </div>

        <div>
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
    name: "semuaBerita"
}
</script>