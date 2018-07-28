<template>
    <div>
        <!--4.7，slot 作用域插槽-->
        <children>aa
            <template slot-scope="propqs">
                <h1> {{propqs.itemaa}}</h1>
            </template>
        </children>
    </div>
</template>

<script>
    let Children = {
        data: function () {
            return {
                list: [1, 2, 3, 4]
            }
        },
        template: '<div>' +
        '<ul>' +
        '<slot v-for="item of list" :itemaa="item"></slot>' +
        '</ul>' +
        '</div>'
    };
    export default {
        name: "SloThree",
        components: {
            children: Children
        }
    }
</script>

<style scoped>

</style>