<template>
    <div class="og-card">
        <img :src="imageLink" alt="Card Img" class="or-card-image">
        <div class="og-card-content">
            <h2 class="og-card-title">{{ title }}</h2>
            <p class="og-card-description">{{ description }}</p>
            <a :href="webPageLink" class="og-card-link" target="_blank">Open Web Page</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OGCard',
    props: {
        imageLink: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        webPageLink: {
            type: String,
            required: true
        }

    }
}
</script>

<style scoped>
.og-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 500px;
    margin: 20px auto;
}

.og-card-image {
    width: 100%;
    height: auto;
}

.og-card-content {
    height: auto;
    padding: 15px;
}

.og-card-title {
    font-size: 1.5rem;
    margin: 0;
}

.og-card-description {
    color: #555;
}

.og-card-link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.og-card-link:hover {
    background: #0056b3;
}
</style>