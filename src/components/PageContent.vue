<template>
    <div class="page-container">
        <h1 class="page-title">{{ title }}</h1>

        <main class="main-content mt-20">
            <slot />
        </main>
    </div>
</template>

<script>
export default {
    name: 'PageContent',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.page-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

.page-title {
    text-align: center;
}

.main-content {
    padding: 20px;
}
</style>