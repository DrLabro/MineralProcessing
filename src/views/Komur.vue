<template>
  <v-container flex>
    <v-flex xs12>
      <div class="game-board">
        <table cellspacing="0" >
          <tr v-bind:key="rowIndex" v-for="(row, rowIndex) in game">
            <td 
              v-bind:key="columnIndex"
              v-for="(column, columnIndex) in row" 
            >  
            <div v-if="rowIndex === 1 && columnIndex === 1">
              <besleme/>
            </div>  
            <div v-if="rowIndex === 2 && columnIndex === 7">
               <v-container>
                 <eleksagust/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 3 && columnIndex === 7">
               <v-container>
                 <eleksagalt/>
                </v-container>
              </div>   
            <div v-if="rowIndex === 5 && columnIndex === 5">
              <v-container>
                 <elekalt/>
                </v-container>
              </div>       
            <div v-if="rowIndex === 20 && columnIndex === 5">
               <v-container>
                 <slimeTank/>
                </v-container>
              </div>
            <div v-if="rowIndex === 5 && columnIndex === 36">
               <v-container>
                 <hydroCycloneFeed/>
                </v-container>
              </div>                  
            <div v-if="rowIndex === 4 && columnIndex === 38">
               <v-container>
                 <hydroCycloneOverflow/>
                </v-container>
              </div>     
            <div v-if="rowIndex === 7 && columnIndex === 38">
               <v-container>
                 <hydroCycloneUnderflow/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 8 && columnIndex === 38">
               <v-container>
                 <slimeTank2/>
                </v-container>
              </div>  
            <div v-if="rowIndex === 14 && columnIndex === 39">
               <v-container>
                 <coalSpiralFeed/>
                </v-container>
              </div>    
            <div v-if="rowIndex === 19 && columnIndex === 38">
               <v-container>
                 <coalTailing/>
                </v-container>
              </div>
            <div v-if="rowIndex === 19 && columnIndex === 41">
               <v-container>
                 <coalCleanCoal/>
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
import coalTailing from '../components/komurClick/coalTailing'
import coalCleanCoal from '../components/komurClick/coalCleanCoal'
import coalSpiralFeed from '../components/komurClick/coalSpiralFeed'
import slimeTank2 from '../components/komurClick/slimeTank2'
import hydroCycloneFeed from '../components/komurClick/hydroCycloneFeed'
import hydroCycloneOverflow from '../components/komurClick/hydroCycloneOverflow'
import hydroCycloneUnderflow from '../components/komurClick/hydroCycloneUnderflow'
import slimeTank from '../components/komurClick/slimeTank'
import elekalt from '../components/komurClick/elekalt'
import eleksagust from '../components/komurClick/eleksagust'
import eleksagalt from '../components/komurClick/eleksagalt'
import besleme from '../components/komurClick/besleme'
import store from '../store/store'
//library
import screeningCard from '../components/komurCard/screening'

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
    eleksagust,
    eleksagalt,
    elekalt,
    slimeTank,
    hydroCycloneFeed,
    hydroCycloneUnderflow,
    hydroCycloneOverflow,
    slimeTank2,
    coalSpiralFeed,
    coalCleanCoal,
    coalTailing,
    screeningCard
    },
    data () {
      return {
        game: [
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],

      ]
    }
  }
}
</script>

<style>
.game-board table {
  margin: 0 auto;
  background: url('../assets/komurYeni.png');
  background-size: 100%;
  background-repeat: no-repeat;

}

.game-board td {
  width: 24.5px;
  height: 24.5px;
}

</style>