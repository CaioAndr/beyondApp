<template>

<v-container class="fill-height" fluid>
            <v-row justify="center">
            <v-col cols="10" sm="8" md="4">
                <v-card color="#4D208C">
                <v-card-title 
                id="headline">Bem-vindo!</v-card-title>

                <v-card-text>
                    <p id="mensagemHome">Esta é a tela incial de meu projeto!</p>

                    <p id="mensagemHome">O meu tema selecionado foi: biblioteca digital.</p>

                    <p id="mensagemHome"> Escolha uma das opções de entrada!</p>
                </v-card-text>

                <v-card-actions id="botoesHome">
                    <v-row justify="center">
                        <v-spacer></v-spacer>
                        
                            <v-col>
                                <v-btn color="#7451A6" 
                                dark
                                @click="navigateToLogin">
                                Fazer Login
                                </v-btn>
                            </v-col>

                    <v-col>
                        <v-btn color="#7451A6" 
                        dark
                        @click="navigateToCadastro">
                        Criar Conta
                        </v-btn>
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

        methods: {
        goTo(path) {
        this.$router.push(path)
        },

        navigateToLogin() {
        this.$router.push('/login');
        },

        navigateToCadastro() {
        this.$router.push('/cadastro');
        },
   } 
}
    
</script>

<style scoped>

    .fill-height {
    height: 100vh;
    }
    
    #headline {
    color: #f2f2f2;
    justify-content: space-around;
    text-align: center;
    font-weight: 600;
    font-size: 38px;
    padding: 40px 0px 40px 0px;
    }

    .v-card-text {
    text-align: center;
    margin-bottom: 20px;
    }

    #botoesHome {
    padding: 20px 0 30px 0;
    }
    
    #mensagemHome {
    color: #CDC1D9;
    font-size: 20px;
    text-align: center;
    }

</style>