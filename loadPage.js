// 1st option
function docWrite (event) {
    document.write("DOM fully loaded and parsed<br>");
}

function loadEvent () {
    document.addEventListener("DOMContentLoaded", docWrite)
};

setTimeout(docWrite, 3000);

//2nd option

document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
        setTimeout(docWrite2, 4000);
    }
 }
function docWrite2 (event) {
    document.write("State: fully loaded and parsed");
}

