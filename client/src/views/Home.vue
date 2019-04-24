<template>
  <div v-if="isLogin" class="home">
      <div class="row mt-4 pb-3" style="border-bottom: 1px solid #E4DFE0">
        <div class="col-md-6">
          <h3>Top Questions</h3>
        </div>
        <div class="col-md-6">
          <div class="top">
            <button
              class="btn btn-primary float-right"
              data-toggle="modal"
              data-target="#questionModal"
            >Ask Question</button>
          </div>

          <!-- question modal -->
          <questionModal></questionModal>
          <!-- end of question modal -->

          <div class="bottom">
            <div class="btn-group mt-4" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-outline-secondary">Interesting</button>
              <button type="button" class="btn btn-outline-secondary">Featured</button>
              <button type="button" class="btn btn-outline-secondary">Hot</button>
              <button type="button" class="btn btn-outline-secondary">Week</button>
              <button type="button" class="btn btn-outline-secondary">Month</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <question v-for="(question, index) in questions" :key="index" v-bind:question="question"></question>
      </div>
    </div>
    <!-- end of center -->
</template>

<script>
import question from "@/components/question.vue";
import cardTags from "@/components/cardTags.vue";
import questionModal from "@/components/questionModal.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  created() {
    
  },
  computed: {
    ...mapState([
      'isLogin',
      'questions'
    ])
  },
  components: {
    question,
    cardTags,
    questionModal
  }
};
</script>
