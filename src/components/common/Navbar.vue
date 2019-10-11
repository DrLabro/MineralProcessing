<template>
    <nav>
        <v-toolbar flat app >
            <v-btn class="transparent" small="true" depressed="true" v-on="on" @click="drawer = !drawer">
                <v-icon large color="purple darken-2">mdi-dialpad</v-icon>
            </v-btn>
                <v-toolbar-title class="text-uppercase grey--text"> 
                    <span>Mineral Proceessing Engineering</span>  
                </v-toolbar-title>
                <v-spacer></v-spacer>
                    <span>Istanbul Technical University</span>  
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="dark">
            <v-list dense>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" >
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white-text"> {{ link.text }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <div class="text-right">
                <v-btn @click="drawer = false" small="true" color="primary" dark>Kapat</v-btn>
                </div>
            </v-list>
        </v-navigation-drawer>

    </nav>  
</template>


<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon:'mdi-deviantart', text:'Ana Sayfa', route:'/'},
                {icon:'mdi-deviantart', text:'Kömür', route:'/komur' },
                {icon:'mdi-deviantart', text:"Diğer Akim", route:'/other'},

            ]
        }
    }
    
}
</script>