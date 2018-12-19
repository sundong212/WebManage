import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: {
      title: '',
      date: '2018-20-20',
      category: '预览',
      imgSrc: '',
      abstract: '',
      content: []
    }
  },
  plugins: [createPersistedState()],
  mutations: {
    SET_NEWS_TITLE: (state, title) => {
      state.news.title = title;
    },
    SET_NEWS_IMGSRC: (state, url) => {
      state.news.imgSrc = url;
      console.log(url);
      console.log(state.news.imgSrc);
    },
    SET_NEWS_ABSTRACT: (state, abstract) => {
      state.news.abstract = abstract;
    },
    ADD_CONTENT: (state, contentObj) => {
      state.news.content.push(contentObj);
      console.log(state.news);
    },
    DELETE_CONTENT: (state, index) => {
      state.news.content.splice(index, 1);
      console.log(state.news);
    }
  },
  actions: {
    setNewsTitle: (context, title) => {
      context.commit("SET_NEWS_TITLE", title);
    },
    setNewsImgsrc: (context, url) => {
      context.commit("SET_NEWS_IMGSRC", url);
    },
    setNewsAbstract: (context, abstract) => {
      context.commit("SET_NEWS_ABSTRACT", abstract);
    },
    addContent: (context, contentObj) => {
      context.commit("ADD_CONTENT", contentObj);
    },
    deleteContent: (context, index) => {
      context.commit("DELETE_CONTENT", index);
    }
  }
})
