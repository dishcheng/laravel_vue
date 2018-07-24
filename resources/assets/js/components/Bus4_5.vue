<template>
    <div>
        <!--4.5，非父子组件传值（bus/总线/发布订阅模式/观察者模式）-->
        <children content="Dell"></children>
        <children content="Lee"></children>
    </div>
</template>

<script>
    import Vue from 'vue';

    Vue.prototype.bus = new Vue;

    let Children = {
        //单向数据，避免修改父组件值
        data: function () {
            return {
                con: this.content
            }
        },
        props: ['content'],
        template: '<div @click="handleClick">{{con}}</div>',
        methods: {
            handleClick: function () {
                // alert(this.content)
                //向外的bus传递change，并使用生命周期mounted监听change事件
                this.bus.$emit('change', this.con)
            }
        },
        mounted: function () {
            //this作用域变更
            let this_ = this;

            //监听到change事件后执行回调
            this.bus.$on('change', function (msg) {
                //这样会弹出两次，因为两个都监听了
                // alert(msg)
                this_.con = msg;
            })
        }
    };
    export default {
        name: "Bus",
        components: {
            children: Children
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>