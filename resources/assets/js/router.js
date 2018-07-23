import Vue from 'vue';
import Router from 'vue-router';
import Example from './components/ExampleComponent.vue';
import Hello from './components/Hello.vue';
import TodoList from './components/TodoList.vue';
import DataFromApi from './components/DataFromApi.vue';
import PostData from './components/PostData.vue';
import Transition from './components/Transitions.vue';
import VueHooook from './components/VueHooook.vue';
import SetAndGet from './components/SetAndGet.vue';
import StyleBind from './components/StyleBind.vue';
import UseComponentDetail from './components/UseComponentDetail.vue';
import Props from './components/Props.vue';
import PropsValidator from './components/PropsValidator.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/example',
            name: 'example',
            component: Example
        },
        {
            path: '/todoList',
            name: 'TodoList',
            component: TodoList
        },
        {
            path: '/DataFromApi',
            name: 'DataFromApi',
            component: DataFromApi
        },
        {
            path: '/PostData',
            name: 'PostData',
            component: PostData
        },
        {
            path: '/Transition',
            name: 'Transition',
            component: Transition
        },
        {
            path: '/VueHooook',
            name: 'VueHooook',
            component: VueHooook
        },
        {
            path: '/setAndGet',
            name: 'setAndGet',
            component: SetAndGet
        },
        {
            path: '/StyleBind',
            name: 'StyleBind',
            component: StyleBind
        },
        {
            // 4.1
            path: '/UseComponentDetail',
            name: 'UseComponentDetail',
            component: UseComponentDetail
        },
        {
            //4.2
            path: '/props',
            name: 'Props',
            component: Props
        },
        {
            //4.3
            path: '/propsValidator',
            name: 'propsValidator',
            component: PropsValidator
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