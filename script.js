const inputSlider = document.querySelector("[data-lengthSlider]")
const lengthDisplay = document.querySelector("[data-lengthNumber]")
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers") 
const symbolsCheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const generateBtn = document.querySelector(".generateBtn")   
const allCheckbox = document.querySelectorAll("input[type='checkbox']") 

let password = ""
let passwordLength = 10
let checkCount = 1
handleSlider() 
//Set Strength Indicator color to Grey



//Set Password Length
function handleSlider()
{
    inputSlider.value = passwordLength
    lengthDisplay.textContent = passwordLength
}

function setIndicator(color)
{
    indicator.style.backgroundColor = color
    //Shadow
    indicator.style.boxShadow = `0 0 10px ${color}` 
}   

function getRndInteger(min, max) 
{
    Math.floor(Math.random() * (max - min + 1) ) + min
}