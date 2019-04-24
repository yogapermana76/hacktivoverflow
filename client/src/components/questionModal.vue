<template>
  <!-- question modal -->
  <div
    class="modal fade"
    id="questionModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ask Question</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addQuestion">
            <div class="form-group">
              <label for="title" class="col-form-label">Title:</label>
              <input type="text" class="form-control" v-model="title" placeholder="Title">
            </div>
            <div class="form-group">
              <label for="description" class="col-form-label">Description:</label>
              <textarea class="form-control" v-model="description" placeholder="Description"></textarea>
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
              >Ask Question</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end of question modal -->
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "questionModal",
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapActions([
      'addQuestionAction'
    ]),
    addQuestion() {
      this.addQuestionAction({
        title: this.title,
        description: this.description
      })
      $('#questionModal').modal('toggle')
    }
  },
};
</script>

<style>
</style>
