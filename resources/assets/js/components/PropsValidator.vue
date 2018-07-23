<template>
    <div>
        <!--4.3组件参数校验与非props特性-->
        <!--组件参数校验即参数约束，如子组件要求父组件要求必须传递字符串-->
        <children content="hello"></children>
        <!--这个控制台会警告Invalid prop: type check failed for prop "content". Expected String, got Number.-->
        <!--这样传过去的是数字123-->
        <children :content="123"></children>
        <!--这样传过去的是123字符串-->
        <children :content="'1231aa23'"></children>

        <!--这样传过去的是{a:1}对象-->
        <children :content="{a:1}"></children>

        <!--不传content，如果设置required:true，且不设置默认值则警告Missing required prop: "content"-->
        <children></children>


        <!--非props特性-->
        <!--情况1：父组件向子组件传递content，并且子组件props中接受了content这就是props特性，不接受则是非props第一种情况-->
        <!--情况2：不接受会显示在div标签中类似于<div content="NotSpecial"></div>-->
        <not-special></not-special>
    </div>
</template>

<script>
    let Children = {
        //接收父组件参数
        // props: ['content'],//如果带有约束就不用数组了，用对象的形式
        props: {
            // content: String//标识子组件接收到的content必须是个String类型
            //content: Number//标识子组件接收到的content必须是个Number类型
            // content: [Number,String,Object]//标识子组件接收到的content可以使Number或String
            content: {
                // type:String,
                type: [String, Number, Object],
                // required: true,//必填
                // default: "default value",
                validator: function (value) {
                    //相当于一个正则,要求content长度大于5
                    //Invalid prop: custom validator check failed for prop "content"
                    //如果返回true通过验证否则不通过
                    return (value.length > 5)
                }
            }
        },
        data: function () {
            return {}
        },
        //双引号使用
        template: "<div>{{content}}</div>",
        methods: {
            handClick: function () {

            }
        }
    };


    let NotSpecial ={
        template: "<div>NotSpecial</div>",
    };
    export default {
        name: "Props",
        components: {
            children: Children,
            NotSpecial: NotSpecial
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