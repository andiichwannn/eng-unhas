<template class="fixed">
    <div class="icon w-[90px] h-[90px] left-[1320px] top-[] absolute">
        <div class="w-[90px] h-[90px] left-0 top-0 absolute bg-[#063D63] rounded-full"></div>
        <div class="w-[82px] h-[82px] left-[48px] top-[4px] absolute"></div>
        <img class="w-[46px] h-[46px] left-[20px] top-[22px] absolute" src="../assets/icon_message.png" />
    </div>
</template>

<script>
export default{
    name: 'message'
}
</script>

<style scoped>
.icon:hover{
    opacity: 75%;
    transition-duration: 300ms;
}
</style>