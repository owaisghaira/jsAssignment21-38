// chapter # 21-25 Task no. # 1 

// var first = prompt("Enter First Name ","your name plz")
// var last = prompt("Enter last Name ","your last name plz")
// var full = first +" "+ last;
// alert("welcome "+full)

// chapter # 21-25 Task no. # 2
// var str = prompt("enter your favourite cell phone")
// var numb = str.length

// for  (var i = 0 ; i < numb ; i++){
//     if (str.slice(i, i + 3) === " "){
//         alert("No double spaces")
//         break;
//     }
// }
// document.write("length is "+ numb)

// chapter # 21-25 Task no. # 3

// var lett = 'pakistani';
// var ind = lett.indexOf('n')
// document.write('string is Pakistani <br>');
// document.write('index of n is '+ind)

// chapter # 21-25 Task no. # 4


// var lett = 'hello world';
// var ind = lett.lastIndexOf('l')
// document.write('string is hello world <br>');
// document.write('Last index of l is '+ind)

// chapter # 21-25 Task no. # 5

// var lett = 'pakistani';
// var ind = lett.charAt(3)
// document.write('string is Pakistani <br>');
// document.write('index of i is '+ind)

// chapter # 21-25 Task no. # 6

// var first = prompt("Enter First Name ","your name plz")
// var last = prompt("Enter last Name ","your last name plz")
// var full = first.concat(" ",last)
// alert("welcome "+full)

// chapter # 21-25 Task no. # 7

// var str = 'Hyderabad';
// var rep = str.replace('Hyder','Islam')
// document.write(rep)

// chapter # 21-25 Task no. # 8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var rep = message.replace(/and/g,"&")
// document.write(rep)

// chapter # 21-25 Task no. # 9

// var str = "472";
// var con = Number(str)
// document.write("Value : <br>")
// document.write("string :"+ str +"<br>")
// document.write("Value : <br>")
// document.write("number : " + con)

// chapter # 21-25 Task no. # 10

// var input = prompt("your name plz")
// input = input.toUpperCase()
// document.write(input)

// chapter # 21-25 Task no. # 11

//  var input = prompt("your name plz")
//  var first = input.slice(0,1)
//  var second = input.slice(1)
//  first = first.toUpperCase();
//  second = second.toLowerCase()
//  alert(first+second)

// chapter # 21-25 Task no. # 12

// var num = 35.36
// var str = num.toString();
// str = str.replace(".","")
// document.write('number '+num+'<br>')
// document.write('Result '+str)

// chapter # 21-25 Task no. # 13

// var name = prompt('your name plz')
// var c = false;
// for (var i = 0 ; i <= name.length ; i++){
//     if (name.slice(i , i+1) === "@"||
//      name.slice(i , i+1) === "!" ||
//      name.slice(i , i+1) === ","||
//      name.slice(i , i+1) === "."  ){
//         c = true;
//         break;
//     }
    
    
// }
// if(c){
//     alert('enter valid no.')
// }
// else{
//     alert('thanku '+ name)
// }

// chapter # 21-25 Task no. # 14

// A = ["apple pie", "cookie", "chips", "patties","cake"];
// var input = prompt("welcome to ABC bakery.What do you want to order Sir / Ma'am");
// var c = input.toLowerCase();


// for (var i= 0; i < 5 ; i++){
//     if (c === A[i]){
//         alert(c + ' is available in our bakery')
//         break;
//     }
//     else{
//         alert('We are sorry ')
//         break;
//     }
// }

// chapter # 21-25 Task no. # 15

// var pass = prompt('Enter valid password')
// if (pass.length <= 6 && pass.length === " "){
//     if(pass.slice(0,1).charCodeAt() < 65){
//         alert('password start character')
//     }
//     else{
//         alert('succeed')

//     }

// }
// else{
//     alert('character must be 6')
// }

// chapter # 21-25 Task no. # 16

// var uni = 'University Of Karachi'
// for (var i = 0; i <uni.length ; i++){
//     document.write(uni[i] + '<br>')
//}

// chapter # 21-25 Task no. # 17

// var inp = prompt('enter here')
// inp = inp.slice(-1)
// alert(inp)

// chapter # 21-25 Task no. # 18

// var para = 'The quick brown fox jumps over the lazy dog';
// para = para.toLowerCase();
// console.log(para)
// var count = 0;

// for (var i = 0; i < para.length; i++){
//    if ( para.slice(i,i+3) === 'the'){
//        count++;
//    }
// }
// document.write("there are "+count+" occurence of word the")

// chapter # 26-30 Task no. # 1

// var num = +prompt('Enter a No.' );
// var roun = Math.round(num);
// var cei = Math.ceil(num)
// var flo = Math.floor(num)
// document.write("Number : "+num + "<br>")
// document.write("Round of value : "+roun + "<br>")
// document.write("Ceil value : "+cei + "<br>")
// document.write("floor value : "+flo + "<br>")

// chapter # 26-30 Task no. # 2

// var num = prompt('Enter a No.' );
// var sin = num.slice(0,1);
// console.log(sin)
// if (sin === '-'){
//     var roun = Math.round(num);
// var cei = Math.ceil(num)
// var flo = Math.floor(num)
// document.write("Number : "+num + "<br>")
// document.write("Round of value : "+roun + "<br>")
// document.write("Ceil value : "+cei + "<br>")
// document.write("floor value : "+flo + "<br>")


// }
// else{
//     alert("enter negetive value")

// }

// chapter # 26-30 Task no. # 3

// var num = prompt("enter")
// num = Math.ceil(num)
// console.log(num) 

// chapter # 26-30 Task no. # 4

// var num = Math.random()*6;
// num = Math.round(num) 
// document.write('random dice value is : '+num)

//chapter # 26-30 Task no. # 5

// var head = prompt("Heads user name...")
// var tail = prompt("Tails user name .. ")

// var num = Math.random()*2;
// num = Math.floor(num)
// console.log(num)
// if (num === 0){
//     alert("heads "+head+ " win the toss")
// }
// else{
//     alert("tails "+tail+" win the toss")
// }

//chapter # 26-30 Task no. # 6

// var num = Math.random()
// num =  num.toString() 
// num = num.slice(2,4)
// document.write("Random number between 1 to 100 is : "+ num)

//chapter # 26-30 Task no. # 7

// var kilo = prompt("enter kgs")
// document.write("The weight of user is "+ kilo)

//chapter # 26-30 Task no. # 8

// var num = Math.random() * 9 + 2 ;
// num = Math.floor(num);
// console.log(num)
// var enternum = prompt("Guess any no.");
// if (num == enternum){
//     alert("you rocksss");
// }
// else{
//     alert("fail")
// }

//chapter # 31-34 Task no. # 1

// var a = new Date();
// document.write(a)

//chapter # 31-34 Task no. # 2

// var a = new Date();
// var b = a.toString();
// var c = b.slice(4,8);
// document.write("current Month "+c)

//chapter # 31-34 Task no. # 3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3)
// document.write("Today is "+c)

//chapter # 31-34 Task no. # 4

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// console.log(c)
// if (c === "sun"||c === "sat"){
//     alert("It's fun day");
// }
// else{
//     alert(c)
// }

//chapter # 31-34 Task no. # 5
// var a = new Date();
// var b = a.toString();
// var c = b.slice(8,10)
// if (c < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

//chapter # 31-34 Task no. # 6

// var a = new Date();
// var millsSince = a.getTime();
// document.write(a+'<br>')
// document.write("Miliseconds since jan,1 ,1970"+millsSince+"<br>");
// var hor = millsSince/1000/60/60
// document.write("Minutes since jan 1,1970"+hor)

//chapter # 31-34 Task no. # 7

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,18);
// if (c <12){
//     alert("it's AM")

// }
// else{
//     alert("it's PM")
// }

//chapter # 35-38 Task no. # 1

// function time(){
//     var a = new Date();
//     var b = a.toString()
//     document.write(b)
// }
// time()

//chapter # 35-38 Task no. # 2

// function greet(){
//     var f =prompt("First Name");
//     var l = prompt("last name")
//     var a = f + l
//     alert("Hello "+ a)
// }
// greet()

//chapter # 35-38 Task no. # 3

//function greet(){
    //     var f = +prompt("First No.");
    //     var l = +prompt("last No.")
    //     var a = f + l
    //     alert("Sum is "+ a)
    // }
    // greet()

//chapter # 35-38 Task no. # 4
function cal(){
       var f = +prompt("First No.");
        var l = +prompt("last No.")
        var o = prompt("oprater")
        var a = f+o+l
        alert("Sum is "+ a)
    }
    cal()