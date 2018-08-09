<template>
    <div id="demo">
        <button v-on:click="show = !show">
            切换
        </button>

        <!--mode="out-in"先隐藏后进入-->
        <!--mode="in-out"先进入后隐藏-->
        <transition name="fade" mode="in-out">
            <div v-if="show" key="hello">hello</div>
            <div v-else key="world">world</div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Velocity",
        data() {
            return {
                show: true
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
</style>