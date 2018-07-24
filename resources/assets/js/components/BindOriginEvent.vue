<template>
    <div>
        <!--4.4，不推荐的做法-->
        <!--直接在组件中这样调用click事件是不起作用的-->
        <children @click="handleClick"></children>
    </div>
</template>

<script>
    let Children = {
        //现在的逻辑是在子组件中触发childClick方法，并 this.$emit('click')向外触发click事件，父组件监听handleClick方法，完成alert()
        template: '<div @click="childClick">children</div>',
        methods:{
            childClick:function () {
                /*只有这样向外触发click才行*/
                this.$emit('click')
            }
        }
    };
    export default {
        name: "BindOriginEvent",
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