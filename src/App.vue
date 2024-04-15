<script>
import ProjectsList from './components/ProjectsList.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  data() {
    return {
    };
  },

  components: {
    ProjectsList,
    AppHeader,
    AppFooter,
  },


}
</script>

<template>
  <app-header></app-header>

  <div class="container">
    <projects-list></projects-list>
  </div>

  <app-footer></app-footer>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>