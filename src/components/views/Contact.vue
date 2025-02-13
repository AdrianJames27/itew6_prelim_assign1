<template>
    <div>
        <PageContent title="Contact Page">
            <h3 class="mt-20">These are my contact information/s</h3>

            <div class="contact-info">
                <div class="contact-item">
                    <span>
                        <img src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000">
                    </span>
                    <span>https://www.facebook.com/kiyotakajames/</span>
                </div>

                <div class="contact-item">
                    <span>
                        <img src="https://img.icons8.com/?size=100&id=X0mEIh0RyDdL&format=png&color=000000">
                    </span>
                    <span>bonbon22135@gmail.com</span>
                </div>
            </div>
        </PageContent>
    </div>
</template>

<script>
import PageContent from '../PageContent.vue';

export default {
    name: 'Contact',
    components: {
        PageContent
    }
}
</script>

<style scoped>
.contact-page {
    padding: 20px;
    background-color: #f9f9f9;
}

.mt-20 {
    margin-top: 20px;
}

.contact-info {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 18px;
}

.contact-item span {
    color: #333;
}
</style>
