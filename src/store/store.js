import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: {},
        numberPosts: 3,
    },
    mutations: {
        dataLoading(state, payload) {
            state.users = payload;
            state.numberPosts += 3;
        }
    },
    actions: {
        async fetchInfoUsers(context, payload) {
            let data;
            await axios.get(`https://jsonplaceholder.typicode.com/users?_start=0&_limit=${payload}`)
                .then(response => {
                    data = response.data;
                    context.commit('dataLoading', data)
                })
                // eslint-disable-next-line no-console
                .catch(error => console.log(error));
        }
    }
})