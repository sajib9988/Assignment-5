// seat er text and background color change er function 
function seatColorUpdate(id){
    const element = document.getElementById(id);
    element.style.backgroundColor= "#1DD100";
    element.style.color = "white"
}

// element er innerText set korar function 
function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
}
