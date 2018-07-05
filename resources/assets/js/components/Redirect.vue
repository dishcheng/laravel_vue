<template>
    <div>
        <h1>跳转</h1>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/form">Go to Form</router-link>
    </div>
</template>

<script>
    export default {
        name: "Redirect",
        data() {
            return {
            }
        },
    }
</script>

<!--scoped 标识仅仅在本组件中生效，去掉scoped全局生效-->
<style scoped>
    .colorStyle {
        color: red
    }
</style>