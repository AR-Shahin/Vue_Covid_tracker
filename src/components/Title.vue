<template>
    <div class="text-center shadow-sm shadow px-2 mb-2">
        <h5 class="font-semibold text-2xl">Country : <span class="text-red-500">{{ country }}</span></h5>
        <p class="mb-2 inline-block font-mono">Date : <span class="text-pink-400">{{ date }}</span></p>
    </div>
</template>

<script>
    export default {
        props : ['date','country']
    }
</script>

<style lang="scss" scoped>

</style>