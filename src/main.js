

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabs,Dropdown,DropdownMenu,DropdownItem,TabPane,MessageBox,Button,Alert } from 'element-ui'
import Axios from 'axios'
import Vuex from 'vuex'
import qs from "qs"
import Calendar from 'vue-calendar-component';
Vue.use(Calendar);

Vue.use(Vuex)
Vue.prototype.HOST="/api"
Vue.prototype.HOST2="/aaa"
Vue.prototype.$msgbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)

Vue.use(VueAwesomeSwiper)

var store =new Vuex.Store ({
	state:{
		idx:0,
		id:0,
		item:{},
		arr:[],
		Price:0,
		items:[{
			   	   url:require("./assets/img/cart1.png"),
			   	   title:"东北有机红谷黄小米",
			   	   info:"",
			   	   count:"",
			   	   price:45,			   	   
			   	   num:1,
			   	   total:0,
			   	   xs:false,
			   	   flag:true,
			   	   show:true,
			   	   choose:false,
			   	   	id:""
			   	   
			    },{
			   	   url:require("./assets/img/cart2.png"),
			   	   title:"东北有机养生黑米",
			   	   info:"2016秋收新东北有机养生黑米粒",
			   	   count:"2750g(5.5斤) 特产杂粮黑米包邮",
			   	   price:45,			   	   
			   	   num:1,
			   	   total:0,
			   	   xs:false,
			   	   flag:true,
			   	   show:true,
			   	   choose:false,
			   	   	id:""
			     }
			   
			   ]
			   
	},
	// 改变数据
	mutations:{
		changeSj(state){
			state.id=100
		}
	}

})



Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

Axios.interceptors.request.use(function(config) {
	if (config.method == "post") {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

Axios.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
