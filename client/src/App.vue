<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid" style="color: #ADA9AA">
      <div class="row" style="margin-top: 54px">
        <!-- left -->
        <div
          class="col-md-2"
          style="border-right: 1px solid #E4DFE0; position: fixed; height: 600px"
        >
          <div class="row mt-4">
            <div class="col-12 mb-1 list-side" @click="pageHome">Home</div>
            <div class="col-12 mb-1 list-side">Public</div>
            <div class="col-12 mb-1 list-side">
              <i class="fas fa-globe-americas"></i> Hacktiv Overflow
            </div>
            <div class="col-12">
              <div class="col-12 mb-1 list-side">Tags</div>
              <div class="col-12 mb-1 list-side">Users</div>
              <div class="col-12 mb-1 list-side">Jobs</div>
              <div class="col-12">
                <div style="border: 1px solid #E4DFE0; border-radius: 5px" class="p-3 mt-3">
                  <small>
                    <strong>Teams</strong>
                    <br>Q&A for work
                  </small>
                  <button class="btn btn-outline-primary">
                    <small>Learn More</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- enf of left -->

        <!-- center -->
        <div class="col-md-7" style="margin-left: 225.16px">
          <router-view></router-view>
        </div>
        <!-- end of center -->

        <!-- right -->
        <div class="col-md-3 mt-4">
          <cardTags v-if="isLogin"></cardTags>
        </div>
        <!-- end of right -->

      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import cardTags from "@/components/cardTags.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    navbar,
    cardTags
  },
  created() {
    this.getAllQuestionAction()
    if(localStorage.getItem('token')) {
      this.$store.commit('successLogin')
    }
  },
  computed: {
    ...mapState([
      'questions',
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'getAllQuestionAction'
    ]),
    pageHome() {
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
  .list-side {
    cursor: pointer
  }

  .list-side:hover {
    font-weight: bold
  }
</style>