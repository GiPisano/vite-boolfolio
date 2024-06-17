<script>
import axios from "axios";
import { api } from "../store";

export default {
  data() {
    return {
      project: null,
    };
  },

  created() {
    const projectId = this.$route.params.id;
    axios.get(api.baseUrl + `/projects/${projectId}`).then((response) => {
      this.project = response.data;
    });
  },
};
</script>

<template>
  <div class="container" v-if="project">
    <h5 class="h1 text-center">{{ project.title }}</h5>
    <div class="row">
      <!-- <div class="col-6">
        <img
          :src="project.image ? project.image : 'https://picsum.photos/500/350'"
          class="img-details"
          alt="..."
        />
      </div> -->

      <div v-if="project.video" class="card-img-top">
        <video width="100%" controls>
          <source :src="project.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="col-6">
        <div>
          <span
            class="badge mb-2"
            :style="'background-color:' + project.type.color"
            >{{ project.type.label }}</span
          >
        </div>
        <div>
          <span
            v-for="technology in project.technologies"
            class="badge me-2"
            :style="'background-color:' + technology.color"
            >{{ technology.label }}</span
          >
        </div>
        <p class="">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="scss" scoped></script>
