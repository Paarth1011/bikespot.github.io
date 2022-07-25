// Script For Nav DropDowns

function homeIn(){
    document.getElementById("home-drop").style.display = "flex";
}
function homeOut(){
    document.getElementById("home-drop").style.display = "none";
}

function searchIn(){
    document.getElementById("search-drop").style.display = "flex";
}
function searchOut(){
    document.getElementById("search-drop").style.display = "none";
}

function compareIn(){
    document.getElementById("compare-drop").style.display = "flex";
}
function compareOut()
{
    document.getElementById("compare-drop").style.display = "none";    
}

function reviewIn(){
    document.getElementById("review-drop").style.display = "flex";
}
function reviewOut(){
    document.getElementById("review-drop").style.display = "none";
}

function abtusIn(){
    document.getElementById("abtus-drop").style.display = "flex";
}
function abtusOut(){
    document.getElementById("abtus-drop").style.display = "none";
}

function servicesIn(){
    document.getElementById("services-drop").style.display = "flex";
}
function servicesOut(){
    document.getElementById("services-drop").style.display = "none";
}

function pagesIn(){
    document.getElementById("pages-drop").style.display = "flex";
}
function pagesOut(){
    document.getElementById("pages-drop").style.display = "none";
}

function usersIn() {
    document.getElementById("users-drop").style.display = "flex";
}
function usersOut(){
    document.getElementById("users-drop").style.display = "none";
}


// Script For 'Go To Top' 

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        document.getElementById("myBtn").style.display = "block";
    } 
    else 
    {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Script For Nav Menu

function openNav() 
{
    if (document.getElementById("menu").style.height === "0px" || document.getElementById("menu").style.height === "") 
    {
        document.getElementById("menu").style.height = "372.75px";
    }
    else
    {
        document.getElementById("menu").style.height = "0px";
    }
}