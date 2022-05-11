let suma=0;
let racun=document.querySelector('.racun');

function dodaj(dugme){

    let vrednostInputa= dugme.previousElementSibling.value;
    let input=dugme.previousElementSibling;
    let naziv=input.previousElementSibling;
   
    dugme.disabled=true;

    let korpa=document.querySelector('.korpa');
   
    ///apend & create
        let divNamirnica=document.createElement('div');
        let namirnica=document.createElement('p');
        let deleteBtn=document.createElement('button');
        divNamirnica.classList.add('korpaCreate');
        
        namirnica.innerText=""+naziv.innerText+ " $"+dugme.value+"x"+vrednostInputa+"="+vrednostInputa*10;
        deleteBtn.innerText="Obrisi";
        deleteBtn.style.height='20px';
        deleteBtn.setAttribute('onclick','obrisi()');
        deleteBtn.onclick = function() {obrisi(divNamirnica,dugme,vrednostInputa);}; 
        suma+=vrednostInputa*dugme.value;
        racun.innerText="Vas racun: $"+suma;

        divNamirnica.appendChild(namirnica);
        divNamirnica.appendChild(deleteBtn);
        korpa.appendChild(divNamirnica);
}
function obrisi(divNamirnica,dugme,vrednostInputa){
    divNamirnica.remove();
    dugme.disabled=false;
    suma-=dugme.value*vrednostInputa;
    racun.innerText="Vas racun: $"+suma;
}