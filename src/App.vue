<script>
import ProjectsList from './components/ProjectsList.vue'

export default {
  data() {
    return {
      title: 'Boolfolio',

    };
  },

  components: {
    ProjectsList,
  },


}
</script>

<template>
  <h1 class="text-center">{{ title }}</h1>

  <div class="container">
    <div class="row g-3">
      <projects-list></projects-list>
    </div>
  </div>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>