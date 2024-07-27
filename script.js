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
const symbols = '!@#$%^&*(){}[]=<>/,.'

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
    return Math.floor(Math.random() * (max - min) ) + min
}

function generateRandomNumber()
{
    return getRndInteger(0, 9)
}

function generateLowerCase()
{
    return String.fromCharCode(getRndInteger(97, 123))
}

function generateUpperCase()
{
    return String.fromCharCode(getRndInteger(65, 91))
}

function generateSymbol()
{
    const randNum = getRndInteger(0, symbols.length)
    return symbols.charAt(randNum)
}

function calcStrength()
{
    let hasUpper = false
    let hasLower = false
    let hasNum = false
    let hasSym = false
    if(uppercaseCheck.checked) hasUpper = true
    if(lowercaseCheck.checked) hasLower = true
    if(numbersCheck.checked) hasNum = true
    if(symbolsCheck.checked) hasSym = true

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8)
    {
        setIndicator("#0f0")
    }
    else if((hasUpper || hasLower) && (hasNum || hasSym) && passwordLength >= 6)
    {
        setIndicator("#ff0")
    }
    else
    {
        setIndicator("#f00")
    }
}

async function copyContent()
{
    try
    {
        await navigator.clipboard.writeText(passwordDisplay.textContent)
        copyMsg.textContent = "Copied!"
    }
    catch(e)
    {
        copyMsg.textContent = "Failed to Copy!"
    }

    //To make copy span visible
    copyMsg.classList.add("active")

    setTimeout(() => {
        copyMsg.classList.remove("active")
    }, 2000)
}

function handleCheckBoxChange()
{
    checkCount = 0
    allCheckbox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++
    })
}

allCheckbox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange)
})

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value
    handleSlider()
})

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent()
})

generateBtn.addEventListener('click', () => {
    
})