<template>
    
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">

          <!-- TÍTULO FORMULÁRIO -->
            <v-card id="fundoClaro">
              <v-card-title>
                <v-spacer></v-spacer>
                  <v-text class="tituloLogin">Login</v-text>
                  <v-spacer></v-spacer>
                </v-card-title>
              <v-card-text>
                <v-form v-model="valid" ref="form">

                <!-- INSERIR E-MAIL -->
                  <v-text-field
                    v-model="email"
                    solo
                    :rules="emailRules"
                    label="E-mail"
                    required
                    background-color="#7451A6"
                    dark
                  ></v-text-field>

                <!-- INSERIR SENHA -->
                  <v-text-field
                    v-model="password"
                    solo
                    :rules="passwordRules"
                    :type="'password'"
                    label="Senha"
                    required
                    background-color="#7451A6"
                    dark
                  ></v-text-field>
                  
              </v-form>
            </v-card-text>

            <!-- BOTÕES -->
              <v-card-actions>
                <v-row>
                  <v-spacer></v-spacer>

                  <!-- BOTÃO DE CADASTRO -->
                    <v-col>
                      <v-btn color="#5A358C" 
                      class="botaoLogin" 
                      dark 
                      block
                      @click="navigateToCadastro">Criar Conta</v-btn>
                    </v-col>
                    
                    <!-- BOTÃO DE ENTRAR -->
                      <v-col>
                        <v-btn color="#5A358C" 
                        class="botaoLogin" 
                        dark 
                        block
                        @click="login">Entrar</v-btn>
                      </v-col>
                    <v-spacer></v-spacer>
                </v-row>
              </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </template>
  
  <script>

  export default {

    data() {
      return {
        email: '',
        password: '',
        valid: false,

        emailRules: [
          v => !!v || 'E-mail é necessário',
          v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
        ],
        passwordRules: [
          v => !!v || 'Senha é necessária',
          v => v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres',
        ],
      };
    },

    methods: {

      navigateToCadastro() {
      this.$router.push('/cadastro');
      },

      login() {
        this.$store.dispatch("login", {
                email: this.email,
                password: this.password,

            }).then(() => {
              this.$router.push('/biblioteca');

            }).catch(error => {
                console.error("Erro ao fazer login:", error);
                alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
            });
        },
      },
    };

  </script>
  
  <style scoped>

  .fill-height {
    height: 100vh;
  }

  .tituloLogin {
    color:#4D208C;
    font-weight: 800;
    font-size: 40px;
    padding: 20px 0 0 0;
    margin-bottom: 40px;
  }

  .botaoLogin {
    margin-top: 0px;
    margin-bottom: 20px;
  }

  </style>
  