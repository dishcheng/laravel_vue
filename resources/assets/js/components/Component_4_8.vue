<template>
    <div>
        <!--4.8，动态作用域-->
        <!--<children-one></children-one>-->
        <!--<children-two></children-two>-->

        <!--component是vue自带的标签，指动态组件，然后用is绑定数据，具体用哪个组件取的是:is=""里面的值-->
        <component :is="whitch_com"></component>
        <button @click="changeComponent">切换显示组件</button>
    </div>
</template>

<script>
    let Children_one = {
        //这种切换实际上当组件children-one切换到children-two时，会将children-one销毁掉，来回销毁的那种，会耗费一定性能
        template: "<div>child_one</div>",

        //在这里加上v-once会将这个组件放到内存中，切换的时候直接取，性能更高
        //once对于静态内容的展示有很大益处
        // template: "<div v-once>child_one</div>",
    };
    let Children_two = {
        //这种切换实际上当组件children-one切换到children-two时，会将children-one销毁掉，来回销毁的那种，会耗费一定性能
        template: "<div>child_two</div>",
        //在这里加上v-once会将这个组件放到内存中，切换的时候直接取，性能更高
        // template: "<div v-once>child_two</div>",
    };
    export default {
        name: "component_one",
        components: {
            "children-one": Children_one,
            "children-two": Children_two
        },
        data: function () {
            return {
                whitch_com: 'children-one'
            }
        },
        methods: {
            changeComponent: function () {
                this.whitch_com =
                    //三元运算符
                    (this.whitch_com === "children-one" ? 'children-two' : "children-one");
            }
        }
    }
</script>

<style scoped>

</style>