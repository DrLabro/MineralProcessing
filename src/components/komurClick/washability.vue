<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn     
          x-small
          absolute    
          color="cyan"
          @click.native.stop="createTableColumns"  
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog">        
        <v-layout>
            <v-flex xs12 mb-5 pa-1 >
                <v-card >
                        <v-card-title> WASHABILITY </v-card-title>
                            <v-data-table dense  :headers="columns" :items="items">
                                <template v-slot:item.Top="props">
                                    <v-edit-dialog
                                    :return-value.sync="props.item.Top"
                                    @save="save"
                                    @cancel="cancel"
                                    @open="open"
                                    @close="close"
                                    >
                                    {{ props.item.Top }}
                                    <template v-slot:input>
                                        <v-text-field
                                        v-model="props.item.Top"
                                        label="Edit Screen Top Size"
                                        single-line
                                        counter
                                        ></v-text-field>
                                    </template>
                                    </v-edit-dialog>
                                </template>
                                <template v-slot:item.Bottom="props">
                                    <v-edit-dialog
                                    :return-value.sync="props.item.Bottom"
                                    large
                                    persistent
                                    @save="save"
                                    @cancel="cancel"
                                    @open="open"
                                    @close="close"
                                    >
                                    <div>{{ props.item.Bottom }}</div>
                                    <template v-slot:input>
                                        <div class="mt-4 title">Update Iron</div>
                                    </template>
                                    <template v-slot:input>
                                        <v-text-field
                                        v-model="props.item.Bottom"
                                        label="Edit Screen Bottom Size"
                                        single-line
                                        counter
                                        autofocus
                                        ></v-text-field>
                                    </template>
                                    </v-edit-dialog>
                                </template>
                                <template v-slot:item.Mass="props">
                                    <v-edit-dialog
                                    :return-value.sync="props.item.Mass"
                                    large
                                    persistent
                                    @save="save"
                                    @cancel="cancel"
                                    @open="open"
                                    @close="close"
                                    >
                                    <div>{{ props.item.Mass }}</div>
                                    <template v-slot:input>
                                        <div class="mt-4 title">Update Iron</div>
                                    </template>
                                    <template v-slot:input>
                                        <v-text-field
                                        v-model="props.item.Mass"
                                        label="Edit Mass %"
                                        single-line
                                        counter
                                        autofocus
                                        ></v-text-field>
                                    </template>
                                    </v-edit-dialog>
                                </template>
                                </v-data-table> 
                        </v-card>
            </v-flex>
        </v-layout>  

    </v-dialog>
  </v-layout>
</template>

<script>
import store from "../../store/store";
import { mapGetters } from "vuex";
import { Plotly } from "vue-plotly";
export default {
  components: {
    Plotly
  },    
  methods: {
    createTableColumns() {
    let i = 1;
    let data = "";
    let data2 = "";
    if (this.columns.length !== this.howMuch * 2 + 2) {
        let first = {text: "TOP", value:"top"}
        let second = {text: "BOTTOM", value:"bottom"}
        this.columns.push(first)
        this.columns.push(second)
        for (i; i < this.howMuch + 1; i++) {
            data = { text: "SF" + [i] + "" + "M%", value: "" }
            data2 = { text: "SF" + [i] + "" + "A%", value: ""}
            this.columns.push(data)            
            this.columns.push(data2)
        }
    }
    
    this.dialog = true
    }
  },
  data() {
    return {
      dialog: false,
      howMuch: 5,
      eleksayisi: 5,
      columns: [],
      items:[]        
    };
  }
  }
</script>