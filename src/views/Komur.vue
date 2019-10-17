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
             <div v-if="rowIndex === 0 && columnIndex === 1">
               <v-container>
                 <numune1/>
                </v-container>
              </div>                                                      
             <div v-if="rowIndex === 3 && columnIndex === 3">
               <v-container>
                 <numune3/>
                </v-container>
              </div>
             <div v-if="rowIndex === 5 && columnIndex === 2">
               <v-container>
                 <numune4/>
                </v-container>
              </div>
             <div v-if="rowIndex === 2 && columnIndex === 8" >
               <v-container>
                 <numune2/>
                </v-container>
              </div>
             <div v-if="rowIndex === 3 && columnIndex === 11 || rowIndex === 3 && columnIndex === 10" >
               <v-container>
                 <agirTambur/>
                </v-container>
              </div>              
             <div v-if="rowIndex === 6 && columnIndex === 10" >
               <v-container>
                 <numune25/>
                </v-container>
              </div>
             <div v-if="rowIndex === 5 && columnIndex === 16" >
               <v-container>
                 <numune8/>
                </v-container>
              </div>  
            <div v-if="rowIndex === 9 && columnIndex === 15"  >
               <v-container>
                 <numune22/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 9 && columnIndex === 13"  >
               <v-container>
                 <numune7/>
                </v-container>
              </div>  
            <div v-if="rowIndex === 7 && columnIndex === 12 || rowIndex === 7 && columnIndex === 14"  >
               <v-container>
                 <agirTank2/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 9 && columnIndex === 16 || rowIndex === 9 && columnIndex === 17" >
               <v-container>
                 <manyetik/>
                </v-container>
              </div>                                                                 
            <div v-if="rowIndex === 9 && columnIndex === 18" >
               <v-container>
                 <numune18/>
                </v-container>
              </div>  
            <div v-if="rowIndex === 11 && columnIndex === 16" >
               <v-container>
                 <numune17/>
                </v-container>
              </div>
            <div v-if="rowIndex === 14 && columnIndex === 16" >
               <v-container>
                 <numune17/>
                </v-container>
              </div>   
            <div v-if="rowIndex === 17 && columnIndex === 16" >
               <v-container>
                 <numune16/>
                </v-container>
              </div>
            <div v-if="rowIndex === 15 && columnIndex === 12 || rowIndex === 15 && columnIndex === 13" >
               <v-container>
                 <numune14/>
                </v-container>
              </div>  
            <div v-if="rowIndex === 13 && columnIndex === 12 || rowIndex === 14 && columnIndex === 12 || rowIndex === 13 && columnIndex === 11 || rowIndex === 13 && columnIndex === 13"  >
               <v-container>
                 <tikiner/>
                </v-container>
              </div>   
            <div v-if="rowIndex === 17 && columnIndex === 14 || rowIndex === 17 && columnIndex === 13" >
               <v-container>
                 <vakumFiltre/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 18 && columnIndex === 12" >
               <v-container>
                 <numune11/>
                </v-container>
              </div> 
            <div v-if="rowIndex === 19 && columnIndex === 11" >
               <v-container>
                 <numune10/>
                </v-container>
              </div>  
            <div v-if="rowIndex === 20 && columnIndex === 11" >
               <v-container>
                 <numune9/>
                </v-container>
              </div>                                                                                
            <div v-if="rowIndex === 19 && columnIndex === 14" >
               <v-container>
                 <numune15/>
                </v-container>
              </div>                                                                                
             <div v-if="rowIndex === 10 && columnIndex === 10" >
               <v-container>
                 <numune21/>
                </v-container>
              </div>                             
             <div v-if="rowIndex === 5 && columnIndex === 8" >
               <v-container>
                 <numune6/>
                </v-container>
              </div>          
             <div v-if="rowIndex === 4 && columnIndex === 6" >
               <v-container>
                 <agirCyclone/>
                </v-container>
              </div>                   
             <div v-if="rowIndex === 7 && columnIndex === 3" >
               <v-container>
                 <numune24/>
                </v-container>
              </div>
             <div v-if="rowIndex === 11 && columnIndex === 4" >
               <v-container>
                 <numune19/>
                </v-container>
              </div>
             <div v-if="rowIndex === 17 && columnIndex === 2 || rowIndex === 17 && columnIndex === 3 || rowIndex === 18 && columnIndex === 2 || rowIndex === 18 && columnIndex === 3 " >
               <v-container>
                 <slamtanki/>
                </v-container>
              </div>
            <div v-if="rowIndex === 15 && columnIndex === 5 || rowIndex === 16 && columnIndex === 5 || rowIndex === 17 && columnIndex === 5" >
               <v-container>
                 <cyclone/>
                </v-container>
              </div>
             <div v-if="rowIndex === 13 && columnIndex === 5" >
               <v-container>
                 <numune12/>
                </v-container>
              </div>
             <div v-if="rowIndex === 18  && columnIndex === 5" >
               <v-container>
                 <numune13/>
                </v-container>
              </div>
             <div v-if="rowIndex === 11 && columnIndex === 7" >
               <v-container>
                 <numune20/>
                </v-container>
              </div>
             <div v-if="rowIndex === 15 && columnIndex === 7 || rowIndex === 16 && columnIndex === 7 || rowIndex === 17 && columnIndex === 7 || rowIndex === 18 && columnIndex === 7" >
               <v-container>
                 <spiral/>
                </v-container>
              </div>                             
             <div v-if="rowIndex === 19 && columnIndex === 5 || rowIndex === 20 && columnIndex === 5">
               <v-container>
                 <beslemeTanki/>
                </v-container>
              </div> 
             <div v-if="rowIndex === 21 && columnIndex === 5">
               <v-container>
                 <numune23/>
                </v-container>
              </div>
             <div v-if="rowIndex === 5 && columnIndex === 5 || rowIndex === 5 && columnIndex === 4">
               <v-container>
                 <numune5/>
                </v-container>
              </div>
             <div v-if="rowIndex === 8 && columnIndex === 5 || rowIndex === 9 && columnIndex === 5">
               <v-container>
                 <agirTank/>
                </v-container>
              </div>
             <div v-if="rowIndex === 8 && columnIndex === 7 || rowIndex === 9 && columnIndex === 7">
               <v-container>
                 <agirTankKirli/>
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
import numune1 from '../components/komurClick/1numune'
import numune2 from '../components/komurClick/2numune'
import numune3 from '../components/komurClick/3numune'
import numune4 from '../components/komurClick/4numune'
import numune5 from '../components/komurClick/5numune'
import numune6 from '../components/komurClick/6numune'
import numune7 from '../components/komurClick/7numune'
import numune8 from '../components/komurClick/8numune'
import numune9 from '../components/komurClick/9numune'
import numune10 from '../components/komurClick/10numune'
import numune11 from '../components/komurClick/11numune'
import numune12 from '../components/komurClick/12numune'
import numune13 from '../components/komurClick/13numune'
import numune14 from '../components/komurClick/14numune'
import numune15 from '../components/komurClick/15numune'
import numune16 from '../components/komurClick/16numune'
import numune17 from '../components/komurClick/17numune'
import numune18 from '../components/komurClick/18numune'
import numune19 from '../components/komurClick/19numune'
import numune20 from '../components/komurClick/20numune'
import numune21 from '../components/komurClick/21numune'
import numune22 from '../components/komurClick/22numune'
import numune23 from '../components/komurClick/23numune'
import numune24 from '../components/komurClick/24numune'
import numune25 from '../components/komurClick/25numune'
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
import * as jsPDF from 'jspdf'
import html2canvas from "html2canvas"



  export default {
  methods: {
   exportPDF: function exportPDF() {
     const doc = new jsPDF();
      /** WITH CSS */
      var canvasElement = document.createElement('canvas');
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 0.8);
        doc.addImage(img,'JPEG',20,20);
        doc.save("sample.pdf");
      });
   },
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
    numune1,numune2, numune3, numune4, numune5, numune6, numune7, numune8, numune9, numune10,numune11,numune12,numune13,numune14,numune15,numune16,numune17,numune18,numune19,numune20,numune21,numune22,numune23,numune24,numune25,
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
    manyetik
    },
    data () {
      return {
        game: [
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
      ]
    }
  }
}
</script>

<style>
.game-board table {
  margin: 0 auto;
  background: url('../assets/komur.png');
  background-color:white;
  margin-bottom: 2.0rem;
  width: 72%;

}
.game-board td {
  width: 47.5px;
  height: 29px;
  text-align: center;
}

</style>