<template>
    <div>
        home
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        created(){
            axios.get('https://api.covid19api.com/')
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>