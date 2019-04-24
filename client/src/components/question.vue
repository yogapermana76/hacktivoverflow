<template>
  <div style="border-bottom: 1px solid #E4DFE0">
    <div class="row p-3">
      <div class="col-3">
        <!-- votes -->
        <div class="row">
          <div class="col-4 p-1 text-center">
            0
            <br>
            <small>Votes</small>
          </div>
          <div class="col-4 p-1 text-center">
            0
            <br>
            <small>Answers</small>
          </div>
          <div class="col-4 p-1 text-center">
            0
            <br>
            <small>Views</small>
          </div>
        </div>
        <!-- end of votes -->
      </div>

      <div class="col-9 d-block">
        <!-- question -->
        <div class="question">
          <h6><a style="cursor: pointer; color: blue" @click="view(question._id)">{{ question.description }}</a></h6>
        </div>
        <!-- end of question -->

        <!-- tags -->
        <div class="tags">
          <h6 class="badge badge-secondary mr-2">node.js</h6>
          <h6 class="badge badge-secondary mr-2">javascript</h6>
          <h6 class="badge badge-secondary mr-2">python</h6>
        </div>
        <!-- end of tags -->

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "question",
  props: ['question'],
  methods: {
    ...mapActions([
      'viewQuestionAction'
    ]),
    view(id) {
      this.$router.push({ path: '/question/' + id })
    }
  }
};
</script>

<style>
</style>