<template>
    <Navbar/>
    <section class="Berita px-16 mt-40" style="padding: 24px 128px;">
        <div class="flex justify-between gap-16">
            <div>
                <h1 class="text-3xl text-black font-semibold">{{ items.JudulBerita }}</h1>
                <div class="flex gap-2 my-3">
                    <img src="../assets/kalender.png" alt="">
                    <p class="text-sm">24 Oktober 2022</p>
                </div>
                <div >
                    <img :src="getImageUrl(items.imgBerita)" alt="" class="w-full">
                    <div class="text-black text-base text-justify mt-4 font-medium">
                        <div>Acara puncak Dies Natalis ke-62 FT Unhas dihadiri oleh Rektor Unhas, Bapak Prof. Dr. Ir. Jamaluddin Jompa, M.Sc. para wakil Rektor, Dekan, Direktur, dan jajaran pimpinan Unhas. Juga hadir beberapa tamu undangan, baik dari alumni, mitra-mitra FT Unhas, dan pemerintah setempat. </div>
                        <div class="pt-4">Café insinyur merupakan salah satu program kewirausahaan fakultas Teknik Unhas yang terletak yang didirikan oleh Koperasi Karyawan Fakultas Teknik Unhas. Aplikasi M-Berkas adalah sebuah langkah awal proses transformasi digital Fakultas Teknik Unhas dalam mewujudkan Smart Campus. M-Berkas 1.0 merupakan aplikasi manajemen persuratan akademik berbasis digital sebagai upaya pengurangan penggunaan kertas (paperless). P2MJKI adalah Program Peningkatan dan Pengembangan Model Jejaring Kemitraan Internasional sivitas akademika Fakultas Teknik dalam mewujudkan target capaian World Class University Unhas. Techomart merupakan salah satu unit usaha yang didirikan oleh Koperasi Karyawan Fakultas Teknik Unhas. Gedung sport center saat ini akan memasuki tahap finishing dan akan difungsikan pada awal tahun 2023.</div>
                        <div class="pt-4">Dekan FT Unhas Bapak Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T, M.T. IPM. memberikan sambutan dan sekaligus meresmikan secara simbolis Café Insinyur, Aplikasi M-Berkas, Program Internasionalisasi P2MJKI, Workhsop dan Technomart, kick off kelanjutan pembangunan Gedung Sport Center Fakultas Teknik serta Penyerahan Pesawat Hibah KLHK dari Rektor kepada Dekan Fakultas Teknik Universitas Hasanuddin.</div>
                        <div class="pt-4">Dalam rangkaian Des Natalis ke-62 FT Unhas juga dilakukan beberapa rangkaian acara lainnya, seperti jalan santai sejauh 5 km, penyerahkan sertifikat penghargaan, dan pengundian door prize.</div>
                        <div class="pt-4">Selain itu, terdapat juga wisata kuliner khas Sulawesi Selatan (Sulsel) yang disuguhkan secara gratis kepada seluruh peserta dan tamu undangan acara Dies Natalis ke-62 FT Unhas.</div>   
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <div>
                    <div class="items-center p-2">
                        <div class="w-56 flex items-center mx-2 my-1 justify-between font-semibold text-[#063d63] gap-2">
                            <div class="text-xl">
                                Berita Terbaru
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-8/12 bg-[#063d63] h-0.5"></div>
                            <div class="w-4/12 bg-[#eb2629]/75 h-0.5"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col gap-2 px-2 pt-4">
                            <div class="text-sm text-[#063d63] font-semibold hover:underline">
                                Puncak Dies Natalis ke-62, FT-UH
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                24 Oktober 2022
                            </div>
                            <img src="../assets/garisAbu.png" alt="" class="pt-4">
                        </div>
                        <div class="flex flex-col gap-2 px-2 py-4">
                            <div class="text-sm text-[#063d63] font-semibold hover:underline">
                                Kunjungan Kerja Fakultas Sipil dan Perencanaan Universitas Balikpapan Dalam Rangka Studi Banding Tinjauan Kurikulum Pendidikan
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                03 Oktober 2022
                            </div>
                            <img src="../assets/garisAbu.png" alt="" class="pt-4">
                        </div>
                        <div class="flex flex-col gap-2 px-2 pb-4">
                            <div class="text-sm text-[#063d63] font-semibold hover:underline">
                                Kerjasama Penyelenggaraan PS PPI Antara Fakultas Teknik Universitas Hasanuddin dengan Fakultas Teknik Universitas Halu Oleo
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                01 Oktober 2022
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="items-center p-2">
                        <div class="w-56 flex items-center mx-2 my-1 justify-between font-semibold text-[#063d63] gap-2">
                            <div class="text-xl">
                                Berita Terkait
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-8/12 bg-[#063d63] h-0.5"></div>
                            <div class="w-4/12 bg-[#eb2629]/75 h-0.5"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col gap-2 px-2 pt-4">
                            <div class="text-sm text-[#063d63] font-semibold hover:underline">
                                Puncak Dies Natalis ke-62, FT-UH
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                24 Oktober 2022
                            </div>
                            <img src="../assets/garisAbu.png" alt="" class="pt-4">
                        </div>
                        <div class="flex flex-col gap-2 px-2 py-4">
                            <div class="text-sm text-[#063d63] font-semibold hover:underline">
                                Kunjungan Kerja Fakultas Sipil dan Perencanaan Universitas Balikpapan Dalam Rangka Studi Banding Tinjauan Kurikulum Pendidikan
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                03 Oktober 2022
                            </div>
                            <img src="../assets/garisAbu.png" alt="" class="pt-4">
                        </div>
                        <div class="flex flex-col gap-2 px-2 pb-4">
                            <div class="text-sm text-[#063d63] font-semibold hover:underline">
                                Kerjasama Penyelenggaraan PS PPI Antara Fakultas Teknik Universitas Hasanuddin dengan Fakultas Teknik Universitas Halu Oleo
                            </div>
                            <div class="text-xs text-gray-500 font-medium">
                                01 Oktober 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <Footer/>
</template>

<script>
    import Navbar from './navbar.vue';
    import Footer from './Footer.vue';
    import axios from 'axios';

    export default {
        name: 'beritaDetails',
        components: { Navbar, Footer },
        data() {
    return {
      items: [],
    };
  },
  mounted() {
    // Replace 'http://your-directus-url' with the actual URL of your Directus instance
    const apiUrl = 'http://0.0.0.0:8055/items/AllBerita/'+ this.$route.params.id ; 

    axios.get(apiUrl)
    .then(response => {
      this.items = response.data.data; // Adjust the property name based on your API response
    })
    .catch(error => {
      console.error('Error fetching data from Directus:', error);
    });
  },
  methods: {
    getImageUrl(imageId) {
      // Replace 'http://your-directus-url' with the actual URL of your Directus instance
      return `http://0.0.0.0:8055/assets/${imageId}`;
    },
  },
    }
    
</script>

<style>

</style>