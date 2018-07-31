<template>
    <div id="demo">
        <button v-on:click="show = !show">
            切换
        </button>

        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>


        <transition name="fadeaa"
                    enter-active-class="active"
                    leave-active-class="leave">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Animate5_2",
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
    @keyframes bounce-in {
        /*刚开始的时候是给定大小的0倍*/
        0% {
            transform: scale(0)
        }
        /*进行到一半的时候是给定大小的1.5倍*/
        50% {
            transform: scale(1.5)
        }
        /*进行到一半的时候是给定大小的1倍*/
        1000% {
            transform: scale(1)
        }
    }

    .fade-enter-active {
        /*避免动画过程中变形，显示不正常*/
        transform-origin: left center;
        /*一秒内执行上面的bounce-in动画*/
        animation: bounce-in 1s;
    }

    .fade-leave-active {
        /*避免动画过程中变形，显示不正常*/
        transform-origin: left center;
        /*推出的时候反向执行bounce-in动画*/
        animation: bounce-in reverse 1s;
    }

    /*enter-active-class简写*/
    .active {
        /*避免动画过程中变形，显示不正常*/
        transform-origin: left center;
        /*一秒内执行上面的bounce-in动画*/
        animation: bounce-in 1s;
    }

    /*leave-active-class简写*/
    .leave {
        /*避免动画过程中变形，显示不正常*/
        transform-origin: left center;
        /*推出的时候反向执行bounce-in动画*/
        animation: bounce-in reverse 1s;
    }
</style>