<script>
export default {
    data() {
        return {
            expanded: true
        }
    }
}
</script>

<template>
    <div class="navbar">
        <div class="max" v-if="expanded == true">EXPANDED</div>
        <div class="min">
            <p class="brand hero-font">Eclipse</p>
            <p class="brand hero-font">Galerie</p>
        </div>
    </div>
</template>

<style>
    .navbar {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 15vh;
        background: var(--bg-color-transparent);
        backdrop-filter: blur(1.5em);
        -webkit-backdrop-filter: blur(1.5em);
        align-items: center;
        padding: 15px;
        justify-content: space-between;
        border-bottom: 1px var(--brand-color) solid;
        flex-direction: column;
    }

    .min {
        display: flex;
        width: 100vw;
        flex-direction: row;
        padding: 15px;
        justify-content: space-between;
    }

    .brand {
        color: white;
        font-size: 2.5em;
    }
</style>