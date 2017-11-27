import Vue from "vue"
import Router from "vue-router"

// 
import Start from "../components/start"
// 首页
import Index from "../components/index/index"

import Hot from "../components/index/hot"
import Navs from '../components/index/navs'
import Ceyi from "../components/index/Ceyi"
import News from "../components/index/news"
import Data from '../components/index/ module/data'

// 食疗坊
import Diet from '../components/diet'

import DietDetail from '../components/diet-detail'
import Article from '../components/article'

//私人订制
import Home from '../personal/home'

import Calendar from '../personal/Calendar'
import Nurse from '../personal/nurse'

//购物车
import Cart from "../shopping/cart"
import Order from "../shopping/order"
import Adress from "../shopping/adress"
import NewAdress from "../shopping/NewAdress"

// 我的
import MineIndex from '@/pages/mineIndex'

import Health from "@/pages/details/health"
import People from "@/pages/details/people"
import Orders from "@/pages/details/order"
import Collect from "@/pages/details/collect"
import Account from "@/pages/details/account"
import Message from "@/pages/details/message"
import Help from "@/pages/details/help"
import Service from "@/pages/details/service"
import Sets from "@/pages/details/set"

import Informate from "@/pages/details/tests/informate"
import Test from "@/pages/details/tests/test"
import Select from "@/pages/details/tests/select"
import People1 from "@/pages/details/tests/people1"
import Orderdetail from "@/pages/details/tests/orderdetail"
import Findpwd from "@/pages/details/tests/findpwd"
import Resetpwd from "@/pages/details/tests/resetpwd"
import Register from "@/pages/details/tests/register"

import People3 from "@/pages/details/tests/three/people3"
import Name from "@/pages/details/tests/three/name"
import Professional from "@/pages/details/tests/three/professional"
import Simply from "@/pages/details/tests/three/simply"
import Message1 from "@/pages/details/tests/three/message1"
import Food from "@/pages/details/tests/three/food"
import Food1 from "@/pages/details/tests/three/food1"


Vue.use(Router)

export default new Router({
	linkActiveClass:"active",
	routes: [

		{
			path: "/",
			name: "start",
			component: Start,
		},
	// 首页的四个跳转
		{
			path: "/index",
			name: "index",
			component: Index,
		},{
			path: "/diet",
			name: "diet",
			component: Diet
		},{
	      path:'/home',
	      name:'Home',
	      component:Home
	    },{
			path:"/mineIndex",
			name:"mineIndex",
			component:MineIndex
		},
		// 首页二级跳转
		{
			path: "/hot",
			name: "hot",
			component: Hot	
		},{
			path: "/navs",
			name: "Navs",
			component: Navs
		},{
			path: "/data",
			name: "data",
			component: Data
		},
		// 食疗坊二级跳转
		{
			path: "/detail/:id",
			name: "detail",
			component: DietDetail
		},{
			path:"/article",
			name:"article",
			component:Article
		},
		// 私人定制二级跳转
		{
	      path:'/nurse',
	      name:'Nurse',
	      component:Nurse
	    },{
	      path:'/calendar',
	      name:'Calendar',
	      component:Calendar
	    },
	    // 我的二级跳转
	    {
    	  path:"/health",
    	  name:"health",
    	  component:Health
    	},{
	      path:"/people",
	      name:"people",
	      component:People
	      },{
    		path:"/orders",
    		name:"orders",
    		component:Orders
    	  },{
    		path:"/collect",
    		name:"collect",
    		component:Collect,
    		redirect: "/collect/food1",
	    		children: [{
					path: "food",
					name: "food",
					component: Food
				},{
					path: "food1",
					name: "food1",
					component: Food1
				}],
    	  },{
	        path:"/account",
	        name:"account",
	        component:Account
	      },{
    		path:"/message",
    		name:"message",
    		component:Message
    	  },{
    	  	path:"/message1",
    	  	name:"message1",
    	  	component:Message1
    	  },{
	        path:"/help",
	        name:"help",
	        component:Help
	      },{
	        path:"/service",
	        name:"service",
	        component:Service
	      },{
	        path:"/set",
	        name:"set",
	        component:Sets
	      },
	      // 首页三级跳转
	      {
			path: "/hot/ceyi",
			name: "Ceyi",
			component: Ceyi
		  },
		  // 食疗坊三级跳转
		  // 私人定制三级跳转
		  // 我的三级跳转
		  {
	        path: "/informate",
	        name: "informate",
	        component: Informate
	      },{
	        path: "/test",
	        name: "test",
	        component: Test
	      },{
	        path: "/select",
	        name: "select",
	        component: Select
	      },{
	        path:"/people1",
	        name:"people1",
	        component:People1
	      },{
	        path:"/orderdetail",
	        name:"orderdetail",
	        component:Orderdetail
	      },{
	        path:"/findpwd",
	        name:"findpwd",
	        component:Findpwd
	      },{
	        path:"/resetpwd",
	        name:"resetpwd",
	        component:Resetpwd
	      },{
	        path:"/register",
	        name:"register",
	        component:Register
	      },
	      // 首页的四级跳转
	      {
			path: "/hot/ceyi/news",
			name: "News",
			component: News
		  },
		  //我的四级跳转
		  {
	        path:"/people3",
	        name:"people3",
	        component:People3
	      },{
	        path:"/name",
	        name:"name",
	        component:Name
	      },{
	        path: "/professional",
	        name: "professional",
	        component: Professional
	      },{
	        path: "/simply",
	        name: "simply",
	        component: Simply
	      },
	      // 购物车
	       {
		      path:'/cart',
		      name:'Cart',
		      component:Cart
		    },
		    {
		      path:'/order',
		      name:'Order',
		      component:Order
		    },
		    {
		      path:'/adress',
		      name:'Adress',
		      component:Adress
		    },
		    {
		      path:'/newAdress',
		      name:'NewAdress',
		      component:NewAdress
		    }
    ]
})

