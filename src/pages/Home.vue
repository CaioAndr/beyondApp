
<template> 
  <v-app id="fundo">

    <!-- TOOL BAR -->
    <BarraDeNavegacao />
        
    <conteiner id="conteiner">
        <PostagemArquivo />
    </conteiner>

        <FooterNav />

        
    </v-app>
</template>

<script>
import BarraDeNavegacao from '@/components/BarraDeNavegacao.vue';
import PostagemArquivo from '@/components/PostagemArquivo.vue';
import FooterNav from '@/components/FooterNav.vue';

    export default {

      components: {
        BarraDeNavegacao,
        PostagemArquivo,
        FooterNav
      },

    methods: {
    goTo(path) {
        this.$router.push(path)
        }
      },
    }

</script>

<style>

#fundo {
  background: #f2f2f2;
  font-family: Arial, Helvetica, sans-serif;
}

.postagem {
    width: 344px;
    margin: 10px 10px 10px 40px;
}

</style>