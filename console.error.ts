function consoleError(err):void{
    console.log(err)
    return 'hello'
}

function handleError(err:string):never{  // If function returns an error then the use "never" instead of "void" from documentation concept
    throw new Error(err)
}