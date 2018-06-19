<template>
    <div>
        <ul>
            <li v-for="value in posts">
                {{value.title}}
                <p>{{value.body}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DataFromApi",
        data () {
            return {
                posts: []
            }
        },
        created () {
            let vm = this;
            // Fetch our array of posts from an API
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    vm.posts = data
                })
        }
    }
</script>

<style scoped>

</style>