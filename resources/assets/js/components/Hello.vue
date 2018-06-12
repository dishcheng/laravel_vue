<template>
    <div>
        <h3>隐藏</h3>
        <p class="hello" v-if='bool'>{{ msg }}</p>
        <hr>

        <h3>列表</h3>
        <ul>
            <li v-for="(value,key) in todos">
                {{ value.text }}-{{key}}
            </li>
        </ul>
        <ul>
            <li v-for="value of todos">
                {{ value.text }}
            </li>
        </ul>

        <div v-for="value of todos">
            <div v-if="value.show==true">{{ value.text }}</div>
        </div>


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

        <hr>
        <h3>属性绑定</h3>
        <div v-bind:class="{ active: bool2 }">hello</div>

        <hr>
        <h3>条件渲染v-if</h3>
        <p>v-if(涉及DOM销毁及创建)</p>
        <h4 v-if="rand < 0.5">随机数{{rand}}小于0.5</h4>
        <h4 v-else-if="rand < 0.8">随机数{{rand}}大于0.5小于0.8</h4>
        <h4 v-else>随机数{{rand}}大于0.8</h4>

        <p>v-show(基于 CSS 进行切换)</p>
        <h4 v-show="rand < 0.5">随机数{{rand}}小于0.5</h4>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'This is a Laravel wh Vue and Element Demo.',
                bool: false,
                todos: [
                    {text: "1", show: true},
                    {text: "2", show: false},
                    {text: "3", show: true},
                    {text: "4", show: true},
                ],
                bindMessage: "",
                htmlMessage: '<p class="hello">html content</p>',
                computedMsg: '',
                firstName: 'Cai',
                lastName: 'Cheng',
                bool2: true,
                rand: Math.random()
            }
        },

        methods: {
            reverseMessage: function () {
                return this.msg = this.msg.split('').reverse().join('')
            }
        },

        computed: {
            computedMsgFunc: function () {
                return this.computedMsg = this.firstName + this.lastName
            }
        }
    }
</script>

<style>
    .hello {
        font-size: 2em;
        color: green;
    }

    .active {
        font-size: 30px;
        color: red;
    }
</style>