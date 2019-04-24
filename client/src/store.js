import Vue from 'vue'
import Vuex from 'vuex'
import backend from './api/backend'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    email: '',
    password: '',
    title: '',
    description: '',
    upVotes: '',
    downVotes: '',
    isLogin: false,
    questions: [],
    question: {}
  },
  mutations: {
    setUser(state, data) {
      state.name = data.name
      state.email = data.email
      state.password = data.password
    },
    successLogin(state) {
      state.isLogin = true
    },
    successLogout(state) {
      state.isLogin = false
    },
    addQuestion(state, data) {
      state.questions.push(data)
    },
    getAllQuestion(state, data) {
      state.questions = data
    },
    viewQuestion(state, data) {
      state.question = data
    }

  },
  actions: {
    registerAction(context, data) {
      backend
        .post('/users/register', {
          name: data.name,
          email: data.email,
          password: data.password
        })
        .then(({ data }) => {
          context.commit('setUser', data)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginAction(context, data) {
      backend
        .post('/users/login', {
          email: data.email,
          password: data.password
        })
        .then(({ data }) => {
          console.log('success login')
          const { token, email, id } = data
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)
          localStorage.setItem('id', id)
          context.commit('successLogin')
          // this.$swal("Success Login!", "You clicked the button!", "success")
          // this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logoutAction(context) {
      context.commit('successLogout')
    },
    addQuestionAction(context, data) {
      backend
        .post('/questions', {
          title: data.title,
          description: data.description,
          userId: localStorage.getItem('id')
        })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('getAllQuestionAction')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllQuestionAction(context) {
      backend
        .get('/questions')
        .then(({ data }) => {
          context.commit('getAllQuestion', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    viewQuestionAction(context, id) {
      backend
        .get(`/questions/${id}`)
        .then(({ data }) => {
          console.log(data)
          context.commit('viewQuestion', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteQuestionAction(context, id) {
      backend
        .delete(`/questions/${id}`)
        .then(() => {
          console.log('success deleted')
          context.dispatch('getAllQuestionAction')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
})
