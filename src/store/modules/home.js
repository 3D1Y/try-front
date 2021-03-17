import { getCategoryData,getBannersData,getFloorData } from "@api/home";
const state = {
  categoryData: [],
  banners: [],
  floor: [],
};
const getters = {};
const actions = {
  async getTypeNavCategoryData({ commit }) {
    const data = await getCategoryData();
    commit("CHANGE_CATEGORYDATA", data);
  },
  async reqBannersData ({commit}) {
    const data = await getBannersData();
    commit("CHANGE_BANNERS",data)
  },
  async reqFloorDate ({commit}) {
    const data = await getFloorData()
    commit("CHANGE_FLOOR",data)
  }
};
const mutations = {
  CHANGE_CATEGORYDATA(state, data) {
    state.categoryData = data;
    //console.log(state.categoryData);
  },
  CHANGE_BANNERS(state,data){
    state.banners = data
  },
  CHANGE_FLOOR(state,data){
    state.floor = data
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
