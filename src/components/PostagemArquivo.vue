<template>

        <v-container>
      <v-row dense>
        <v-col>

          <v-card class="cardPost"
          elevation="6"
            color="#2e2e2e"
            dark
          >
          <v-img src="../assets/beyondCard.png" width="300"></v-img>

            <v-card-title class="text-h5">
              Residência Tecnológica
            </v-card-title>

            <v-card-subtitle>Aula 01 <br> Node, Npm e Vue.js.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Abrir
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

    <v-col>
        <v-card class="cardPost"
            color="#2e2e2e"
            elevation="6"
            dark
          >
        <v-img src="../assets/beyondCard2.png" width="300"></v-img>

            <v-card-title class="text-h5">
              Residência Tecnológica
            </v-card-title>

            <v-card-subtitle>Aula 02 <br> Vuetify, V-if e V-for.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Abrir
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-col>

        <v-col>
        <v-card class="cardPost"
            color="#2e2e2e"
            elevation="6"
            dark
          >
            <v-img src="../assets/beyondCard3.png" width="300"></v-img>

            <v-card-title class="text-h5">
              Residência Tecnológica
            </v-card-title>

            <v-card-subtitle>Aula 03 <br> Components, Pages e Routers.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Abrir
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        
      </v-row>
    </v-container>

</template>

<style>

.cardPost {
    margin: 18px 0 0 0;
    width: 300px;
}

</style>