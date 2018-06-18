<template>
    <li @click='handleDelete'>{{content}}-{{index}}</li>
</template>

<script>
    export default {
        props: ['content', 'index'],
        // name: "TodoItem"
        methods: {
            handleDelete: function () {
                // alert(this.index)
                this.$emit('delete',this.index)//子组件向父组件通信，delete事件
            }
        }
    }
</script>

<style scoped>

</style>