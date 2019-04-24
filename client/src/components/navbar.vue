<template>
  <div>
    <div class="container-fluid shadow-lg py-2 fixed-top" style="background-color: white">
      <div class="row">
        <div class="col-md-2">
          <h4>
            Hacktiv
            <strong>Overflow</strong>
          </h4>
        </div>
        <div class="col-md-5">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <div class="input-group-btn">
                <button
                  class="btn"
                  type="submit"
                  style="background-color: #E8E4E5; border: 1px solid #B0AEAE"
                >
                  <i class="fas fa-search text-light"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-5">
          <div class="float-right">
              <button v-if="!isLogin" class="btn border btn-sm mr-2" data-toggle="modal" data-target="#registerModal">
                <i class="fas fa-user-plus"></i> Register
              </button>
              <button v-if="!isLogin" class="btn btn-sm border" data-toggle="modal" data-target="#loginModal">
                <i class="fas fa-sign-in-alt"></i> Login
              </button>
              <span>
                <button v-if="isLogin" @click="logout" class="btn btn-sm border">
                  <i class="fas fa-sign-in-alt"></i> Logout
                </button>
              </span>
          </div>
        </div>
      </div>
    </div>

    <!-- login modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email" class="col-form-label">Email:</label>
                <input type="text" class="form-control" v-model="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="Password" class="col-form-label">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Password"
                >
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn text-light shadow"
                  data-dismiss="modal"
                  style="background-color: #38C6F0"
                >Cancel</button>
                <button
                  type="submit"
                  class="btn text-light shadow"
                  style="background-color: #DD1C97"
                >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end of login modal -->

    <!-- register modal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="name" class="col-form-label">Name:</label>
                <input type="text" class="form-control" v-model="name" placeholder="Name">
              </div>
              <div class="form-group">
                <label for="email" class="col-form-label">Email:</label>
                <input type="text" class="form-control" v-model="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="Password" class="col-form-label">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Password"
                >
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn text-light shadow"
                  data-dismiss="modal"
                  style="background-color: #38C6F0"
                >Cancel</button>
                <button
                  type="submit"
                  class="btn text-light shadow"
                  style="background-color: #DD1C97"
                >Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end of register modal -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
    // name() {
    //   return this.$store.state.name
    // }
  },
  methods: {
    ...mapActions([
      'registerAction',
      'loginAction'
    ]),
    register() {
      // atau menggunakan this.$store.dispatch('registerAction')
      this.registerAction({
        name: this.name,
        email: this.email,
        password: this.password
      })

      this.name = ''
      this.email = ''
      this.password = ''
      $('#registerModal').modal('toggle')
    },
    login() {
      this.loginAction({
        email: this.email,
        password: this.password
      })

      this.email = ''
      this.password = ''
      $('#loginModal').modal('toggle')
    },
    logout() {
      localStorage.clear()
      this.$store.commit('successLogout')
      // this.$store.dispatch('logoutAction')
    }
  }
};
</script>

<style>
</style>