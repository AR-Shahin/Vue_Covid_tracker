<template>
<MyHeader></MyHeader>
<div class="container">
<router-view />
</div>

</template>
<script>
import MyHeader from './components/MyNav'
export default {
  components :{
    MyHeader
  }
}
</script>
<style>


</style>
