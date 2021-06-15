(function(){
    // Vue.js 的插件应该暴露一个 install 方法。
    //这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
    const MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          alert("MyPlugin.myGlobalMethod方法被调用了")
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', {
          bind (el, binding) {
            // 逻辑...
            el.innerHTML = "MyPlugin.my-directive指令被调用了" + binding.value
          }
        })
      
      
        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (value) {
          // 逻辑...
          alert("vue实例方法myMethod被调用了：" + value)
        }
      }
      // 把自定义插件暴露出来
      window.MyPlugin = MyPlugin;
})()