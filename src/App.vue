<script>
import axios from 'axios';
import ProjectsList from './components/ProjectsList.vue'

export default {
  data() {
    return {
      title: 'Boolfolio',
      projects: [],
    };
  },

  components: {
    ProjectsList,
  },

  created() {
    axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
      this.projects = response.data.data;
    })
  }
}
</script>

<template>
  <h1 class="text-center">{{ title }}</h1>

  <div class="container">
    <div class="row g-3">
      <projects-list :projects="projects"></projects-list>
    </div>
  </div>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>