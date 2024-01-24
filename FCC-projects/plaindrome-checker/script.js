
const checkButton = document.getElementById('check-btn')
const inputValue = document.querySelector('#text-input')
const resultText = document.getElementById("result")

function getInputTex (){
  const inputText = inputValue
  console.log(inputText)
}


function removeAndMakeArray (string){
  if(string !== ''){
const lString = string.toLowerCase()
console.log(lString)
const filterdArray = lString.match(/[a-z0-9]/ig) 
console.log(filterdArray)
if(filterdArray.join("") == filterdArray.reverse().join("")){
  resultText.innerHTML = `${string} is a palindrome`
}else {
  resultText.innerHTML = `${string} is not a palindrome`
}
}else{
  alert('Please input a value')
}}

function checkIfpalindrome(){
  console.log(document.getElementById('text-input').value)
}

console.log(inputValue)
checkButton.addEventListener("click",() =>{
removeAndMakeArray(inputValue.value)
})