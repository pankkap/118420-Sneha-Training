// Basic of JavaScript

// Variable

var a = 10;
var name = "Pankaj"
var isActive = true;
var c= "10";
var b=null;

// javaScript datatypes
// 1. number
// 2. string
// 3. boolean

// console.log(a);
// console.log(name);
// console.log(isActive);
// console.log(b);
// console.log(c);
// // Arithmatic Operators
// console.log(a+c);
// console.log(a-c);
// console.log(a*c);
// console.log(a/c);
// // Ralational Operator
// var d = a === c ;
// console.log(d) // true

// JavaScript Array
// var arr = ["pankaj", "sachin", "Sneha"]
// var arr1 = [10, 20, 30, 40, 50, 'pankaj']

// arr.push("Sonia")
// arr.pop()
// arr.push(23)

// console.log(arr[1])
// console.log(arr1[3])

// for(i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i])
// }
// console.log(arr1.length)


// JavaScript Object
// var emp = {
//     id:101, 
//     name:"pankaj",
//     dept:"training"
// }
// var emp1 = {
//     id:102, 
//     name:"sachin",
//     dept:"developemnt"
// }

// console.log(emp)
// console.log(emp1)



// function in JavaScript
// function add(x, y )
// {
//     return (x+y)
// }

// console.log( add(5,10))

// ECMASCript-6 (2015)

// Arrow Function EcmaScript-6
// variable Invoking Function
// var add = (x, y) => x+y
// console.log(add(5,10))

// class is a blueprint
// object represent real world entity

// Template String

// var fname = "pankaj"
// var lname = "kapoor"
// console.log("welcome " + fname + ' ' + lname)
// console.log(`welcome ${fname} ${lname}`)


class Person{
    constructor(name, age, city)
    {
        this.name = name
        this.age = age
        this.city = city
    }
    display()
    {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nCity: ${this.city}`)
    }
}

var p1 = new Person("John", 30, "UK")
var p2 = new Person("Peter", 35, "Sydney")

p1.display()
p2.display()


// var a;
// a = 10
// a = "Sneha"
// a = ["sneha", "sonia", "siara"]  
// console.log(a)


