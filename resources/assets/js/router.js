import Vue from 'vue';
import Router from 'vue-router';
import Example from './components/ExampleComponent.vue';
import Hello from './components/Hello.vue';
import TodoList from './components/TodoList.vue';
import DataFromApi from './components/DataFromApi.vue';
import PostData from './components/PostData.vue';
import VueHooook from './components/VueHooook.vue';
import SetAndGet from './components/SetAndGet.vue';
import StyleBind from './components/StyleBind.vue';
import UseComponentDetail from './components/UseComponentDetail.vue';
import Props from './components/Props.vue';
import PropsValidator from './components/PropsValidator.vue';
import Form from './components/Form.vue';
import Directive from './components/Directive.vue';
import Redirect from './components/Redirect.vue';
import BindOriginEvent from './components/bindOriginEvent.vue';
import BindOriginEvent2 from './components/bindOriginEvent2.vue';
import Bus4_5 from './components/Bus4_5.vue';
import Slot from './components/Slot4_6.vue';
import Slot_2 from './components/Slot4_6_2.vue';
import Slot_3 from './components/Slot_4_7.vue';
import componentOne from './components/Component_4_8.vue';
import Transition from './components/Transition_5_1.vue';
import Animate from './components/Animate_5_2.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/example',
            name: 'example',//别名
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
        {
            path: '/form',
            name: 'Form',
            component: Form
        },
        {
            path: '/directive',
            name: 'Directive',
            component: Directive
        },
        {
            path: '/redirect',
            name: 'redirect',
            component: Redirect
        },
        {
            //4.4
            path: '/bindOriginEvent',
            name: 'bindOriginEvent',
            component: BindOriginEvent
        },
        {
            //4.4
            path: '/bindOriginEvent2',
            name: 'bindOriginEvent2',
            component: BindOriginEvent2
        },
        {
            //4.5
            path: '/Bus',
            name: 'Bus',
            component: Bus4_5
        },
        {
            //4.6
            path: '/slot',
            name: 'Slot',
            component: Slot
        },
        {
            //4.6 2
            path: '/slot_2',
            name: 'Slot_2',
            component: Slot_2
        },
        {
            //4.7
            path: '/slot_3',
            name: 'Slot_3',
            component: Slot_3
        }, {
            //4.8
            path: '/componentOne',
            name: 'componentOne',
            component: componentOne
        },
        {
            //5.1
            path: '/transition',
            name: 'Transition',
            component: Transition
        },
        {
            //5.2
            path: '/animate',
            name: 'animate',
            component: Animate
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