const projectName = 'tribute-page';

function MOver(id)
{   for(let i = 0; i<document.getElementsByClassName(id).length;i++){
    document.getElementsByClassName(id)[i].style.fontWeight="bold";
}
}
function MOut(id)
{   for(let i = 0; i<document.getElementsByClassName(id).length;i++){
    document.getElementsByClassName(id)[i].style.fontWeight="normal";
}
}
function MClick(id) {
    let x=document.getElementById(id)
    if (x.style.fontSize != "xx-large") 
      x.style.fontSize = "xx-large";
    else 
      x.style.fontSize = "x-large";
  }