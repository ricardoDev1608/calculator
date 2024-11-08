var content = ""
var a = null
var b = null
var c = ""

const numbers = document.querySelectorAll(".number")
const display = document.querySelector("#text")
const add = document.querySelector("#sum")
const substraction = document.querySelector("#sub")
const mult = document.querySelector("#mult")
const division = document.querySelector("#divide")
const equal = document.querySelector("#equal")
const clear = document.querySelector("#clear")

function sum(a, b){
    return a+b;
}
function substract(a, b){
    return a-b
}
function multiply(a, b){
    return a*b
}
function divide(a, b){
    return a/b
}

// Allows user to input data
function input()
{
    numbers.forEach((number) =>
        {
            number.addEventListener("click", ()=>
            {
                content += number.textContent
                display.textContent = content
            })
        }
    )
}

// Displays result on the screen
function equals()
{
    equal.addEventListener("click", ()=>
    {
        save()

        let result
        switch(c)
        {
            case "sum":
                c = ""
                result = sum(a,b)
                console.log(result)
                display.textContent = result.toString()
                break;
            case "sub":
                c = ""
                result = sub(a,b)
                console.log(result)
                display.textContent = result.toString()
                break;
            case "mult":
                c = ""
                result  = multiply(a,b)
                console.log(result)
                display.textContent = result.toString()
                break;
            case "divide":
                c = ""
                result  = divide(a,b)
                console.log(result)
                display.textContent = result.toString()
                break;     
        }
    })
}

// Empties the display
function reset(){
    content = ""
    display.textContent = content
}

clear.addEventListener("click", ()=>
    {
        reset();
        a = null;
        b = null;
    })

input()

// Stores data
function save()
{
    a === null ? a = parseFloat(display.textContent) : b = parseFloat(display.textContent)
    console.log(a,b)
}

add.addEventListener("click", (a,b)=>
    {   
        save()
        reset()
        c = "sum"
        equals()
    })

substraction.addEventListener("click", (a,b)=>
    {
        save()
        reset()
        c = "sub"
        equals()
    })

mult.addEventListener("click", (a, b)=>
    {
        save()
        reset()
        c = "mult"
        equals()
    })

division.addEventListener("click", ()=>
    {
        save()
        reset()
        c = "divide"
        equals()
    })
