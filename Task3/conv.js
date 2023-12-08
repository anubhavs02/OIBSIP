const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const tempTypeOut = document.querySelector("#temp-type-out");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  var input = Number(degree.value);

  setTimeout( () => {
      const inputForm = document.getElementById("temp-type").value
      const outputForm = document.getElementById("temp-type-out").value
  
      if (inputForm == "C") {
          if (outputForm == "F") {
              input = input * 9 / 5 + 32
              let output = document.getElementById("celsius")
              output.innerHTML = input
          }
          else if (outputForm == "K") {
              input = input + 273.15
              let output = document.getElementById("celsius")
              output.innerHTML = input
          }
          else if(outputForm =="C"){
              input=input
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
      }
      else if (inputForm == 'K') {
          if (outputForm == 'F') {
              input=(input-273.15)* 9/5 + 32
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
          else if (outputForm == 'K') {
              input=input
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
          else if(outputForm == 'C'){
              input=input - 273.15
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
      }
      else if (inputForm == 'F') {
          if (outputForm == 'F') {
              input=input
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
          else if (outputForm == 'K') {
              input=(input - 32) * 5 / 9 + 273.15
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
          else if(outputForm == 'C'){
              input=(input - 32) * 5/9
              let output = document.getElementById("celsius")
              output.innerHTML=input
          }
        }
      
  },1200)
  
}