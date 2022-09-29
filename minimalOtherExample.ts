// let name:string = 'yash'
let myDetails :[number, number, number, string] = [2,3,3,'three']
type userDetails = {
  name:string,
  startup:boolean
}

let x : userDetails = {
  name:'yash',
  startup:true
}

type y = userDetails | {
    again:true
}

let allDetails:y = {
  name:'yash',
  startup:true
}

let myname : (name:string) => never //If function doesnot return anything then use "never" instead of "void", because void returns the undefined

let personName:unknown = 'yash' // keep unknown (instead of any)

// function person() : never {
//   throw new Error('error')
// }

// person()

interface hello {
  name:string
}

interface yashage{
  age:number
}

interface hello extends yashage{}

let allMyDetails : hello = {
  name:'string',
  age:2,
}