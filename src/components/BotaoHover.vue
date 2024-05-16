<template>

    <!-- BOTÃO DE INTERAÇÃO -->
    <v-container>
      <v-btn
        class="mx-2"
        fab
        dark
        large
        color='#430F8C'
        @click="dialog = true"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
  
      <!-- CAIXA FLUTUANTE -->
      <v-dialog 
      v-model="dialog" 
      max-width="500px" 
        dark>

        <v-card color='#4D208C'>
            <v-card-title>Adicionar Postagem</v-card-title>

            <v-form @submit.prevent="addPost">
                <v-container>

                  <!-- Título -->
                  <v-row>
                    <v-col
                    cols="12">
                        <v-text-field
                            v-model="title"
                            :counter="25"
                            label="Título"
                            solo
                            placeholder="Insira o texto"
                            dense
                            background-color="#7451A6"
                        ></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- Subtítulo -->
                  <v-row>
                    <v-col
                    cols="12">
                        <v-text-field
                        v-model="subtitle"
                            :counter="25"
                            label="Subtítulo"
                            solo
                            placeholder="Insira o texto"
                            dense
                            background-color="#7451A6"
                        ></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- Subtítulo -->
                  <v-row>
                    <v-col
                    cols="12">
                        <v-textarea
                        v-model="description"
                        :counter="100"
                        solo
                        name="input-7-4"
                        label="Descrição"
                        placeholder="Insira o texto"
                        background-color="#7451A6"
                        ></v-textarea>
                    </v-col>
                  </v-row>

                  <!-- Imagem -->
                  <v-row>
                    <v-col cols="12">
                        <v-file-input
                            v-model="image"
                            accept="image/*"
                            prepend-icon="mdi-camera"
                            show-size
                            solo
                            placeholder="Insira a imagem"
                            @change="handleImageUpload"
                            background-color="#7451A6"
                        ></v-file-input>
                    </v-col>
                  </v-row>

                
            <!-- Botões de Ação -->
            <v-row>
              <v-spacer></v-spacer>
                <v-col >
                  <v-btn text color="#f2f2f2" 
                  @click="dialog = false"> Cancelar </v-btn> 
                </v-col> 
  
                <v-col >
                  <v-btn text color="#f2f2f2" 
                  @click="addPost"> Salvar </v-btn>
                </v-col>
              <v-spacer></v-spacer>
            </v-row>

          </v-container>
   
          </v-form>
        </v-card>

      </v-dialog>
    </v-container>

  </template>
  
  <script>

    export default {
      data() {
        return {
          dialog: false,
          title: '',
          subtitle: '',
          description: '',
          image: null
        };
      },

    methods: {
    addPost() {

      const newPost = {
        title: this.title,
        subtitle: this.subtitle,
        description: this.description,
        image: this.image
      };

        this.$emit('newPost', newPost);

        this.title = '';
        this.subtitle = '';
        this.description = '';
        this.image = null;

        this.dialog = false;
      },

        handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.image = reader.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  </script>
  