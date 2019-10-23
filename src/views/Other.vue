<template>
<div>
    <span style="color:orange"> Solid(t/h): </span>
    <input v-model="solid" placeholder="doldur">
</div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
     computed: {
         ...mapGetters([
             'solid'
         ])
     }
}
</script>