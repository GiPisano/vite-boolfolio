<script>
import axios from 'axios';
import { api, store } from '../store';
import ProjectCard from './ProjectCard.vue'
import UiPagination from './ui/UiPagination.vue'


export default {
    data() {
        return {
            pagination: store.pagination,
            projects: store.projects,
        }
    },

    components: {
        ProjectCard,
        UiPagination,
    },

    methods: {
        fetchProjects(endpoint = api.baseUrl + '/projects') {
            axios.get(endpoint).then((response) => {
                this.projects = response.data.data;
                this.pagination = response.data.links;
            })
        }
    },

    created() {
        this.fetchProjects()
    }

}
</script>

<template>
    <div class="mt-3">
        <ui-pagination @change-page="fetchProjects" :pagination="pagination"></ui-pagination>
    </div>


    <div div class="row g-3">
        <project-card v-for="project in projects" :project="project"></project-card>
    </div>
</template>

<style lang="scss" scoped></style>