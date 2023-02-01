function redDiv(){
    let e = document.getElementById("redBg");
    let c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("redBg").style.background = "#ff0000";
    } 
    else{
        document.getElementById("redBg").style.background = "#ffffff";
    }
    
    }

function orangeDiv(){
    var e = document.getElementById("orangeBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("orangeBg").style.background = "#ff4500";
    } 
    else{
        document.getElementById("orangeBg").style.background = "#ffffff";
    }
        
    }

function yellowDiv(){
    var e = document.getElementById("yellowBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("yellowBg").style.background = "#ffff00";
    } 
    else{
        document.getElementById("yellowBg").style.background = "#ffffff";
    }
    }

function greenDiv(){
    var e = document.getElementById("greenBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("greenBg").style.background = "#008000";
    } 
    else{
        document.getElementById("greenBg").style.background = "#ffffff";
    }
                
    }

function blueDiv(){
    var e = document.getElementById("blueBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("blueBg").style.background = "0000ff";
    } 
    else{
        document.getElementById("blueBg").style.background = "#ffffff";
    }    

    }

function darkPurpleDiv(){
    var e = document.getElementById("darkPurpleBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("purpleBg").style.background = "#800080";
    } 
    else{
        document.getElementById("purpleBg").style.background = "#ffffff";
    }
            
    }

function lightPurpleDiv(){
    var e = document.getElementById("lightPurpleBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("lightPurpleBg").style.background = "#8a2be2";
    } 
    else{
        document.getElementById("lightPurpleBg").style.background = "#ffffff";
    }
            
    }

       /* change the color of a div by clicking on text inside div */
var colorDiv = document.createElement('div');
colorDiv.style.width = '100px';
colorDiv.style.height = '100px';
colorDiv.style.backgroundColor = 'red';
document.body.appendChild(colorDiv);
var colorDivText = document.createElement('div');
colorDivText.innerHTML = 'Click me to change the color of the box';
colorDiv.appendChild(colorDivText);
colorDiv.addEventListener('click', function() {
  colorDiv.style.backgroundColor = 'blue';
});