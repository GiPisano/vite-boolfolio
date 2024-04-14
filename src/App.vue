<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'

export default {
  data() {
    return {
      title: 'Boolfolio',
      projects: [],
    };
  },

  components: {
    ProjectCard,
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
  <project-card :projects="projects"></project-card>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>