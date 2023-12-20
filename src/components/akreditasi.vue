<template>
    <section>
        <div class="flex justify-between px-16 my-8" style="padding: 24px 128px;">
            <div class="flex gap-4 mt-36">
                <h1 class="text-4xl font-semibold" style="color: #063D63;">AKREDITASI</h1>
                <img src="../assets/Garis1.png" alt="" style="height: 4px; width: 320px; margin-top: 20px;">
            </div>
        </div>
        
        <div class="px-32">
            <div class="text-2xl text-center font-semibold pb-3">IDENTITAS</div>
            <div class="flex border border-2 border-black table-auto grid grid-cols-3 divide-x-8 divide-x divide-transparent py-2">
                <div class="text-base text-center font-medium flex flex-col gap-2">
                    <p>Nama PT</p>
                    <p>Alamat</p>
                    <p>Homepage dan E-Mail</p>
                    <p>No. dan Tgl. SK Pendirian Institusi</p>
                    <p>Nama Fakultas</p>
                    <p>Alamat</p>
                    <p>Homepage dan E-Mail</p>
                    <p>No. dan Tgl. SK Pendirian Fakultas</p>
                    <p>Pejabat yang menerbitkan SK</p>
                </div>
                <div class="text-base text-center font-medium flex flex-col gap-2 col-span-2">
                    <p>UNIVERSITAS HASANUDDIN</p>
                    <p>Kampus Unhas - Tamalanrea  Jalan Perintis Kemerdekaan KM.10 Makassar Sulawesi Selatan.</p>
                    <p>http://www.unhas.ac.id</p>
                    <a href="https://drive.google.com/file/d/11ZSVAJnKDrEt1fAcnN02KV45axUlL3xH/view?usp=sharing" class="text-sky-500 hover:text-sky-700">Peraturan Pemerintah PP-RI No.23 Th.1956, Lembar Negara LN-RI No.39 Th.1956</a>
                    <p>TEKNIK</p>
                    <p>Kampus Fakultas Teknik – Gowa, Jl. Poros Malino – Sungguminasa Km 6, Gowa.</p>
                    <p>http://www.eng.unhas.ac.id dan E-Mail: teknik@unhas.ac.id </p>
                    <a href="https://drive.google.com/file/d/17PWtrYvzmE1CeimNNk8oRg3J2xgQVM8o/view" class="text-sky-500 hover:text-sky-700">No. 75623/1960; Tanggal 7 September 1960</a>
                    <p>Menteri Pendidikan dan Kebudayaan RI</p>
                </div>
            </div>
          
            <div class="mt-8 flex items-center justify-between">
                <div class="text-lg font-semibold">Daftar Program Studi di Unit Pengelola Program Studi (UPPS)</div>
                <div class="flex text-base">
                    <div class="mr-1">Unduh</div>
                    <div class="font-semibold mr-1">Sertifikat dan SK Akreditasi</div>
                    <a href="https://drive.google.com/drive/folders/139BQ4DSVSioV6HBHJt40AFobDsM6Egka" class="font-semibold text-sky-500 hover:text-sky-700">disini</a>
                </div>
            </div>

            <div class="py-4">
                <table class="table-auto w-full border-collapse border border-slate-500 text-center">
                    <thead>
                        <tr>
                            <th class="border border-2 border-transparent border-l-slate-600 border-t-slate-600">No.</th>
                            <th class="border border-2 border-transparent border-t-slate-600">Jenis Program</th>
                            <th class="border border-2 border-transparent border-t-slate-600">Nama Program Studi</th>
                            <th class="border border-2 border-transparent border-t-slate-600">Status/Peringkat</th>
                            <th class="border border-2 border-transparent border-t-slate-600">Akreditasi Nasional No. dan Tgl. SK</th>
                            <th class="border border-2 border-transparent border-t-slate-600">Tgl. Kadaluarsa</th>
                            <th class="border border-2 border-transparent border-t-slate-600">Akreditasi dan Sertifikasi Internasional</th>
                            <th class="border border-2 border-transparent border-r-slate-600 border-t-slate-600" colspan="2">Tgl Berakhir Akreditas Internasional</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">1</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Industri</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0289/SK/LAM Teknik/AS/VIII/2023</td>
                            <td class="border border-2 border-transparent">20/08/2028</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2027</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">2</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Mesin</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">1698/SK/BAN-PT/Ak-PPJ/S/III/2022</td>
                            <td class="border border-2 border-transparent">30/03/2027</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2026</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">3</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Elektro</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0008/SK/LAM Teknik/PYT/V/2022</td>
                            <td class="border border-2 border-transparent">31/03/2024</td>
                            <td class="border border-2 border-transparent">ABET, IABEE</td>
                            <td class="border border-2 border-transparent">30/09/2026</td>
                            <td class="border border-2 border-r-slate-700 border-transparent">31/03/2024</td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">4</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Informatika</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">122/SK/LAM-INFOKOM/Ak.S/S/V/2023</td>
                            <td class="border border-2 border-transparent">31/12/2023</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2027</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">5</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Sipil</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">2087/SK/BAN-PT/Akred-PMT/S/III/2022</td>
                            <td class="border border-2 border-transparent">30/03/2023</td>
                            <td class="border border-2 border-transparent">ABET, IABEE</td>
                            <td class="border border-2 border-transparent">30/09/2026</td>
                            <td class="border border-2 border-r-slate-700 border-transparent">31/03/2024</td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">6</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Lingkungan</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0019/SK/LAM Teknik/PYT/II/2023</td>
                            <td class="border border-2 border-transparent">31/03/2024</td>
                            <td class="border border-2 border-transparent">IABEE</td>
                            <td class="border border-2 border-transparent">31/03/2024</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-l-slate-700 border-transparent">7</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Arsitektur</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">10813/SK/BAN-PT/AK-ISK/S/IX/2021</td>
                            <td class="border border-2 border-transparent">18/06/2026</td>
                            <td class="border border-2 border-transparent">AUN-QA</td>
                            <td class="border border-2 border-transparent">28/12/2023</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">8</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Perencanaan Wilayah Kota</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">2291/SK/BAN-PT/Akred-Itnl/S/VI/2023</td>
                            <td class="border border-2 border-transparent">30/09/2027</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2027</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">9</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Geologi</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">2579/SK/BAN-PT/AK-ISK/S/XI/2021</td>
                            <td class="border border-2 border-transparent">19/08/2026</td>
                            <td class="border border-2 border-transparent">IABEE</td>
                            <td class="border border-2 border-transparent">On Progress</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">10</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Pertambangan</td>
                            <td class="border border-2 border-transparent">A</td>
                            <td class="border border-2 border-transparent">10451/SK/BAN-PT/SURV-BDG/S/VIII/2021</td>
                            <td class="border border-2 border-transparent">01/09/2025</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2027</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">11</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Perkapalan</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0059/SK/LAM Teknik/AS/VIII/2022</td>
                            <td class="border border-2 border-transparent">20/08/2027</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2026</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">12</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Sistem Perkapalan</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">2212/SK/BAN-PT/AK-ISK/S/IV/2022</td>
                            <td class="border border-2 border-transparent">31/05/2025</td>
                            <td class="border border-2 border-transparent">ASIIN</td>
                            <td class="border border-2 border-transparent">30/09/2027</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">13</td>
                            <td class="border border-2 border-transparent">Sarjana</td>
                            <td class="border border-2 border-transparent">Teknik Kelautan</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">2209/SK/BAN-PT/AK-ISK/S/IV/2022</td>
                            <td class="border border-2 border-transparent">07/04/2025</td>
                            <td class="border border-2 border-transparent">IABEE</td>
                            <td class="border border-2 border-transparent">31/03/2028</td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">14</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Industri</td>
                            <td class="border border-2 border-transparent">Baik</td>
                            <td class="border border-2 border-transparent">No. 10012/SK/BAN-PT/Akred/M/VIII/2021</td>
                            <td class="border border-2 border-transparent">04/08/2026</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">15</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Mesin</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0217/SK/LAM Teknik/AM/XII/2022</td>
                            <td class="border border-2 border-transparent">20/12/2027</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">16</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Elektro</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0115/SK/LAM Teknik/AM/XII/2022</td>
                            <td class="border border-2 border-transparent">20/12/2027</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">17</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Informatika</td>
                            <td class="border border-2 border-transparent">Baik Sekali</td>
                            <td class="border border-2 border-transparent">6358/SK/BAN-PT/Ak/M/IX/2022</td>
                            <td class="border border-2 border-transparent">20/09/2027</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">18</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Sipil</td>
                            <td class="border border-2 border-transparent">A</td>
                            <td class="border border-2 border-transparent">1330/SK/BAN-PT/Akred/M/V/2019</td>
                            <td class="border border-2 border-transparent">07/05/2024</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">19</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Lingkungan</td>
                            <td class="border border-2 border-transparent">Baik Sekali</td>
                            <td class="border border-2 border-transparent">1902/SK/BAN-PT/Akred/M/III/2022</td>
                            <td class="border border-2 border-transparent">21/03/2027</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">20</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Arsitektur</td>
                            <td class="border border-2 border-transparent">B</td>
                            <td class="border border-2 border-transparent">4786/SK/BAN-PT/Akred/M/XII/2017</td>
                            <td class="border border-2 border-transparent">12/09/2022</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">21</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Perencanaan Wilayah Kota</td>
                            <td class="border border-2 border-transparent">Baik</td>
                            <td class="border border-2 border-transparent">1677/SK/BAN-PT/Ak-PKP/M/III/2022</td>
                            <td class="border border-2 border-transparent">15/03/2027</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">22</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Geologi</td>
                            <td class="border border-2 border-transparent">B</td>
                            <td class="border border-2 border-transparent">0205/SK/LAM Teknik/Smtr/VIII/2023</td>
                            <td class="border border-2 border-transparent">20/04/2024</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">23</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Pertambangan</td>
                            <td class="border border-2 border-transparent">Baik</td>
                            <td class="border border-2 border-transparent">1654/SK/BAN-PT/Ak-PKP/M/III/2022</td>
                            <td class="border border-2 border-transparent">15/03/2027</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">24</td>
                            <td class="border border-2 border-transparent">Magister</td>
                            <td class="border border-2 border-transparent">Teknik Perkapalan</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0096/SK/LAM Teknik/AM/IV/2023</td>
                            <td class="border border-2 border-transparent">20/04/2028</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">25</td>
                            <td class="border border-2 border-transparent">Doktor</td>
                            <td class="border border-2 border-transparent">Teknik Mesin</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0287/SK/LAM Teknik/AD/VIII/2023</td>
                            <td class="border border-2 border-transparent">20/08/2028</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">26</td>
                            <td class="border border-2 border-transparent">Doktor</td>
                            <td class="border border-2 border-transparent">Ilmu Teknik Elektro</td>
                            <td class="border border-2 border-transparent">B</td>
                            <td class="border border-2 border-transparent">2740/SK/BAN-PT/Akred/D/VII/2019</td>
                            <td class="border border-2 border-transparent">30/07/2024</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">27</td>
                            <td class="border border-2 border-transparent">Doktor</td>
                            <td class="border border-2 border-transparent">Ilmu Teknik Sipil</td>
                            <td class="border border-2 border-transparent">Unggul</td>
                            <td class="border border-2 border-transparent">0288/SK/LAM Teknik/AD/VIII/2023</td>
                            <td class="border border-2 border-transparent">20/08/2028</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">28</td>
                            <td class="border border-2 border-transparent">Doktor</td>
                            <td class="border border-2 border-transparent">Teknik Arsitektur</td>
                            <td class="border border-2 border-transparent">A</td>
                            <td class="border border-2 border-transparent">4138/SK/BAN-PT/Akred/D/VII/2020</td>
                            <td class="border border-2 border-transparent">21/07/2025</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">29</td>
                            <td class="border border-2 border-transparent">Doktor</td>
                            <td class="border border-2 border-transparent">Teknologi Kebumian dan Lingkungan</td>
                            <td class="border border-2 border-transparent">B</td>
                            <td class="border border-2 border-transparent">2555/SK/BAN-PT/Akred/D/VII/2019</td>
                            <td class="border border-2 border-transparent">23/07/2024</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">30</td>
                            <td class="border border-2 border-transparent">Program Profesi</td>
                            <td class="border border-2 border-transparent">Pendidikan Profesi Insinyur</td>
                            <td class="border border-2 border-transparent">B</td>
                            <td class="border border-2 border-transparent">9547/SK/BAN-PT/Akred/PP/VII/2021</td>
                            <td class="border border-2 border-transparent">25/03/2026</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-l-slate-700 border-transparent">31</td>
                            <td class="border border-2 border-transparent">Program Profesi</td>
                            <td class="border border-2 border-transparent">Pendidikan Profesi Arsitektur</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent">Izin Operasi</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent">-</td>
                            <td class="border border-2 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-transparent"></td>
                        </tr>
                        <tr>
                            <td class="border border-2 border-b-slate-700 border-l-slate-700 border-transparent">32</td>
                            <td class="border border-2 border-b-slate-700 border-transparent">Sarjana</td>
                            <td class="border border-2 border-b-slate-700 border-transparent">Teknik Metalurgi dan Material</td>
                            <td class="border border-2 border-b-slate-700 border-transparent">-</td>
                            <td class="border border-2 border-b-slate-700 border-transparent">Izin Operasional</td>
                            <td class="border border-2 border-b-slate-700 border-transparent">-</td>
                            <td class="border border-2 border-b-slate-700 border-transparent">-</td>
                            <td class="border border-2 border-b-slate-700 border-transparent"></td>
                            <td class="border border-2 border-r-slate-700 border-b-slate-700 border-transparent"></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'kalenderAkademik'
}
</script>