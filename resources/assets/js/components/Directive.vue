<template>
    <div>
        <h1>自定义指令</h1>
        <p>除了默认设置的核心指令( v-model 和 v-show ), Vue 也允许注册自定义指令。</p>
        <input v-focus>
    </div>
</template>

<script>
    export default {
        name: "Directive",
        data() {
            return {
                inputValue: "",//text
                textareaValue: "",//textarea
            }
        },
        methods: {},
        //全局自定义命令在app.js中注册
        // // 注册一个局部的自定义指令 v-focus
        // directives: {
        //     // 注册一个局部的自定义指令 v-focus
        //     focus: {
        //         // 指令的定义
        //         inserted: function (el) {
        //             // 聚焦元素
        //             el.focus()
        //         }
        //     }
        // }
    }
</script>

<!--scoped 标识仅仅在本组件中生效，去掉scoped全局生效-->
<style scoped>
    .colorStyle {
        color: red
    }
</style>