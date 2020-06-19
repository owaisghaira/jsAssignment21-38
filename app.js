// chapter # 21-25 Task no. # 1 

// var first = prompt("Enter First Name ","your name plz")
// var last = prompt("Enter last Name ","your last name plz")
// var full = first +" "+ last;
// alert("welcome "+full)

// chapter # 21-25 Task no. # 2
var str = prompt("enter your favourite cell phone")
var numb = str.length

for  (var i = 0 ; i < numb.length ; i++){
    if (str.slice(i, i + 2) === " "){
        alert("No double spaces")

    }
}
document.write("length is "+ numb)
