<template>
  <v-container flex>
    <v-flex v-if="NotifyAt()">
        <v-alert dismissible prominent type="error"> Siklon değeri {{ $store.getters.siklon }} girildi. Bu değer 4'den büyük olmalıdır. </v-alert>
    </v-flex>    
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
    <v-layout row>
      <v-flex xs3 v-if="controlSlamTanki()"> 
          <slamtankiCard/>
      </v-flex>
      <v-flex xs3 v-if="controlSpiral()">
          <spiralCard/>
      </v-flex>
      <v-flex xs3 v-if="controlCyclone()">
          <siklonCard/>
      </v-flex> 
      <v-flex xs3 v-if="controlManyetik()">
          <manyetikCard/>
      </v-flex>                     
    </v-layout>
    <v-layout row>
      <v-flex xs3 v-if="controlTikiner()">
        <tikinerCard />
      </v-flex>
      <v-flex xs3 v-if="controlVakumFiltre()">
        <vakumfiltreCard />
      </v-flex>      
    </v-layout>
    <v-layout row>
      <v-flex x12>
        <calculationPanel/>
      </v-flex>
    </v-layout>
  </v-container>  

</template>

<script>
//Numunelerin importu
import elekust from '../components/komurClick/elekust'
import elekalt from '../components/komurClick/elekalt'
import eleksagust from '../components/komurClick/eleksagust'
import eleksagalt from '../components/komurClick/eleksagalt'
import besleme from '../components/komurClick/besleme'
//cihazların importu
import manyetik from '../components/komurClick/manyetik'
import vakumFiltre from '../components/komurClick/vakumFiltre'
import tikiner from '../components/komurClick/tikiner'
import agirTambur from '../components/komurClick/agirTambur'
import agirTank2 from '../components/komurClick/agirTank2'
import agirTank from '../components/komurClick/agirTank'
import agirTankKirli from '../components/komurClick/agirTankKirli'
import agirCyclone from '../components/komurClick/agirCyclone'
import beslemeTanki from '../components/komurClick/beslemeTanki'
import slamtanki from '../components/komurClick/slamtanki'
import cyclone from '../components/komurClick/cyclone'
import spiral from '../components/komurClick/spiral'
//Cardların importu
import vakumfiltreCard from '../components/komurCard/vakumfiltreCard'
import tikinerCard from '../components/komurCard/tikinerCard'
import manyetikCard from '../components/komurCard/manyetikCard'
import siklonCard from '../components/komurCard/siklonCard'
import spiralCard from '../components/komurCard/spiralCard'
import slamtankiCard from '../components/komurCard/slamtankiCard'
import calculationPanel from '../components/common/Calculation'
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
    slamtankiCard, spiralCard, siklonCard,manyetikCard, tikinerCard, vakumfiltreCard,
    calculationPanel,
    slamtanki,
    cyclone,
    beslemeTanki,
    spiral,
    agirCyclone,
    agirTank,
    agirTankKirli,
    agirTambur,
    tikiner,
    agirTank2,
    vakumFiltre,
    manyetik,
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