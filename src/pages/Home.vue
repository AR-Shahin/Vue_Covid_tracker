<template>
    <div class="">
        <Title country="Global" date="8-05-2021"></Title>
        <div class="grid md:grid-cols-2 gap-4 mx-auto">
    <!-- Box 1 -->
    <div class="shadow-md bg-pink-100 p-5  rounded">
      <p class="text-center text-2xl">Total</p>
      <hr class=" border-pink-500 pb-3">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Total Cases : {{totalCases}}</h3>

      <div class="text-2xl mb-4">
      <h3 class="text-3xl text-red-900 font-bold mb-4">Total Death : {{totalDeath}}</h3>
      </div>
      <div class="text-2xl mb-4">
      <h3 class="text-3xl text-green-900 font-bold mb-4">Total Recover : {{totalRecover}}</h3>
      </div>
    </div>
 <!-- Box 2 -->
    <div class="shadow-md bg-blue-200 p-5 rounded">
      <p class="text-center text-2xl">Todays</p>
      <hr class=" border-pink-500 pb-3">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>

      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
    
      </div>
    </div>
  </div>
    </div>
</template>

<script>

import Title from '../components/Title.vue'
import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                CovidCase: null,
                test : 'fff'
            }
        },
        components : {
            Title
        },
        created(){
          this.$store.dispatch('getTodaysReport')
        },
        computed :{
          ...mapGetters(['totalCases','totalDeath','totalRecover']),
        }
    }
</script>

<style lang="scss" scoped>

</style>