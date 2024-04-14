<script>


export default {
    props: {
        projects: Object,
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-3">
            <div v-for="project in projects" class="col-3">
                <div class="card h-100">
                    <img src="#" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.id }}</p>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>