(function (Vue) {
	// 本地存储数据时用到的key
	const STORAGE_KEY = "items-vue";
	// 进行本地存储数据或获取数据
	const itemStorage={
		// 获取数据
		fetch(){
			// JSON.parse():将JSON形式的字符串转化成数组或对象
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
		},
		// 保存数据
		save(items){
			// 将获取到的数组转化成JSON形式的字符串
			localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
		}
	}
	const items=[
		{
			id:1, //主键
			content:"HTML",//输入的内容
			completed:false//是否完成
		},
		{
			id:2, //主键
			content:"CSS",//输入的内容
			completed:false//是否完成
		},
		{
			id:3, //主键
			content:"JS",//输入的内容
			completed:true//是否完成
		},
	];
	// 注册全局自定义指令
	Vue.directive('app-focus',{
		inserted(el,binding){
			el.focus();
		},
		update(el,binding){
			if(binding.value){
				el.focus();
			}
		}
	})
	let vm=new Vue({
		el:'#todoapp',
		data:{
			//items, //ES6语法 相当于items:items,如果在对象中，key的名字和value的名字一样的话，就可以简写成一个
			items:itemStorage.fetch(),//从本地数据库中获取数据
			currentItem:null,  //记录要编辑的任务项
			filterStatus:"all" //用于接收路由变化状态值
		},
		// 定义监听器
		watch:{
			// items:function(newValue,oldValue){
			// 	console.log('watch',newValue)
			// }

			// 为了发现对象内部值的变化，可以在选项参数中指定 deep: true。注意监听数组的变更不需要这么做。
			items:{
				deep:true,//深度监听对象中属性的变化
				handler:function(newItems,oldItems){
				itemStorage.save(newItems);
			}
			}
		},
		// 定义计算属性
		computed:{
			// 剩余未完成的任务数量
			remaining(){
				// 数组的filter方法，会把数组中满足return后面的条件的元素一个一个的返回
				// unItem存放的就是过滤之后的所有未完成的任务项，他是一个数组
				// item.completed代表的是已完成的，我们想要未完成的，所以进行一个取反
				// 这个filter方法执行完毕之后就会返回一个装有未完成的任务项的数组
				const unItem = this.items.filter(function(item){
					return !item.completed;
				})
				return unItem.length;
			},
			// 切换所有状态，控制全选按钮是否勾选
			toggleAll:{
				// 当任务列表中的状态发生更改之后（小按钮），就更新全选按钮的状态
				get(){
					// console.log("get",this.remaining);
					return this.remaining === 0;
				},
				// 当全选按钮状态发生更改之后，就将任务列表的状态更新
				set(newStatus){
					// console.log("set",newStatus);
					/*ES6之前的写法
					this.items.foreach(function(item){
						
					}) */
					this.items.forEach((item)=>{
						item.completed = newStatus;
					})
				}
			},
			// 根据下面的all，active，completed三个按钮不同点击状态过滤显示不同的列表
			filterItem(){
				switch (this.filterStatus) {
					case "active":
						return this.items.filter(item => !item.completed)
						break;
					case "completed":
						return this.items.filter(item => item.completed)
						break;
					default:
						return this.items;
						break;
				}
			}
		},
		methods:{
			addItem(event){ //ES6语法 相当于addItem:function(){}
				// 1.获取文本输入框里的内容
				// event获取当前原生的DOM对象，即input输入框
				console.log(event.target.value); //获取输入框里的值
				const content = event.target.value.trim();  //trim方法是去掉字符串中的空格

				/*
					var str = "     as   ";
					console.log(str);		  //     as   
					console.log(str.trim());  //as
				*/


				// 2.判断输入框里的内容是否为空，如果为空就什么都不做
				if(!content.length){  //content.length==0的话，判断条件为false，取反即为true，因为输入框里的内容为空，就什么都不做
					return
				}
				// 3.如果不为空，就将输入框里的内容添加到数据列表中
				const id = this.items.length + 1;
				this.items.push({
					id ,       //ES6语法，相当于id:id  //主键
					content,   //ES6语法，相当于content:content  //输入的内容
					completed:false//是否完成
				})
				// 4.清空输入框里的内容
				event.target.value = "";
			},
			// 删除任务项
			removeItem(index){
				// splice方法：从数组中删除元素，两个参数：（第一个参数：从哪个元素开始删，第二个参数：删除几个）
				this.items.splice(index,1)
			},
			// 删除所有已完成任务项
			removeCompleted(){
				/* this.items = this.items.filter(function(item){
					return !item.completed
				}) */
				// 进一步简写
				/* this.items = this.items.filter((item) => {
					return !item.completed
				}) */
				// 还可以简写
				// 将过滤出来的所有未完成的任务项数组重新赋值给整体的数据列表数组（这样数组中就剩下所有未完成的数据项了）
				this.items = this.items.filter((item) => !item.completed)

			},
			// 进入编辑状态
			toEdit(item){
				this.currentItem = item;
			},
			// 取消编辑
			cancelEdit(){
				this.currentItem=null;
			},
			// 完成编辑保存输入
			finishEdit(item,index,event){
				// 1.获取当前输入框输入的内容
				const content = event.target.value.trim();
				// 2.判断输入框里的值是否为空，如果为空，进行删除任务项
				if(!content){
					this.removeItem(index);
					return;
				}
				// 3.如果不为空，则添加到原有任务项中，其实就是一个更新的操作
				item.content = content;
				// 4.移除.editing样式，退出编译模式
				this.currentItem = "";
			}
		}
	})
	window.onhashchange = function(){
		console.log(window.location.hash);
		vm.filterStatus = window.location.hash.substr(2) || "all";
	}
	window.onhashchange();
})(Vue);
