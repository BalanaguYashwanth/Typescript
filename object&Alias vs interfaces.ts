// sometimes sending into the function won't work properly to check typed so introduced the type alias and interface
let arrData = {name:'yash', gender:'male',is_paid:'yes'}  

function IDcard(arr?:{name:string, gender:string}):{name:string, gender:string}{
    return {name:'goadh', gender:'male'}
}

const response = IDcard({name:'yash', gender:'male'}) //another way to pass 
console.log(response)


type IDcardDetails={
    name:string,
    startup:boolean
}

type custIDcardDetails = {
    readonly _id:Number,
    fathername:string,
    mothername:string
}

let userIDcardDetails : IDcardDetails = {
    name:'yash',
    startup: true,
}

let customerIDcardDetails : custIDcardDetails = {
    _id:2333,
    fathername:'bash',
    mothername:'mash'
}

//customerIDcardDetails._id = 2222
customerIDcardDetails.fathername = 'josh'

type mainDetails =  IDcardDetails & custIDcardDetails & {
    final:string
}

type anothermainDetails =  IDcardDetails | custIDcardDetails | {
    final:string
}


let alldetails : mainDetails =  {
    name:'yash',
    startup: true,
    _id:2333,
    fathername:'bash',
    mothername:'mash',
    final:'yasj'
}

interface details {
    name:string,
    age:number,
    alldetails : () => string,
    getCoupon(couponname:string,off:number):number
}

const yash:details = {name:'yash@gmail.com',age:23,  alldetails : () => "string", getCoupon:(couponname:'flipkart',off:10)=> 10}

yash.name = 'hitesth@localStorage.dev'

console.log(customerIDcardDetails, alldetails)