<template>
    <div id="demo">
        <button v-on:click="show = !show">
            切换
        </button>

        <transition name="fade"
                    @before-enter="handleBeforeEnter"
                    @enter="handleEnter"
                    @after-enter="handlerAfterEnter"
        >
            <p v-if="show">hello</p>
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
        methods: {
            handleBeforeEnter: function (el) {
                //el指transition动画包裹的的标签
                el.style.opacity = 0
            },
            //el指transition动画包裹的的标签,
            handleEnter: function (el, done) {
                Velocity(el, {opacity: 1},
                    {duration: 3000, complete: done})
            },
            handlerAfterEnter: function (el) {
                console.log('动画结束')
            },
        },
        mounted() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://cdn.bootcss.com/velocity/2.0.4/velocity.min.js';
            document.body.appendChild(s);
        },
    }
</script>

<style scoped>

</style>