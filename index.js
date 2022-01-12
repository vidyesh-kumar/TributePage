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
