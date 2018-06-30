<template>
    <div>
        {{fullName}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: 'Cai',
                lastName: 'Cheng',
            }
        },
        computed: {
            fullName: {
                get: function () {
                    return this.firstName + " " + this.lastName
                },
                //set可以接收参数
                //在控制台中可以使用(script形式引入)vm.fullName="wang wang"
                set: function (value) {
                    console.log("定义fullName时收到的参数：" + value);
                    let val = value.split(' ');//将收到的值变成数组
                    this.firstName = val[0];//修改firstName的值
                    this.lastName = val[1];//修改lastName的值
                }
            }
        },
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