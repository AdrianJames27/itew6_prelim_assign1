<template>
    <div class="card">
        <!-- Image Section -->
        <div class="image-section">
            <slot name="image" />
        </div>
        <!-- Text Section -->
        <div class="description-section">
            <slot name="name" />
            <slot name="description" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style scoped>
.card {
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}

.image-section {
    flex: 0 0 auto;
    margin-right: 16px;
}

.image-section img {
    max-width: 100px;
    height: auto;
    border-radius: 4px;
}

.description-section {
    flex: 1;
}
</style>
