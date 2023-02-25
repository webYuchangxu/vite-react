
// React 中 函数有两种写法
//  类组件
//  函数组件（主流）

import { Component } from "react";
// 类组件 class组件
// 特点：ES6中面向对象的语法，里面有生命周期，有this,有state,有上下文,有ref
// 缺点：相比函数式组件，性能差一点。但也需要掌握
class DemoA extends Component {
    // 类组件必须要写一个生命周期
    render() {
        // 在render函数中需要返回视图模板
        return (
            <h2>类组件</h2>
        )
    }
}
// 函数式
// 函数名必须大写
// 特点：使用的是函数式编程，里面没有生命周期，没有this,没有上下文，没有ref
// 优点：相比类组件来说，性能高一些
// 函数式组件需要配合hook 达到类组件中的功能
function DemoB(){
    return(
        <h1>函数式组件</h1>
    )
}
export default DemoB