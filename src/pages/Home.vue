<template>

    <v-app id="fundoHome"> 
        <OpcoesHome />
    </v-app>
    
</template>

<script>

import OpcoesHome from '../components/OpcoesHome.vue'

    export default {

        components: {
        OpcoesHome
        },

        methods: {
        goTo(path) {
        this.$router.push(path)
        }
    },
   }
    
</script>

<style scoped>

    #fundoHome {
    background-color: #7451A6;
    }
  
</style>