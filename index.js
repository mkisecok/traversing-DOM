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

//3
const label = document.querySelectorAll('label');

label.forEach(element=>
    {
        element.matches('.mild') ?

        element.style.border ='2px solid yellow': 

        element.matches('.intense') ? 

        element.style.border ='2px solid orange' :

         element.style.border ='2px solid red'
    })

    //4

    
    let liNav= Array.from(document.querySelector('.nav-list').children) 
   
    const siteMap = document.querySelector('.site-map');

    for(const li of liNav)
    {
       const listCopy= document.createElement("li");
       listCopy.innerText=li.innerText;
       
       siteMap.append(listCopy)
    }

   





