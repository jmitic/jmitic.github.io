function doExternalFileThing(elt) {
    elt.innerHTML = 'We are an IT services company passionate about partnering with clients across the globe to help them achieve exceptional business outcomes.';
    elt.disabled = true;
}


/* -------------- Conditional ------------------------------*/

function myFunction() {
    var x, text;
  
    // Get the value of input field with id="numb"
  
    x = document.getElementById("age").value;
  
    // If x is Not a Number or less than one or greater than 10, output "input is not valid"
    // If x is a number between 1 and 10, output "Input OK"
     
    if (isNaN(x) || x < 14 || x < 21) {
      text = "You are elible for our Summer IT Camp";
    } else {
      text = "Great! You are eligible for our Case Study Program";
    }
    document.getElementById("ifelse").innerHTML = text;
  }     
function doValues(){
    var a = "Quality";
    var b = " "
    var c = "Team Work";
    var d = " "
    var e = "Fulfillment";
    var f = " "
    var g = "Responsibility"
document.getElementById("values").innerHTML = a + b + c + d + e + f + g;}

function myLocation(){
    const place = ["Nis, Serbia", "Novi Sad, Serbia", "Zrenjanin, Serbia", "Podgorica, Montenegro"];

    let text = "";
    for (let i = 0; i < place.length; i++) {

        text += place[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;}

function divideBy() 
    { 
      num1 = document.getElementById(
        "firstNumber").value;
      num2 = document.getElementById(
        "secondNumber").value;
      document.getElementById(
        "result").innerHTML = num1 / num2;
    }