//For Arrow Buton

let mybutton=document.getElementById("mybtn");
window.onscroll= function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display="block";

    }else{
        mybutton.style.display="none";
    }
    
}

function topfunction(){
    document.body.scrollTop = 0; // For safari
    document.documentElement.scrollTop = 0; // for chrome , firefox and others
}