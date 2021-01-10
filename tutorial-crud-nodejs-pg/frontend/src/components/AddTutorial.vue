<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          v-model="tutorial.title"
          id="title"
          required
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="title">Description</label>
        <input
          type="text"
          class="form-control"
          v-model="tutorial.description"
          id="description"
          required
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Save</button>
    </div>

    <div v-else>
      <h4>Data submitted successfully!</h4>
      <button @click="newTutorial" class="btn btn-success">Add New</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data: function() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
      };

      TutorialDataService.create(data)
        .then((res) => {
          this.tutorial.id = res.data.id;
          console.log(res.data);
          this.submitted = true;
        })
        .catch((e) => console.log(e));
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
