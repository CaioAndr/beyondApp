<template>
    <v-app>
        Tela de Fórum
    </v-app>
</template>

<script>

    export default {

        methods: {
        goTo(path) {
        this.$router.push(path)
        }
   } 
}
    
</script>