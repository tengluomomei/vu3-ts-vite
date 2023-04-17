<template>
  <HelloWorld msg="Vite + Vue" />
  <div class="upload-area">
    <van-uploader :after-read="afterRead">
      <van-button type="primary">上传</van-button>
    </van-uploader>
  </div>
</template>

<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'

  const afterRead = (file: any) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
  };

  // number
  let a:number = 110
  let b = 120 //会自动进行类型推导


  // string
  let c:string = 'hello'
  let d = 'anc' //会自动进行类型推导
  // d = true // 不行的


  // boolean
  let e: boolean = true
  // e = '' // 不行的


  // 数组
  let arr1:number[] = [1, 2, 3]
  let arr2:Array<number> =  [1, 2, 3]
  arr2.push(66)
  console.log(arr2)

  let arr3:[number, string] = [1,'2']
  arr3.push(4)
  console.log(arr3)
  // [[],[]]
  let arr4: Array<Array<number>> = [[1,2],[12]]
  let arr5 = [['111',11]]


  // 对象类型
  let obj:Object = {name: 'xiaoming',age: 12}
  // obj.age = 13
  // console.log(obj.name)

  let obj2:{name: string, age: number} = {name: 'xiaoming',age: 12}
  let obj3:{name: string, age: number, class?: number} = {name: 'xiaoming',age: 12, class: 6} // ?相当于可选类型
  obj2.age = 18
  console.log(obj2.name)


  // 枚举
  enum E1 { red, blue, yellow }
  let color = E1.yellow // index索引
  let colorData = E1[2] // 获取值
  console.log(colorData)

  // Symbol
  // let s = {
  //   name: 'xx',
  //   name: 'yyy'
  // }

  const s1:symbol = Symbol('name')
  const s2:symbol = Symbol('name')
  let s = {
    [s1]: 'xx',
    [s2]: 'yyy'
  }
  console.log(s)


  // null/undefined
  let n:null = null
  let u:undefined = undefined

  
  // any
  let g:any = 123
  g = 'hhh'
  g = true
  let h:any[] = [1,2,'ggg']

   
  // 形参类型和返回类型
  function fn1(num1: number, num2: number){
    return num1+ num2
  }

  function fn2(num1: number, num2: number):string{
    return 'abc'
  }
  console.log(fn1(1,3))
  console.log(fn2(1,3))


  // void 无返回值
  function fn3(num1: number, num2?: number):void{  
    console.log('没有返回值')
  }
  fn3(1,2)



  //元组
  let y: [string,number,boolean] = ['abc', 12, true]
  console.log(y[1])

  type T = [string,number,boolean]
  let y2: T = ['abc', 12, true]
  console.log(y2)


  // 自定义类型
  const fn4 = (a: any)=>{
  }

  interface Itype{
    a: string,
    b: number,
    c?: string,
    readonly d?: string,
    [key: string]: any, // 键可以是任意，值也可以是任意
    onChange: (num: any)=>void
  }
  interface Itype{
    e: boolean
  }

  let z: Itype = {
    a: 'hello',
    b: 2,
    c: 'world',
    d: 'read',
    name: 'xiaoming',
    onChange: (a)=>{
      console.log(a)
    },
    e: true
  }

  
  // 联合类型
  let l1: number | string | boolean = true
  l1 = 'hello'
  l1 = 444

  // 起别名
  type U = number | string | boolean
  let l2: U = 110
  console.log(l2)


  // 交叉类型
  interface Itype2{
    a: string
  }
  interface Itype3{
    b: number
  }

  type J = Itype2 & Itype3
  let j1:J = {
    a: 'hello',
    b: 12
  }

  type J2 = string & number
  // let j2:J2 = 'hekko' // never 永远不



  // 字面量类型
  let zml:"hello" = 'hello' // 无意义
  type A = 'left' | 'right' | 'bottom' | 'top'
  let B: A = 'left'
  // B: A = 'aaa'

  let ajax = {
    url: 'https://www.baidu.com/',
    method: 'GET'
  }

  function post(url: string, method: 'POST' | 'GET'){
    console.log(url, method)  
  }
  // ajax.method 字符串，不能把字符串赋值给联合类型使用
  post(ajax.url,ajax.method as "GET")



  // 函数类型
  type FnType = (num: number) => number
  const fn5: FnType = (num: number): number =>{
    return num *3
  }
  console.log(fn5(5))

  const fn6 = (num = 110): number=>{
    return num *3
  }
  console.log(fn6())

  const fn7 = (...rest:(string | number)[]) =>{
    console.log(rest)
  }
  fn7(1,2,4)


  // 类型断言
  const box = document.getElementById('box') as HTMLImageElement 
  box.src='111'

  function fn8(msg?: string){
    // console.log(msg.toUpperCase())
    console.log(msg!.toUpperCase())
  }
  fn8('hello')
  fn8()

</script>

<style scoped>
  .upload-area{
    width: 200px;
  }
</style>
