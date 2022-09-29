let amount = 20; // typescript automatically detects numbers no need to write the type like "amount:number"
amount = 'dollars'
console.log(amount)

let IsMyName = true;
IsMyName = 'yash'
console.log(IsMyName)


let response:string;

function api(){
    return "yash" //if you set the boolean 'true' then will return error
}

response = api()