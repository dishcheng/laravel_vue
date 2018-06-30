<template>
    <div>
        <h1>vue生命周期函数</h1>
        <p>生命周期函数就是vue实例在某个时间点会自动执行的函数</p>
    </div>
</template>

<script>
    export default {
        name: "VueHooook",
        data() {
            return {
                inputValue: "",
                list: []
            }
        },
        methods: {
            handleSubmit() {
                this.list.push(this.inputValue);
                this.inputValue = "";
            },
            doDelete(index) {
                this.list.splice(index, 1)
            }
        },

        beforeCreate: function () {
            console.log('beforeCreate')
        },

        created: function () {
            console.log('created')
        },
        beforeMount: function () {
            console.log(this.$el);
            console.log('beforeMount')
        },
        mounted: function () {
            console.log(this.$el);
            console.log('mounted')
        }
    }
</script>

<!--scoped 标识仅仅在本组件中生效，去掉scoped全局生效-->
<style scoped>
    .colorStyle {
        color: red
    }
</style>