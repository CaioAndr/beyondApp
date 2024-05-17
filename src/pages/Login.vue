<template>
    <v-app id="fundoEscuro">
        <FazerLogin />
    </v-app>
</template>

<script>

import FazerLogin from '../components/FazerLogin.vue';

    export default {

        components: {
        FazerLogin
        },

        methods: {
        goTo(path) {
        this.$router.push(path)
        }
    },
}
    
</script>

<style>

@import '~vuetify/dist/vuetify.min.css';

    #fundoEscuro {
        background-color: #4D208C;
    }

</style>