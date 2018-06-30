<template>
    <div>
        <h1>样式绑定 :class</h1>
        <p @click="changeStyle" :class="{isActive:boole_value}">第一种：点击我切换样式</p>
        <p @click="changeStyle2" :class="[classValue]">第二种：点击我切换样式</p>
        <p @click="changeStyle3" :style="styleValue">第三种：点击我切换样式</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                boole_value: false,
                classValue: "",
                styleValue: {
                    color: "black"
                }
            }
        },
        methods: {
            changeStyle: function () {
                this.boole_value = !this.boole_value
            },
            changeStyle2: function () {
                this.classValue = this.classValue === "isActive" ? "" : "isActive";
                // if (this.classValue==="isActive") {
                //     this.classValue=""
                // }else{
                //     this.classValue="isActive"
                // }
            },
            changeStyle3: function () {
                this.styleValue.color = this.styleValue.color === "black" ? "red" : "black";
            }
        }
    }
</script>

<style scoped>
    .isActive {
        color: red;
    }
</style>