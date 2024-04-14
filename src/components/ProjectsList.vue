<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'

export default {
    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000/api/projects',
            pagination: [],
        }
    },

    components: {
        ProjectCard,
    },

    methods: {
        fetchProjects(endpoint = this.baseUrl) {
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
    <div class="container">


        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li @click="fetchProjects(link.url)" :class="{
                    active: link.active,
                    disabled: !link.url
                }" v-for="link in pagination" class="page-item">
                    <a class="page-link" href="#" v-html="link.label">
                    </a>
                </li>

            </ul>
        </nav>

        <div class="row g-3">
            <project-card v-for="project in projects" :project="project"></project-card>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>