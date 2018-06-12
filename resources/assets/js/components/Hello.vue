<template>
    <div>
        <h3>隐藏</h3>
        <p class="hello" v-if='bool'>{{ msg }}</p>
        <hr>

        <h3>列表</h3>
        <ul>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>

        <hr>

        <h3>翻转</h3>
        <p class="hello">{{ msg }}</p>
        <h3 v-on:click="reverseMessage">翻转信息</h3>

        <hr>

        <h3>双向绑定</h3>
        <p>{{bindMessage}}</p>
        <input type="text" v-model="bindMessage">

        <hr>

        <h3>原始html渲染</h3>
        <p>{{htmlMessage}}</p>
        <span v-html="htmlMessage"></span>

        <hr>

        <button v-bind:disabled="bool">Button</button>

        <hr>
        <h3>计算属性</h3>
        <p>origin message:"{{computedMsg}}"</p>
        <p>after message:{{computedMsgFunc}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'This is a Laravel wh Vue and Element Demo.',
                bool: false,
                todos: [
                    {text: "1"},
                    {text: "2"},
                    {text: "3"},
                    {text: "4"},
                ],
                bindMessage: "",
                htmlMessage: '<p class="hello">html content</p>',
                computedMsg: '',
                firstName: 'Cai',
                lastName: 'Cheng',
            }
        },

        methods: {
            reverseMessage: function () {
                return this.msg = this.msg.split('').reverse().join('')
            }
        },

        computed: {
            computedMsgFunc: function () {
                return this.computedMsg = this.firstName+this.lastName
            }
        }
    }
</script>

<style>
    .hello {
        font-size: 2em;
        color: green;
    }
</style>