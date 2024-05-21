<template>

    <div>
      <v-container fluid>

      <v-row>
        <v-col v-for="(post, index) in posts" :key="index">

          <v-card class="cardPost" elevation="4" color='#5A358C' dark>
            
          <v-img :src="post.image" width="300"></v-img>

            <v-card-title id="tituloPostagem"> {{ post.title }} </v-card-title>

            <v-card-subtitle> {{ post.subtitle }} </v-card-subtitle>

            <v-card-text> {{ post.description }} </v-card-text>

            <v-col>
              <v-btn text color="#f2f2f2" @click="editarPost(evento)">EDITAR</v-btn>
            </v-col>

          </v-card>

        </v-col>
      </v-row>

      <BotaoHover id="botao" @newPost="addNewPost" />

    </v-container>
  </div>

</template>

<script>
  import BotaoHover from './BotaoHover.vue';

  export default {
    components: {
      BotaoHover
    },

    data() {
      return {
        posts: []
      };
    },

    methods: {
      addNewPost(newPost) {
        this.posts.push(newPost);
      },

      editarPost(evento) {
        this.eventoEditando = { ...evento };
        this.dialogEditar = true;
        this.indexEditado = this.eventos.indexOf(evento);
        this.eventoId = evento.id;
      },

      salvarEdicao() {
        this.$store.dispatch('updateEvent', { ...this.eventoEditando, id: this.eventoId });
        this.getEventos();
        this.dialogEditar = false;
        this.eventoEditando = { title: '', subtitle: '', description: '', image: null };
        this.eventoId = -1;
      },

      cancelarEdicao() {
        this.dialogEditar = false; 
        this.eventoEditando = { title: '', subtitle: '', description: '', image: null }; 
      },

      deletePost() {
        if (confirm("Tem certeza que deseja excluir esta postagem?")) {
          const postParaExcluir = this.post[this.indexEditado];
          this.$store.dispatch('deletePost', postParaExcluir);
          this.dialogEditar = false;
          this.postEditando = { title: '', subtitle: '', description: '', image: null };
          this.indexEditado = -1;
          this.getEventos();        }
      },
    },
  };
</script>

<style>

.cardPost {
    margin: 18px 0 0 0;
    width: 300px;
}

#tituloPostagem {
  font-size: 25px;
  font-weight: 400;
}

#botao {
  margin-top: 20px;
  text-align: center;
}

</style>