<template>
    <footer style="color: white; margin-top: 24px;">
        <div class="content mx-auto py-12" style="background-image: url('src/assets/bgFooter.png'); background-size: cover; padding: 40px 124px;">
            <div class="grid grid-cols-3 gap-5 text-sm font-semibold">
                <div>
                    <img src="../assets/Logo FT Unhas.png" alt="">
                    <div class="ms-2 mt-8 mb-4 text-xl">
                        <p>ALAMAT</p>
                    </div>
                    <div class="ms-2 font-normal">
                        <p>Jalan Poros Malino Km.6, Bontomarannu. <br>Gowa, Sulawesi Selatan. 92171</p>
                    </div>
                    <div class="ms-2 mt-8 mb-4 text-xl">
                        <p>KONTAK</p>
                    </div>
                    <div class="ms-2 font-normal">
                        <p>+62 852-9999-9958</p>
                        <p>teknik@unhas.ac.id</p>
                    </div>
                    <div class="flex gap-4 ms-2 my-6 font-normal">
                        <img src="../assets/facebook.png" alt="">
                        <img src="../assets/Twitter.png" alt="">
                        <img src="../assets/Instagram.png" alt="">
                        <img src="../assets/Youtube.png" alt="">
                    </div>
                </div>
                <div></div>
                <div>
                    <div class="text-xl">PENELUSURAN OLEH GOOGLE</div>
                    <form class="mt-4 bg-white p-4 flex justify-between" action="https:www.google.com/search" method="GET">
                        <input type="text" name="q" class="text-black p-1 w-full border" placeholder="Google Search">
                        <input type="submit" value="Search" class="bg-black px-3">
                    </form>
                    <div class="mt-16 mb-4 text-xl">DIDUKUNG OLEH</div>
                    <div class="flex gap-8 items-center">
                        <img width="100px" src="../assets/logoUpanaStudio.png" alt="">
                        <img width="100px" src="../assets/logoOricon.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <hr style="border-color: #063D63">
        <div class="footer2 py-6 text-center text-gray-400 text-sm" style="background-color: #063556">Copyright &copy; 2023 All rights reserved</div>
    </footer>
</template>

<script>
export default{
    name: 'Footer'
}
</script>

