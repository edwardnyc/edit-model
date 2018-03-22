import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
const moduleA = {
    state: {
        lirui: "sb",
        draglist: [], //list列表
    },
    mutations: {
        liruichange(state) {
            state.lirui = "大sb"
        },
        updateData(state, val) {
            state.draglist = val;
        }
    },
    actions: {
        LIRUICHANGE({ commit }) {
            commit('liruichange');
        }
    },
    getters: {
        lirui: state => state.lirui,
        draglist: state => state.draglist
    },
}
export default new vuex.Store({
    modules: {
        a: moduleA,
        b: {
            state: {
                siyunlong: "hehe"
            },
            getters: {
                long: state => state.siyunlong,
            }
        },
    }

})