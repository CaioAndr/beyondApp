<template>
    <v-app>
        Tela de Cursos
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