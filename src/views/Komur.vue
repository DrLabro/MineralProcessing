<template>
  <v-container flex>
    <v-flex v-if="NotifyAt()">
        <v-alert dismissible prominent type="error"> 2, 3 ve 4 numaralı kısımlardaki Katı(Solid) miktarının hesaplanması için, elek üzerindeki [1,2,3,4] mavi bölümlerin dolu olması gerekmektedir. </v-alert>
    </v-flex>  
    <v-row x12>
    <v-flex v-if="PermissionScreen" mb-1 pa-3>   
      <v-alert prominent type="primary" width="600px">
        <v-row align="center">
          <v-col class="grow"> Elek üzerindeki katı miktarlarını hesaplatmak için tıklayınız.</v-col>
            <v-btn color="green" small depressed @click="calculateSolidData()"> Calculate </v-btn>
        </v-row>
      </v-alert> 
    </v-flex>   
    <v-flex v-if="PermissionHydrocycloneEfficiency" mb-1 pa-3>   
      <v-alert dismissible prominent type="warning" width="750px">
        <v-row align="center">
          <v-col class="grow"> Hydrocyclone verimini hesaplamak için, overflow ve underflow değerleri girilmelidir.</v-col>
        </v-row>
      </v-alert> 
    </v-flex>     
    </v-row>
    <v-flex>
      <div class="main-board" xs12 > 
        <table cellspacing="0" >
          <tr v-bind:key="rowIndex" v-for="(row, rowIndex) in mainPanel">
            <td 
              v-bind:key="columnIndex"
              v-for="(column, columnIndex) in row" 
            >  
            <div v-if="rowIndex === 1 && columnIndex === 1">
              <besleme/>
            </div>  
            <div v-if="rowIndex === 3 && columnIndex === 5">
              <washability/>
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
            <div v-if="rowIndex === 6 && columnIndex === 38">
               <v-container>
                 <hydroCycloneEfficiency/>
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
import hydroCycloneEfficiency from '../components/komurClick/hydroCycloneEfficiency'
import hydroCycloneUnderflow from '../components/komurClick/hydroCycloneUnderflow'
import slimeTank from '../components/komurClick/slimeTank'
import elekalt from '../components/komurClick/elekalt'
import eleksagust from '../components/komurClick/eleksagust'
import eleksagalt from '../components/komurClick/eleksagalt'
import besleme from '../components/komurClick/besleme'
import washability from '../components/komurClick/washability'
import store from '../store/store'
//library
import screeningCard from '../components/komurCard/screening'
import axios from "axios"

  export default {
  methods: {
    NotifyAt: function NotifyAt() {
      if ( store.getters.solid.length == 0 || store.getters.water.length == 0 || store.getters.waterMoist.length == 0 || store.getters.elekust_moist.length == 0 || store.getters.eleksagalt_o_ustu.length == 0 || store.getters.elekcikis_u_ust.length == 0)
      {
        return true
      } 
      else {
        this.PermissionScreen = true
        this.PermissionHydrocycloneEfficiency = true
        return false
      }
    },  
    async calculateSolidData() {
        let solid = store.getters.solid
        let water = store.getters.water
        let moist = store.getters.waterMoist
        let moist2 = store.getters.elekust_moist
        let oustu = store.getters.eleksagalt_o_ustu
        let uust = store.getters.elekcikis_u_ust
        let url = "http://localhost:6001/03c91e2d0e8b5f4ad25c3f254eb37135/?solid=" + solid + "&moist=" + moist  + "&water=" + water + "&moist2=" + moist2 + "&oustu=" + oustu + "&uustu=" + uust

        await axios
        .get(url)
        .then( response => (this.dataFromApi = response))

        let x = this.dataFromApi.data.result[0]
        let y =  this.dataFromApi.data.result[1]
        console.log(x)
        console.log(y)

        this.$store.commit("setX", {
          x: 'elekust_solid',
          value: x.toFixed(3)
        });

        this.$store.commit("setX", {
          x: 'eleksagalt_solid',
          value: y.toFixed(3)
        }); 

        this.PermissionScreen = false
    },  
             
  },
  components: {
    besleme,
    washability,
    eleksagust,
    eleksagalt,
    elekalt,
    slimeTank,
    hydroCycloneFeed,
    hydroCycloneUnderflow,    
    hydroCycloneEfficiency,
    hydroCycloneOverflow,
    slimeTank2,
    coalSpiralFeed,
    coalCleanCoal,
    coalTailing,
    screeningCard
    },
    data () {
      return {
        PermissionScreen: false,
        PermissionHydrocycloneEfficiency: false,
        dataFromApi:[],
        mainPanel: [
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
.main-board table {
  margin: 0 auto;
  background: url('../assets/komurYeni.png');
  background-size: 100%;
  background-repeat: no-repeat;

}

.main-board td {
  width: 24.5px;
  height: 24.5px;
}

</style>