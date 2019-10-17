<template>
  <v-app>
      <Navbar />
    <v-content>
      <router-view/>
    </v-content>
       <v-footer>
         <v-spacer></v-spacer>
         <div>Enis Kollugil {{ new Date().getFullYear() }}</div>
       </v-footer>    
  </v-app>
</template>

<script>
import Navbar from './components/common/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
  }),
};
</script>

