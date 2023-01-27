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



    //var redDiv = document.getElementById("redBg","redT").innerHTML;
    //redDiv.onclick = function(){
       // redDiv.style.backgroundColor = "red";