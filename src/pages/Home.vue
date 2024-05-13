
<template> 

  <div id="fundo">
    <!-- TOOL BAR -->
    <TopToolBar />

      <!-- BODY -->
      <v-row>
          <div>
          <MenuGaveta />
        </div>

        <div>
          <PostagemArquivo />
        </div>

        <div>
          <BotoesLista />
        </div>        

      </v-row>
      
  </div>
   
</template>

<script>

import MenuGaveta from '../components/MenuGaveta.vue';
import BotoesLista from '../components/BotoesLista.vue';
import TopToolBar from '../components/TopToolBar.vue';
import PostagemArquivo from '../components/PostagemArquivo.vue';

    export default {

      // components: {
      //   MenuGaveta,
      //   BotoesLista,
      //   TopToolBar,
      //   PostagemArquivo
      // },

    methods: {
    goTo(path) {
        this.$router.push(path)
        }
      } 
    }

</script>

<style>

#fundo {
  background: #eee;
  font-family: Arial, Helvetica, sans-serif;
}

.postagem {
    width: 344px;
    margin: 10px 10px 10px 40px;
}

</style>