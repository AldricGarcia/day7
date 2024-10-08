function reduceOpacity()
{
    document.getElementById("square").style.opacity = 0,5;
}

function resetOpacity()
{
    document.getElementById("square").style.opacity = 1;
}

document.getElementById("square").addEventListener("mouseenter", reduceOpacity);
document.getElementById("square").addEventListener("mouseleave", resetOpacity);