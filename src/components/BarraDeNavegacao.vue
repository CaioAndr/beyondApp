<template>

    <div>

      <v-app-bar
        color='#4D208C'
        dark
        shrink-on-scroll
        scroll-target="#scrolling-techniques-2"
      >
  
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>Biblioteca</v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- GAVETA DE NAVEGAÇÃO -->

      <v-navigation-drawer
      v-model="drawer"
      color='#430F8C'
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          dark
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Usuário</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Curso</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Calendário</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fórum</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

      </v-list>
      
    </v-navigation-drawer>

    </div>

  </template>

<script>

    export default {
    
    data: () => ({ 
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    }
}

</script>