# TS
   https://www.tslang.cn/docs/home.html

# number
     let num: number = 999

# string
      let str: string = 'hello'


# boolean
      let onOff:boolean = true

# 数组
      let arry:number[] = [1,2,3]
      let arry2:Array<number> = [1,2,3]


# 对象
      let obj: {name: string, age?:number} =  {name:'xiaoming',age:12}

# 枚举
      类型是对JavaScript标准数据类型的一个补充
      enum

# Symbol
      let s1:symbol = Symbol('id')

# null/undefined
      let a1:null = null
      let b1:undefined = undefined

# any
   无法确定一个变量的类型时，或者类型是变化的

# 形参类型和返回类型

# void
   没有任何类型,函数void代表无返回值

# 元组
   元组类型就是在定义数组的时候，类型和数据的个数一开始就已经限定好了。也就是长度固定，每个位置的数据类型也固定

# 自定义类型
   通过interface来自定义类型

# 联合类型
    type A =  string | number | boolean 满足其一即可

# 交叉类型
   interface Itype3{
      a: string
   }
   interface Itype4{
      b: number
   }
   type B = Itype3 & Itype4

   type C = number & string // never类型 表示永远不存在的值的类型， 返回never的函数必须存在无法达到的终点

# 字面量类型
   直接使用没有意义，配合联合类型使用

# 函数类型

# 类型断言

# 类型缩小
   1.typeof
   2.平等缩小
   3.instanceof:用来判断一个对象是否属于某个指定的类或其子类的实例
   4.in

# 泛型
   类型参数化，当我们定义函数或接口时不能指定确定的类型，当接口或函数使用时才能确定类型，此时我们必须使用泛型。

   字母表示泛型：
      T,K V,E,O,U

   1.一个泛型
   2.多个泛型
   3.自定义泛型
   4.extends



# 配置jsx
   npm i @vitejs/plugin-vue-jsx
      在vite.config.js加入jsx配置:
      import vueJsx from '@vitejs/plugin-vue-jsx'
      plugins: [vue(), vueJsx()],

   tsconfig.ts
      配置"jsx": "preserve"

   什么是jsx元素，什么是组件？
      由class或function定义出来的叫组件，组件名必须大写
      由jsx语法或React.createElement返回的结果叫jsx元素，jsx元素充当组件的视图模板

   函数式组件:函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数,必须以大写字母打头.

   两种方式：render函数、setup中返回

   jsx元素: 嵌套表达式，必须使用{}包起来

   插值:在JSX中使用单个括号来绑定文本插值
   样式:
      <div class={'btn'}></div>
      <div class={{'btn-default': this.isDefault, 'btn-primary': this.isPrimary}}></div>
      <div style={{color: 'red', fontSize: '14px'}}></div>

   v-show: 支持
   v-if: 不支持,可以采用三目运算
   遍历:没有v-for,需要采用Js的方式来实现
   v-bind: v-bind:data-index=xx 不支持
   事件绑定:事件绑定需要在事件名称前端加上on前缀，原生事件添加nativeOn
   父级元素包裹：也可以使用空标签<></>

   props绑定:
   emit传值：

   插槽：


# Vue-Vben-Admin
   http://doc.vvbin.cn/guide/introduction.html#%E9%9C%80%E8%A6%81%E6%8E%8C%E6%8F%A1%E7%9A%84%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86

   https://github.com/vbenjs/vue-vben-admin