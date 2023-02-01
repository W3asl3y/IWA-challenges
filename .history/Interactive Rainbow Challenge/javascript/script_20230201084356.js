var redDivText = document.createElement("redDiv");
redDivText.innerHTML = 'RED';
redDiv.appendChild(redDivText);

function redDiv(){
    var e = document.getElementById("redBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("redBg").style.background = "#ff0000";
    } 
    else{
        document.getElementById("redBg").style.background = "#ffffff";
    }
    
    }

function redDiv(){
    var e = document.getElementById("redBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("redBg").style.background = "#ff0000";
    } 
    else{
        document.getElementById("redBg").style.background = "#ffffff";
    }
        
    }

function redDiv(){
    var e = document.getElementById("redBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("redBg").style.background = "#ff0000";
    } 
    else{
        document.getElementById("redBg").style.background = "#ffffff";
    }
    }

function redDiv(){
    var e = document.getElementById("redBg");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(255, 255, 255)") {
        document.getElementById("redBg").style.background = "#ff0000";
    } 
    else{
        document.getElementById("redBg").style.background = "#ffffff";
    }
                
    }

    function redDiv(){
        var e = document.getElementById("redBg");
        var c = window.getComputedStyle(e).backgroundColor;
        if (c === "rgb(255, 255, 255)") {
            document.getElementById("redBg").style.background = "#ff0000";
        } 
        else{
            document.getElementById("redBg").style.background = "#ffffff";
        }
        
        }

function redDiv(){
    var e = document.getElementById("redBg");
            var c = window.getComputedStyle(e).backgroundColor;
            if (c === "rgb(255, 255, 255)") {
                document.getElementById("redBg").style.background = "#ff0000";
            } 
            else{
                document.getElementById("redBg").style.background = "#ffffff";
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