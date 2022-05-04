function add(a:number, b?:number):number
{
    return b?a+b:a
}
console.log(add(15, 10))