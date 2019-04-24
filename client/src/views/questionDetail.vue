<template>
  <div v-if="isLogin" class="questionDetail">
    <div class="row mt-4 pb-3" style="border-bottom: 1px solid #E4DFE0">
      <div class="col-11">
        <h3> {{ question.title }} </h3>
      </div>
      <div class="col-1">
        <button @click="deleteQuestion(question._id)" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="row pl-3 mt-3">
      {{ question.description }}
    </div>
  </div>
  <!-- end of center -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'question',
      'isLogin'
    ])
  },
  created() {
    let id = this.$route.params.id
    this.$store.dispatch('viewQuestionAction', id)
  },
  methods: {
    deleteQuestion(id) {
      this.$store.dispatch('deleteQuestionAction', id)
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>