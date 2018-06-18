<template>
    <div>
        <input class="colorStyle" type="text" v-model="inputValue"/>
        <button v-on:click="handleSubmit">提交</button>

        <ul>
            <!--:content="value"将value值传到子组件，以content为标志-->
            <!--:key="index" 加这个不然报错-->
            <!--@delete="" 监听子组件 delete事件-->
            <todo-item
                    v-for="(value,index) of list"
                    :key="index"
                    :content="value"
                    :index="index"
                    @delete="doDelete"
            ></todo-item>

        </ul>
    </div>
</template>

<script>
    import TodoItem from './TodoItem';

    export default {
        name: "TodoList",
        components: {//注册组件
            'todo-item': TodoItem
        },
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
                this.list.splice(index,1)
            }
        }
    }
</script>

<!--scoped 标识仅仅在本组件中生效，去掉scoped全局生效-->
<style scoped>
    .colorStyle{
        color:red
    }
</style>