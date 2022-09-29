const hello =  (amount:number):boolean|string  => {
    if(amount<5)
        return true
    else
        return 'error'
}

let response:string|boolean = hello(6)

console.log(response)