<template>
    <div>
        <!--带冒号标识是数字，后面双引号内的内容是表达式-->
        <children :cou="first" @inc="getDataFromChildren"></children>
        <!--带冒号标识是数字-->
        <children :cou="second" @inc="getDataFromChildren"></children>
        <div>{{total}}</div>

        <!--不带冒号标识是second字符串-->
        <children cou="second"></children>
    </div>
</template>

<script>
    let Children = {
        //接收父组件参数
        props: ['cou'],
        data: function () {
            return {
                number: this.cou
            }
        },
        //双引号使用
        template: "<div @click='handclick'>{{number}}</div>",
        methods: {
            handclick: function () {
                //传来的cou参数被点击后累加，能用但是控制台会有警告提示
                //原因，vue中有单向数据流的概念
                //父组件可以随意通过属性的形式传递参数，
                // 但是子组件绝对不能反过来修改父组件传递过来的参数
                //相当于父组件传递过来的参数在子组件中是自读属性
                // （不然比如父组件传递过来cou参数是引用形式的1，子组件累加后变成2，
                // 然后父组件cou参数某条件下又变成了3，然后这个cou在其他组件也被使用）
                //需要通过子组件引用父组件传递的值
                // this.cou++//错误的用法
                this.number++;
                //向外触发inc事件 使用的时候 @inc="父组件的方法"
                //可以向外传递n个参数，this.$emit('inc', 1)类似于inc(step)
                // this.$emit('inc',1,2)类似于inc(step,step2)
                this.$emit('inc', 1)
            }
        }
    };
    export default {
        name: "Props",
        components: {
            children: Children
        },
        data() {
            return {
                first: 1,
                second: 1,
                total: 2,
            }
        },
        methods: {
            handleSubmit() {
                this.list.push(this.inputValue);
                this.inputValue = "";
            },
            getDataFromChildren(step, step2) {
                this.total += step
            }
        }
    }
</script>

<!--scoped 标识仅仅在本组件中生效，去掉scoped全局生效-->
<style scoped>
    .colorStyle {
        color: red
    }
</style>