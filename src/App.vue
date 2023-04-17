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

</script>

<style scoped>
  .upload-area{
    width: 200px;
  }
</style>
