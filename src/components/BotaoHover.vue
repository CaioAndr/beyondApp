<template>

    <!-- BOTÃO DE INTERAÇÃO -->
    <v-container>
      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="purple"
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

            <v-form>
                <v-container>
                   
                    <v-col
                    cols="12"
                    sm="6"
                    md="12"
                    >
                        <v-text-field
                            :counter="25"
                            label="Título"
                            solo
                            placeholder="Insira o texto"
                            dense
                            background-color="#7451A6"
                        ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="12"
                    >
                        <v-text-field
                            :counter="25"
                            label="Subtítulo"
                            solo
                            placeholder="Insira o texto"
                            dense
                            background-color="#7451A6"
                        ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="12"
                    >
                        <v-textarea
                        :counter="100"
                        solo
                        name="input-7-4"
                        label="Descrição"
                        placeholder="Insira o texto"
                        background-color="#7451A6"
                        ></v-textarea>
                    </v-col>

                    <v-col center>
                        <v-file-input
                            prepend-icon="mdi-camera"
                            show-size
                            solo
                            placeholder="Insira a imagem"
                        background-color="#7451A6"
                        ></v-file-input>
                    </v-col>

                </v-container>
            </v-form>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="#f2f2f2" @click="dialog = false">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-dialog>
    </v-container>

  </template>
  
  <script>

    export default {
      data() {
        return {
          dialog: false,
        }
      }
    }

  </script>
  