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



# 配置jsx
   npm i @vitejs/plugin-vue-jsx
      在vite.config.js加入jsx配置:
      import vueJsx from '@vitejs/plugin-vue-jsx'
      plugins: [vue(), vueJsx()],

   tsconfig.ts
      配置"jsx": "preserve"