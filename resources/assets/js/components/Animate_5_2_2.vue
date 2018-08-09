<template>
    <div id="demo">
        <button v-on:click="show = !show">
            切换
        </button>

        <!--必须加animate 加动画效果名字-->
        <transition name="fadeaa"
                    enter-active-class="animated swing"
                    leave-active-class="animated shake">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>
<!--css动画库-->
<script>
    export default {
        name: "Animate5_2_2",
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
    /**
    引入animate css库
     */
    @import "https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css";
</style>