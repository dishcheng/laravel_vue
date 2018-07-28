<template>
    <div>
        <!--4.6，slot 插槽-->
        <children>
            <!--header部分-->
            <p class="header_class" slot="header">header content</p>
            <p class="footer_class" slot="footer">footer content</p>
        </children>
    </div>
</template>

<script>
    let Children = {
        template: '<div>' +
        '<slot name="header">default header</slot>' +
        '<p>content</p>' +
        '<slot name="footer">default footer</slot>' +
        '</div>'
    };
    export default {
        name: "SloTwo",
        components: {
            children: Children
        }
    }
</script>

<style scoped>

</style>