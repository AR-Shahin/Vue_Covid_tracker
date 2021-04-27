<template>
    <div class="text-center">
        <Title></Title>
        <div class="grid md:grid-cols-2 gap-4">
    <!-- Box 1 -->
    <div class="shadow-md bg-pink-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases : {{CovidCase}}</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        
      </div>
    </div>

    <!-- Box 2 -->
    <div class="shadow-md bg-blue-200 p-10 text-center rounded">
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
import axios from 'axios'
import Title from '../components/Title.vue'

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
          //this.$state.dispatch('')
           axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then((res) => {
                this.CovidCase = res.data.cases
                console.log(res.data.cases);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>