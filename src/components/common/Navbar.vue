<template>
    <nav>
        <v-toolbar flat app >
            <v-btn class="transparent" small="true" depressed="true" v-on="on" @click="drawer = true">
                <v-icon large color="purple darken-2">mdi-dialpad</v-icon>
            </v-btn>
                <v-toolbar-title class="text-uppercase grey--text"> 
                    <span> ITU Mineral Proceessing Engineering</span>  
                </v-toolbar-title>
                <v-spacer></v-spacer>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="dark">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" >
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white-text"> {{ link.text }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-btn
                @click="drawer = false"
                >
                Close
                </v-btn>
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
                {icon:'mdi-script', text:'Kömür', route:'/komur' },
                {icon:'mdi-script', text:"Diğer Akim", route:'/other'},

            ]
        }
    }
    
}
</script>