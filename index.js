const projectName = 'tribute-page';
if(window.innerWidth>1000)
{ let ele=document.getElementsByClassName('resp');
  for(let i=0;i<ele.length;i++)
  { ele[i].setAttribute('data-bs-toggle','collapse show');
  }
}
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
    if(window.innerWidth>=800)
    {if (x.style.fontSize != "xx-large") 
      x.style.fontSize = "xx-large";
    else 
      x.style.fontSize = "x-large";
    }
    else
    {if (x.style.fontSize != "large") 
      x.style.fontSize = "large";
    else 
      x.style.fontSize = "medium";
    }
  }


