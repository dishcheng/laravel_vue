<template>
    <div>
        <h1>vue表单</h1>

        <h4>input</h4>
        <p>{{inputValue}}</p>
        <input type="text" v-model.lazy.trim.number="inputValue" placeholder="请填写">
        <hr>

        <h4>textarea</h4>
        <p style="white-space: pre">{{textareaValue}}</p>
        <textarea v-model="textareaValue" placeholder="请填写"></textarea>
        <hr>

        <h4>radio</h4>
        <p>{{radioCheckedValues}}</p>
        <div v-for="valuess of radioValues">
            <input type="radio" v-bind:value="valuess" v-model="radioCheckedValues">{{valuess}}
        </div>
        <hr>

        <h4>checkbox</h4>
        <p>{{checkCheckedValues}}</p>
        <div v-for="valuess of checkValues">
            <input type="checkbox" v-bind:value="valuess" v-model="checkCheckedValues">{{valuess}}
        </div>
        <hr>


        <h4>select</h4>
        <p>{{selectedValues}}</p>
        <div>
            <select v-model="selectedValues">
                <option v-for="valuess of selectValues" v-bind:value="valuess" >{{valuess}}</option>
            </select>
        </div>
        <hr>


    </div>
</template>

<script>
    export default {
        name: "Form",
        data() {
            return {
                inputValue: "",//text
                textareaValue: "",//textarea
                checkValues: {
                    optinon1: 1,
                    optinon2: 2,
                    optinon3: 3,
                    optinon4: 4,
                },
                radioValues: [
                    1,
                    2,
                    3,
                    4,
                ],
                selectValues: [
                    1,
                    2,
                    3,
                    4,
                ],

                radioCheckedValues: "",
                checkCheckedValues: [],
                selectedValues:""

            }
        },
        methods: {

        }
    }
</script>

<!--scoped 标识仅仅在本组件中生效，去掉scoped全局生效-->
<style scoped>
    .colorStyle {
        color: red
    }
</style>