<template>
    <div>
        <!--4.6，slot 插槽-->
        <children>
            <!--要放入子组件中得到内容-->
            <h1>world</h1>
        </children>
    </div>
</template>

<script>
    let Children = {
        template:
        '<div>' +
        '<p>Hello</p>' +
        // 插槽放置位置
        '<slot>默认内容，上方插槽中有数据不会显示这个，children没内容会显示这个</slot>' +
        '</div>',
    };
    export default {
        name: "Slo",
        components: {
            children: Children
        }
    }
</script>

<style scoped>

</style>