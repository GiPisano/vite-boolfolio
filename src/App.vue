<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  data() {
    return {
    };
  },

  components: {
    AppHeader,
    AppFooter,
  },


}
</script>

<template>
  <div class="wrapper">
    <app-header></app-header>

    <div class="container main">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex-grow: 1;
  }
}
</style>