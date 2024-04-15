<script>
import ProjectsList from '/src/components/ProjectsList.vue';
import { store } from '../store';

export default {
    data() {
        return {
            projects: store.projects
        }
    },

    components: {
        ProjectsList
    },
}

</script>

<template>
    <section>
        <projects-list></projects-list>
    </section>
</template>

<style lang="scss" scoped></style>