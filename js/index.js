var weixin = angular.module('weixin',['ngAnimate','ngRoute']);
weixin.controller('mainCtrl',['$scope',function($scope){
	$scope.title='微信';


}])

// 全局变量
// var chatlist=[
// 				{
// 					img:'../images/a1.jpg',
// 					name:'Ally',
// 					message:'在么',
// 					jilu:[
// 					{
// 					    	xinxi:'a',
// 					    	isme:false
// 					    },
// 					    {
// 					    	xinxi:'a',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'a',
// 					    	isme:false
// 					    }, {
// 					    	xinxi:'a',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'a',
// 					    	isme:false
// 					    }

// 					]
// 				},
// 				{
// 					img:'./images/a2.jpg',
// 					name:'Blly',
// 					message:'在么',
// 					jilu:[
// 					    {
// 					    	xinxi:'asffdgdf',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'afdgfdgf',
// 					    	isme:false
// 					    }, {
// 					    	xinxi:'asfdgfdg',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'asfsfdv',
// 					    	isme:false
// 					    }

// 					]
// 				},
// 				{
// 					img:'./images/a3.jpg',
// 					name:'Clly',
// 					message:'在么',
// 					jilu:[
// 					    {
// 					    	xinxi:'aqewer',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'awrfdvd',
// 					    	isme:false
// 					    }, {
// 					    	xinxi:'awdsfvx',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'asfdsfrew',
// 					    	isme:false
// 					    }

// 					]
// 				},
// 				{
// 					img:'./images/a4.jpg',
// 					name:'Dlly',
// 					message:'在么',
// 					jilu:[
// 					    {
// 					    	xinxi:'asfdsfd',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'asfvcxvx',
// 					    	isme:false
// 					    }, {
// 					    	xinxi:'aadsfdf',
// 					    	isme:true
// 					    }, {
// 					    	xinxi:'asfdvbb',
// 					    	isme:false
// 					    }

// 					]
// 				}
// 			]

weixin.directive('uqTitle',[function(){
	return {
		restrict:'E',
		templateUrl:'views/uq-title.html'
	}
}])

weixin.directive('uqTabBar',[function(){
	return {
		restrict:'E',
		templateUrl:'views/uq-tab-bar.html'
	}
}])

// 控制域

weixin.controller('indexCtrl',['$scope',function($scope){
     $scope.list1 = chatlist;
     $scope.delete = function(zhi){
     	$scope.list1 = $scope.list1.filter(function(v,k){
     		return v !== zhi;
     	})
     }

}])
weixin.controller('index2Ctrl',['$scope',function($scope){
		$scope.list2=[
		{
			key:'A',
			people:[
				{
					name:'Ally',
					img:'',
					zhanghao:'1233333'
				},
				{
					name:'Ally',
					img:'',
					zhanghao:'1233333'
				}
			]
		},
		{
			key:'B',
			people:[
				{
					name:'Ally',
					img:'',
					zhanghao:'1233333'
				},
				{
					name:'Ally',
					img:'',
					zhanghao:'1233333'
				}
			]
		},
		{
			key:'C',
			people:[
				{
					name:'Ally',
					img:'',
					zhanghao:'1233333'
				},
				{
					name:'Ally',
					img:'',
					zhanghao:'1233333'
				}
			]
		}


	]
}])
weixin.controller('index3Ctrl',['$scope',function($scope){

}])
weixin.controller('index4Ctrl',['$scope',function($scope){

}])

// 页面切换
weixin.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller:'mainCtrl',
		templateUrl:'views/weixin.html'
	}).when('/weixin',{
		controller:'indexCtrl',
		templateUrl:'views/weixin.html'
	}).when('/weixin/:id',{
		controller:'index5Ctrl',
		templateUrl:'views/liaotian.html'
	}).when('/tongxunlu',{
		controller:'index2Ctrl',
		templateUrl:'views/tongxunlu.html'
	}).when('/faxian',{
		controller:'index3Ctrl',
		templateUrl:'views/faxian.html'
	}).when('/my',{
		controller:'index4Ctrl',
		templateUrl:'views/my.html'
	})
}])


// 通讯录首字母导航
weixin.directive('uqList',[function(){
	return {
		restrict:'E',
		templateUrl:'views/uq-list.html',
		link:function($scope,el){
		if(localStorage.scroll){
            setTimeout(function(){
              $('#tongxunlu').scrollTop(localStorage.scroll);
            },0)
          }
          var pos = {};
          $('#tongxunlu .active').each(function(){
            pos[$(this).attr('data-key')] = $(this).position().top;
          })
          el.on('click','.lists',function(){
            var top = pos[$.trim($(this).text())];
            $('#tongxunlu').animate({scrollTop:top});
            localStorage.scroll = top;
          })

		}
	}
}])


weixin.controller('index5Ctrl',['$scope','$routeParams','$list',function($scope,$routeParams,$list){
	var id = $routeParams.id;
	chatlist = $list.getAllChat();
	$scope.dfname = chatlist[id].name;
	$scope.duifang = chatlist[id].img;
	$scope.ziji = './images/a8.jpg';
	$scope.jilu = chatlist[id].jilu;

}])


// wechat.directive('uqList',[function(){
//     return {
//         restrict:'E',
//         replace:true,
//         templateUrl:'views/uq-list.html',
//         link:function($scope,el){
//           if(localStorage.scroll){
//             setTimeout(function(){
//               $('#content').scrollTop(localStorage.scroll);
//             },0)
//           }
//           var pos = {};
//           $('#lianxiren .active').each(function(){
//             pos[$(this).attr('data-key')] = $(this).position().top;
//           })
//           el.on('click','.uq-list-item',function(){
//             var top = pos[$.trim($(this).text())];
//             $('#content').animate({scrollTop:top});
//             localStorage.scroll = top;
//           })
//         }
//       }
//     }])



weixin.factory('$list',[ function(){

       var chatlist=[
				{
					img:'../images/a1.jpg',
					name:'Ally',
					message:'在么',
					jilu:[
					{
					    	xinxi:'a',
					    	isme:false
					    },
					    {
					    	xinxi:'a',
					    	isme:true
					    }, {
					    	xinxi:'a',
					    	isme:false
					    }, {
					    	xinxi:'a',
					    	isme:true
					    }, {
					    	xinxi:'a',
					    	isme:false
					    }

					]
				},
				{
					img:'./images/a2.jpg',
					name:'Blly',
					message:'在么',
					jilu:[
					    {
					    	xinxi:'asffdgdf',
					    	isme:true
					    }, {
					    	xinxi:'afdgfdgf',
					    	isme:false
					    }, {
					    	xinxi:'asfdgfdg',
					    	isme:true
					    }, {
					    	xinxi:'asfsfdv',
					    	isme:false
					    }

					]
				},
				{
					img:'./images/a3.jpg',
					name:'Clly',
					message:'在么',
					jilu:[
					    {
					    	xinxi:'aqewer',
					    	isme:true
					    }, {
					    	xinxi:'awrfdvd',
					    	isme:false
					    }, {
					    	xinxi:'awdsfvx',
					    	isme:true
					    }, {
					    	xinxi:'asfdsfrew',
					    	isme:false
					    }

					]
				},
				{
					img:'./images/a4.jpg',
					name:'Dlly',
					message:'在么',
					jilu:[
					    {
					    	xinxi:'asfdsfd',
					    	isme:true
					    }, {
					    	xinxi:'asfvcxvx',
					    	isme:false
					    }, {
					    	xinxi:'aadsfdf',
					    	isme:true
					    }, {
					    	xinxi:'asfdvbb',
					    	isme:false
					    }

					]
				},
			]

			var  x = {
				getAllChat:function(){
					return chatlist;
				}
			}
            console.log(x)
			return x;
      
  
}]);

