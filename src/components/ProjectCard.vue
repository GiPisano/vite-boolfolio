<script>
export default {
    props: {
        project: Object,
    },

    computed: {
        abstract() {
            const description = this.project.description;
            return description.length > 40 ? description.substr(0, 45) + '...' : description;
        }
    }
}
</script>

<template>
    <div class="col-4">
        <div class="card h-100">
            <img :src="project.image ? project.image : 'https://picsum.photos/200/150'" class="card-img-top" alt="...">
            <div class="card-body">
                <span class='badge mb-2' :style="'background-color:' + project.type.color">{{ project.type.label
                    }}</span>
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ abstract }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer">
                <span v-for="technology in project.technologies" class='badge me-2'
                    :style="'background-color:' + technology.color">{{ technology.label
                    }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>