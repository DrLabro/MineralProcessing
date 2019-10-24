<template>
  <v-container flex>
    <v-flex xs12>
      <div class="game-board">
        <table cellspacing="0">
          <tr v-bind:key="rowIndex" v-for="(row, rowIndex) in game">
            <td 
              v-bind:key="columnIndex"
              v-for="(column, columnIndex) in row" 
            >  
            <div v-if="rowIndex === 0 && columnIndex === 0">
               <v-container>
                 <besleme/>
                </v-container>
              </div>
            <div v-if="rowIndex === 1 && columnIndex === 1">
               <v-container>
                 <elekust/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 1 && columnIndex === 1">
               <v-container>
                 <elekalt/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 1 && columnIndex === 3">
               <v-container>
                 <eleksagust/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 1 && columnIndex === 3">
               <v-container>
                 <eleksagalt/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 3 && columnIndex === 2">
               <v-container>
                 <eleksagalt/>
                </v-container>
              </div>                                                                                                                                                                                                                                                                          
            </td>      
          </tr>
        </table>
      </div>
    </v-flex>
  </v-container>  

</template>

<script>
//Numunelerin importu
import elekust from '../components/komurClick/elekust'
import elekalt from '../components/komurClick/elekalt'
import eleksagust from '../components/komurClick/eleksagust'
import eleksagalt from '../components/komurClick/eleksagalt'
import besleme from '../components/komurClick/besleme'
import store from '../store/store'
//library

  export default {
  methods: {
   NotifyAt: function NotifyAt() {
      if ( store.getters.siklon.length !== 0 && store.getters.siklon <= 4 )
      {
        return true
      } 
    },    
    controlSlamTanki: function controlSlamTanki() {
      if (store.getters.slamtanki.length !== 0 )
      {
        return true
      } 
    },
    controlSpiral: function controlSpiral() {
      if (store.getters.spiral.length !== 0 )
      {
        return true
      } 
    },
    controlCyclone: function controlCyclone() {
      if (store.getters.siklon.length !== 0 )
      {
        return true
      } 
    },      
    controlManyetik: function controlManyetik() {
      if (store.getters.manyetik.length !== 0 )
      {
        return true
      } 
    },
    controlTikiner: function controlTikiner() {
      if (store.getters.tikiner.length !== 0 )
      {
        return true
      } 
    },
    controlVakumFiltre: function controlVakumFiltre() {
      if (store.getters.vakumFiltre.length !== 0 )
      {
        return true
      } 
    }              
  },
  components: {
    besleme,
    elekalt,
    elekust,
    eleksagust,
    eleksagalt
    },
    data () {
      return {
        game: [
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','',''],
      ]
    }
  }
}
</script>

<style>
.game-board table {
  margin: 0 auto;
  background: url('../assets/komurYeni.png');
  background-color:white;
  margin-bottom: 2.0rem;
}
.game-board td {
  width: 47.5px;
  height: 29px;
  text-align: center;
}

</style>