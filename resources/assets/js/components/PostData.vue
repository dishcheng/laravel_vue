<template>
    <div id="postData">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button @click="send">发送AJAX请求</button>
    </div>
</template>
<script>
    export default {
        name: "PostData",
        data() {
            return {
                username:"",
                password:"",
            }
        },
        methods: {
            send() {
                axios.post('http://yryl.hooook.com/api/auth/login', {
                    username: this.username,
                    password: this.password
                }).then(function (response) {
                    console.log(response);
                });
            }
        }
    }
</script>

<style scoped>

</style>