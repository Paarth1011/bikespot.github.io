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

// Script For Review Stars

// function rating()
// {
//     if(document.getElementsByClassName("check").style.color === "none")
//     {
//         document.getElementsByClassName("check").style.color = "orange";
//     }
//     else
//     {
//         document.getElementsByClassName("check").style.color = "none";
//     }
// }