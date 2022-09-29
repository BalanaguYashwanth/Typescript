function check(id:number|string){
    //console.log(id.toLowerCase())
    if(typeof id === "string"){
        console.log(id.toLowerCase())
    }else if(typeof id === "number") {
        console.log(id+2)
    }
}

check(2)

let all:(number|string|boolean) [] = [1,2,'yash','bash',true] 


let pi:3.14 = 3.14;
pi = 2; //check this
