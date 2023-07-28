import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      count: 0,
      blogs: [],
      posts: [],
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    async fetchBlogs({ commit }) {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=40')
      commit("updateBlogs", data)
    },
    async fetchPosts({ commit }) {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      commit("updatePosts", data);
    }
  },
  mutations: {
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
    }
  }
})