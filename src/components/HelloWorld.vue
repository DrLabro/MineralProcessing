<template>
  <v-container fluid>
    <v-flex xs12>
      <div class="game-board">
        <table cellspacing="0">
          <tr v-bind:key="rowIndex" v-for="(row, rowIndex) in game">
            <td 
              v-bind:key="columnIndex"
              v-for="(column, columnIndex) in row" 
            >
              <div v-if="rowIndex === 7 && columnIndex === 2 || rowIndex === 7 && columnIndex === 3">
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
      <v-flex xs3 >
          <hydrocard/>
      </v-flex>
      <v-flex xs3 >
          <hydrocard/>
      </v-flex>
      <v-flex xs3 >
          <hydrocard/>
      </v-flex>
      <v-flex xs3 >
          <hydrocard/>
      </v-flex>      
    </v-layout>
  </v-container>
</template>

<script>
import firstPopup from './Popup'
import hydrocard from './hydrocycloneCard'
  export default {
     methods: {
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