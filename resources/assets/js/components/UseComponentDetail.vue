<template>
    <div>
        <table>
            <tbody>
            <!--tbody里面只能用tr td-->
            <!--tr现在指的就是row组件-->
            <!--使用is属性，让tr变成row组件-->
            <tr is="row"></tr>
            <tr is="row"></tr>
            <tr is="row"></tr>
            <tr is="row"></tr>
            </tbody>
        </table>

        <ul>
            <li is="row_data"></li>
            <li is="row_data"></li>
            <li is="row_data"></li>
        </ul>

        <!--vue中操作dom-->
        <div ref="hello" @click="doDom">点我弹出</div>
        <!--父组件监听子组件change向外发送的change事件，执行父组件doChange方法-->
        <counter ref="one" @change="doChange"></counter>
        <counter ref="two" @change="doChange"></counter>
        {{parent_origin}}
    </div>
</template>

<script>
    export default {
        components: {//注册组件
            row: {
                template: '<tr><td>111</td></tr>'//点击时传递通过$emit子元素传递给父元素调用 addactive方法（不能使用驼峰写法）
            },
            row_data: {
                data: function () {
                    return {
                        content: '子组件中定义data的方法，data必须是一个函数而不能是一个对象，子组件必须是以函数的方式赋值'
                    }
                },
                template: '<li>{{content}}</li>'
            },

            counter: {
                data: function () {
                    return {
                        origin: 0
                    }
                },
                template: '<div @click="handleClick">{{origin}}</div>',
                methods: {
                    handleClick: function () {
                        this.origin++;
                        //触发handleClick方法时向外触发change事件
                        this.$emit('change')
                    }
                }
            }
        },


        data() {
            return {
                parent_origin: 0
            }
        },
        methods: {
            doDom: function () {
                let doDom = this.$refs.hello;
                alert(doDom.innerHTML)
            },
            doChange: function () {
                // alert(this.$refs.one.origin);
                // alert(this.$refs.two.origin)
                this.parent_origin = this.$refs.one.origin + this.$refs.two.origin
            }
        }
    }
</script>

<style scoped>
    .isActive {
        color: red;
    }
</style>