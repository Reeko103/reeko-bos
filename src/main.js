import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/resrt.css"; /// 去除默认样式
import'element-ui/lib/theme-chalk/index.css'; /// 样式
import "amfe-flexible"; //做rem适配
import './assets/css/font.css' /// 字体

import animated from 'animate.css';
Vue.use(animated)
import { Switch,Button,Input,InputNumber,Form,FormItem,MessageBox,Dialog,Tooltip,Icon,Table,TableColumn,Tabs,TabPane,Select,
  Option } from'element-ui'; /// 组件库

//使用ElementUI
Vue.use(Switch).use(Button).use(Input).use(InputNumber).use(Form).use(FormItem).use(FormItem).use(Dialog).use(Tooltip)
.use(Icon).use(Table).use(TableColumn).use(Tabs).use(TabPane).use(Select).use(Option);
Vue.prototype.$confirm = MessageBox.confirm;

//消息提示的环境配置，是否为生产环境：
//false 开发环境 ：Vue会提供很多警告来方便调试。
//true 生产环境 ：警告却没有用，反而会增加应用的体积
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV) //开发环境 development, 生产环境 production

import {generateNum} from '@/utils/public.js'; //公共的js
Vue.prototype.$generateNum = generateNum; /// 检测手机号
//  在原型链中注册，然后再需要引用的页面就可以这样拿到--调用方法：：this.$isVehicleNumber()

// 权限拦截
// import './permission'

/// 轻提示开始
import Toasts from './components/Toast'
const Toast = {
  install: function (Vue) {
    // 创建一个Vue的“子类”组件
    const ToastConstructor = Vue.extend(Toasts)
    // 创建一个该子类的实例,并挂载到一个元素上
    const instance = new ToastConstructor()
    // 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    // 在Vue的原型链上注册方法，控制组件
    Vue.prototype.$toast = (msg, duration = 1500) => {
      instance.message = msg
      instance.visible = true
      setTimeout(() => {
        instance.visible = false
      }, duration)
    }
  }
}
Vue.use(Toast)
/// 轻提示结束

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
