<template>
    <v-app id="fundoEscuro">
        <FazerCadastro />
    </v-app>
</template>

<script>

import FazerCadastro from '../components/FazerCadastro.vue';

    export default {

        components: {
            FazerCadastro
        },

        methods: {
        goTo(path) {
        this.$router.push(path)
        }
   } 
}
    
</script>