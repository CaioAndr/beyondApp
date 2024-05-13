<template>

      <v-card id="caixaFlutuante"
        
        elevation="6"
      >
        <v-navigation-drawer
          floating
          permanent
        >
          <v-list
            dense
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    
  </template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
    }
  },
}
</script>

<style>

#caixaFlutuante {
  width: 300px;
  padding: 0 auto;
  margin: 30px 10px 10px 30px;
}

</style>