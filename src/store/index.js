import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      count: 0,
      blogs: [],
      posts: [],
      isLoadingPosts: false,
      isLoadingBlogs: false,
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    async fetchBlogs({ commit }) {
      commit("changeIsLoadingBlogs", true)
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=40')
      commit("updateBlogs", data)
      commit("changeIsLoadingBlogs", false)
    },
    async fetchPosts({ commit }) {
      commit("changeIsLoadingPosts", true)
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      commit("updatePosts", data);
      commit("changeIsLoadingPosts", false)
    }
  },
  mutations: {
    changeIsLoadingPosts(state, value) {
      state.isLoadingPosts = value;
    },
    changeIsLoadingBlogs(state, value) {
      state.isLoadingBlogs = value;
    },
    increment(state) {
      state.count++
    },
    updateBlogs(state, data) {
      state.blogs = data;
    },
    updatePosts(state, data) {
      state.posts = data;
    }
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getBlogs(state) {
      return state.blogs;
    },
    getPosts(state) {
      return state.posts;
    },
    getIsLoadingPosts(state) {
      return state.isLoadingPosts;
    },
    getIsLoadingBlogs(state) {
      return state.isLoadingBlogs;
    }
  }
})