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
              <div v-if="rowIndex === 7 && columnIndex === 2">
               <v-container>
                 <firstPopup/>
                </v-container>
              </div>
            </td>      
          </tr>
        </table>
      </div>
    </v-flex>
   <v-layout row>
      <v-flex xs3 v-if="getStatushydroCylone()"> 
          <hydrocard/>
      </v-flex>     
    </v-layout>
  </v-container>
</template>

<script>
import firstPopup from '../components/cyclone/Popup'
import hydrocard from '../components/cyclone/hydrocycloneCard'
import store from '../store/store'
  export default {
  methods: {
    getStatushydroCylone: function getStatushydroCylone() {
      if (store.getters.firstname.length !== 0)
      {
        return true
      } 
    }
  },
  components: {
    firstPopup,
    hydrocard
    },
    data () {
      return {
        game: [
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        ['', '', '','', '', '','', '', '', '', '','','','','','','','','',''],
        
      ]
      }
    }
  }
</script>

<style>
.game-board table {
  margin: 0 auto;
  background: url(http://web.itu.edu.tr/kollugil/komur.png);
  margin-bottom: 2.0rem;
}
.game-board td {
  width: 58px;
  height: 57px;
  line-height: 60px;
  text-align: center;
}
</style>