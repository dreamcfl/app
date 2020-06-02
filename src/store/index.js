import Vue from "vue";
import Vuex from "vuex";
import Cookie from "@u/cookie";
Vue.use(Vuex);

var state = {
  userInfo: Cookie.get("userInfo") ? JSON.parse(Cookie.get("userInfo")) : "",
  userCode: ""
};

var mutations = {
  SET_USERINFO(state, payload) {
    state.userInfo = payload;
    Cookie.set("userInfo", JSON.stringify(payload));
  }
};
var actions = {
  // 设置用户信息
  setUserInfo({ commit }, value) {
    commit("SET_USERINFO", value);
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});
