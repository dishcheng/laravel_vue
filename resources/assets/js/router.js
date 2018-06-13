import Vue from 'vue';
import Router from 'vue-router';
import Example  from './components/ExampleComponent.vue';
import Hello from './components/Hello.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/example',
            name:'example',
            component: Example
        },
        // {
        //     path: '/admin',
        //     name:'admin',
        //     redirect:'/admin/index',
        //     component: App,
        //     children:[
        //         { path:'index', component: Page}
        //
        //     ]
        // }
    ]
})