//1

const header = document.querySelector('.heading').parentElement;
header.style.border='5px solid'
;

//2

const info=document.querySelector('.info');


const infoArray= Array.from(info.children)

for(let i =0; i< infoArray.length ; i++)
{
    
    if(infoArray[i].matches('.info-package'))
    {
        info.querySelectorAll('.package-title').forEach(element=>
            {
                
                     element.previousElementSibling.style.border='2px solid'
             })
        }
}






