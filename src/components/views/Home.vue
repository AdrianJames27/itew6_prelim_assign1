<template>
    <div>
        <PageContent title="Home Page">
            <p class="greeting-text text-center">Dangal Greetings! My name is Adrian James P. Boncales</p>
            <p class="location text-center">I am from Mamatid, Cabuyao, Laguna.</p>
            <p class="interests">
                I enjoy watching anime and playing online games, particularly those developed by 
                <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse</a>. 
                Sometimes, I read manga when I feel like it. 
                I have created a small project called Artifact RNG from Genshin Impact, developed by HoYoverse. 
                It has two variants: one is built with <a href="https://github.com/Akamine20496/artifact-rng-pwa" target="_blank" rel="noopener noreferrer">web technologies</a> 
                (HTML, CSS, jQuery, and my self-made CDN JavaScript dialog utility called <a href="https://github.com/Akamine20496/JSDialog" target="_blank" rel="noopener noreferrer">JSDialog</a>) 
                and PWA, and the other is developed using <a href="https://github.com/Akamine20496/artifact-rng-java" target="_blank" rel="noopener noreferrer">Java Swing</a>. 
                Additionally, I have created an <a href="https://github.com/Akamine20496/avatar-stat-rng" target="_blank" rel="noopener noreferrer">Avatar Stat RNG</a> from Toram Online, 
                which is also built with web technologies (HTML, CSS, jQuery, and jQuery UI), also PWA.
            </p>

            <hr>

            <h3>Others</h3>
            <p>Back-end programmer at Agroconnect Cabuyao Capstone Project</p>

            <OGCard 
                title="Artifact RNG PWA"
                description="Generate random artifact stat or input your own sub-stats to 'guess' outcomes. Available as a Progressive Web App (PWA)."
                imageLink="https://akamine20496.github.io/artifact-rng-pwa/asset/Amber_Icon512.png"
                webPageLink="https://akamine20496.github.io/artifact-rng-pwa/"
            />

            <OGCard 
                title="Avatar Stat RNG"
                description="Generate random avatar stat to your avatar costume in Toram Online."
                imageLink="https://akamine20496.github.io/avatar-stat-rng/icon/icon512.png"
                webPageLink="https://akamine20496.github.io/avatar-stat-rng/"
            />
        </PageContent>
    </div>
</template>

<script>
import OGCard from '../OGCard.vue';
import PageContent from '../PageContent.vue';

export default {
    name: 'Home',
    components: {
        PageContent,
        OGCard
    }
}
</script>

<style scoped>
.greeting-text {
    font-size: 1.2em;
    font-weight: bold;
}

.location {
    font-style: italic;
    margin-bottom: 15px;
}

.interests a {
    color: #3498db;
    text-decoration: none;
}

hr {
    margin: 10px 0;
}

.interests a:hover {
    text-decoration: underline;
}

.embedded-content {
    width: 100%;
    height: 600px;
    border-radius: 12px;
    border: 1px solid black;
}
</style>