import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './routers/router'
import vuetify from './plugins/vuetify'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    eventos: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    //eslint-disable-next-line no-unused-vars
    create({ commit }, payload) {
      const { email, password } = payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log("usuário criado!", result);
          alert("Conta criada com sucesso!");
        })
        .catch((error) => {
          alert(error);
        });
    },
    
    login({ commit }, payload) {
        const { email, password } = payload; 
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log("usuário logado!", this.state.user);
                commit("setUser", result.user);
                resolve(result);
            })
            .catch((error) => {
                console.error("Erro ao fazer login:", error);
                reject(error);
            });
        });
    },
    
    checkAuthState({ commit }) {
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user);
        } else {
          commit('setUser', null);
          console.log("Método de autenticação chamado")
        }
      });
    },
    
    //eslint-disable-next-line no-unused-vars
    async sendEvent({ commit }, payload) {
      console.log("chamada da action de sendEvent")
      const evento = payload;
      try{
        const DocRef = await addDoc(collection(db, "eventos"), { 
          ...evento,
        });
        console.log("Document written with ID: ", DocRef.id);
      }catch(error){
        console.error("Erro ao enviar evento:", error);
        alert(error);
      }
    },
    
    //eslint-disable-next-line no-unused-vars
    async deletePost({ commit }, payload) {
      console.log("chamada da action de deleteEvent")
      const eventoId = payload.id;
      console.log(eventoId);
      try{
        await deleteDoc(doc(db, "eventos", eventoId));
        console.log("Document deleted with ID: ", eventoId);
      }catch(error){
        console.error("Erro ao deletar evento:", error);
        alert(error);
      }
    },
    
    //eslint-disable-next-line no-unused-vars
    async updateEvent({ commit }, payload) {
      console.log("chamada da action de updateEvent");
      const { id, ...dadosAtualizados } = payload; 
      try {
        await updateDoc(doc(db, "eventos", id), dadosAtualizados);
        console.log("Evento atualizado com sucesso");
      } catch(error) {
        console.error("Erro ao atualizar evento:", error);
        alert(error);
      }
    },
  },

  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    authError: state => state.error,
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    store.dispatch('checkAuthState').then(() => {
      if (!store.getters.isAuthenticated) { 
      next('/login');
    } else {
      next();
    }
  });
  } else {
    next();
  }
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')