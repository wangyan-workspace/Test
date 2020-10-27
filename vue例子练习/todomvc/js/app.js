(function (Vue) {
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
	]
	new Vue({
		el:'#todoapp',
		data:{
			items //ES6语法 相当于items:items,如果在对象中，key的名字和value的名字一样的话，就可以简写成一个
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
				set(newState){
					// console.log("set",newState);
					/*ES6之前的写法
					this.items.foreach(function(item){
						
					}) */
					this.items.forEach((item)=>{
						item.completed = newState;
					})
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
			// 删除按钮
			removeItem(index){
				// splice方法：从数组中删除元素，两个参数：（第一个参数：从哪个元素开始删，第二个参数：删除几个）
				this.items.splice(index,1)
			}
		}
	})
})(Vue);
