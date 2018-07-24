<template>
    <div>
        <!--4.4，推荐的做法，@click.native监听原生click事件-->
        <children @click.native="handleClick"></children>
    </div>
</template>

<script>

    let Children = {
        template: '<div>children</div>',
    };
    export default {
        name: "BindOriginEvent2",
        components: {
            children: Children
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            handleClick: function () {
                alert('alert')
            }
        }
    }
</script>

<style scoped>

</style>