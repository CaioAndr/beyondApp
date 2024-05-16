<template>

    <div>

      <v-app-bar
        color='#4D208C'
        dark
        scroll-target="#scrolling-techniques-2"
      >
  
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
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
      color='#4D208C'
      absolute
      bottom
      temporary
    >

    <v-list nav>
        <v-list-item dark v-for="item in menuItems" :key="item.text" @click="selectItem(item)">
          <v-list-item-title  :class="{ 'active-item': item === selectedItem }">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>

    </div>

  </template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        menuItems: [
          { text: 'Biblioteca', value: 'biblioteca', routeName: 'Home' },
          { text: 'Usuário', value: 'usuario', routeName: 'Usuário' },
          { text: 'Curso', value: 'curso', routeName: 'Cursos' },
          { text: 'Calendário', value: 'calendario', routeName: 'Calendário' },
        ],
        selectedItem: null
      };
    },

    methods: {
      selectItem(item) {
        this.$router.push({ name: item.routeName });
        this.drawer = false;
      }, 

      isItemActive(item) {
        return this.$route.name === item.routeName;
      }
    }
  };
</script>

<style>

  #titulo {
    font-size:25px;
    font-weight: 600;
  }

  .active-item {
  color: #A693BF; 
  }

</style>