<template>
    <header class="header-section inset-x-0 top-0" style=" position: fixed; padding: 24px 0 0 0; background-color: #063D63; justify-content: space-between; align-items: center; z-index: 99;">
        <div class="container flex justify-between" style="padding: 0 128px;">
            <a href="https://eng.unhas.ac.id/fakultas/" class="site-logo">
                <img src="../assets/unhas_id.png" alt="">
            </a>
            <div class="flex gap-6 mr-12 px-6">
                <div class="flex items-center gap-8">
                    <form class="p-1 flex justify-center gap-6 h-10 w-[320px] rounded-3xl" style="background-color: #063556" action="" method="GET">
                        <input type="text" name="q" class="text-white w-full px-2" style="background-color: #063556; border-radius: 64px 0 0 64px;" placeholder="Cari disini...">
                        <input type="submit" value="Cari" class="justify-center pr-6 text-white">
                    </form>
                </div>
                <div class="flex gap-4 w-8 items-center">
                    <button class="flex items-center gap-2 text-white">
                        <img src="../assets/indonesiaFlag.png" alt="" class="">
                        <div class="">IND</div>
                    </button>
                    <div class="text-white font-bold pl-6">|</div>
                    <button class="flex items-center gap-2 text-gray-400 hover:text-white">
                        <img src="../assets/englishFlag.png" alt="" class="">
                        <div class="">ENG</div>
                    </button>
                </div>
            </div>
        </div>
        
        <nav class="navbar" style="margin-top: 24px; padding: 14px 128px; background-color: #eb2629; align-items: center; color: white;"> 
            <div class="navbar-nav space-x-24 text-sm font-semibold" style="padding: auto; margin: auto; display: flex; align-items: center; justify-content: space-between;">
                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">PROFIL</button>
                    <div class="dropdown-menu hidden absolute bg-[#ED2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">BERITA</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">SEJARAH SINGKAT</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">VISI, MISI DAN SASARAN</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">MANAJEMEN</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">STRUKTUR ORGANISASI</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">MASTER PLAN</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">PETA KAMPUS</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">MEDIATEK</a>
                    </div>
                </div>

                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">SUMBER DAYA</button>
                    <div class="dropdown-menu hidden absolute bg-[#EB2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">GURU BESAR</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">TENAGA KEPENDIDIKAN</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">SARANA DAN PRASARANA</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">PERPUSTAKAAN</a>
                    </div>
                </div>

                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">KEMAHASISWAAN</button>
                    <div class="dropdown-menu hidden absolute bg-[#EB2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">UPT ASRAMA (RAMTEK)</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">PENGEMBANGAN KARAKTER MAHASISWA</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">PENINGKATAN PRESTASI MAHASISWA</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">MAHASISWA INBOUND DAN OUTBOUND</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">ALUMNI</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">ATURAN KEMAHASISWAAN</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">PENGUMUMAN</a>
                    </div>
                </div>

                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">RISET DAN INOVASI</button>
                    <div class="dropdown-menu hidden absolute bg-[#EB2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">DAFTAR PENELITIAN LBE TAHUN 2020</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">HASIL INOVASI</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">HAK KEKAYAAN INTELEKTUAL</a>
                    </div>
                </div>

                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">KEMITRAAN</button>
                    <div class="dropdown-menu hidden absolute bg-[#EB2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">KERJASAMA DALAM NEGERI</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">KERJASAMA LUAR NEGERI</a>
                    </div>
                </div>

                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">GPM-PR</button>
                    <div class="dropdown-menu hidden absolute bg-[#EB2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">PROFIL GPM-PR</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">DOKUMEN MUTU</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">AUDIT MUTU AKADEMIK INTERNAL</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">AKREDITASI</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">LAM TEKNIK</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">LAPORAN KEPUASAN PENGGUNA</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">SURVEI KEPUASAN LAYANAN MAHASISWA</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">GALERI</a>
                    </div>
                </div>

                <div class="dropdown relative inline-block">
                    <button class="dropdown-button text-white transition duration-300 ease-in-out">COT</button>
                    <div class="dropdown-menu hidden absolute bg-[#EB2629] text-white font-medium w-max -translate-x-4">
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">COT WEBSITE</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">JURNAL COT</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">COT NEWSLETTER</a>
                        <a href="#" class="block px-4 py-2 hover:bg-[#b11e28]">U-I-G COLLABORATION</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default{
    name: 'navbar'
}
</script>

<style scoped>
:root {
    --bg1 : #063D63;
    --bg2 : #EB2629;
}

.header-section img {
    width: 300px;
}

/* .navbar-nav a:hover {
    color: #063D63;
} */

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>