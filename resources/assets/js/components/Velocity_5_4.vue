<template>
    <div id="demo">
        <button v-on:click="show = !show">
            切换
        </button>

        <transition name="fade"
                    @before-enter="handleBeforeEnter"
                    @enter="handleEnter"
                    @after-enter="handlerAfterEnter"
                    @before-leave="handleBeforeLeave"
                    @leave="handleLeave"
                    @after-leave="handlerAfterLeave"
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
                el.style.color = 'red'
            },
            //el指transition动画包裹的的标签,
            handleEnter: function (el, done) {
                setTimeout(() => {
                    el.style.color = 'green';
                }, 2000);//2秒后

                setTimeout(() => {
                    done()//告诉vue，我的动画执行完了,触发after-enter
                }, 4000)//4秒后
            },
            handlerAfterEnter: function (el) {
                el.style.color = 'yellow'
            },
            handleBeforeLeave: function (el) {
               console.log('handleBeforeLeave')
            },
            handleLeave: function (el) {
                console.log('handleLeave')
            },
            handlerAfterLeave: function (el) {
                console.log('handlerAfterLeave')
            },
        }
    }
</script>

<style scoped>

</style>