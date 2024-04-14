<script>
import ProjectCard from './ProjectCard.vue'

export default {
    props: {
        projects: Object,
    },

    components: {
        ProjectCard,
    },

}
</script>

<template>
    <div class="container">
        <div class="row g-3">
            <project-card v-for="project in projects" :project="project"></project-card>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>