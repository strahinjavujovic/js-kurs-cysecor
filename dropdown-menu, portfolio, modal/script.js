var imgNum=0;

const mobileMenu =()=>{
    let dugme=document.querySelector('.header button');
    let meni=document.querySelector('.header ul');

    meni.classList.toggle("visible");

    if(dugme.innerText==='MENU')
    dugme.innerText='IZLAZ';
    else      
    dugme.innerText='MENU';

    
}

const changePicture=(dugme)=>{
    
    var slike=document.querySelectorAll('.slider-images img');

    slike.forEach( (slika)=>{
        slika.style.display='none';
    })

    if(dugme.value==0){
        imgNum--;
        if(imgNum==-1)
            imgNum=2;
       
        slike[imgNum].style.display='block';
    }
    else{
        imgNum++;
    
        if(imgNum==3)
        imgNum=0;
        slike[imgNum].style.display='block';
    }
}

const portfolioSort =(dugme)=>{

    let portfolioItems=document.querySelectorAll('.portfolio-items div');
    let kategorija=dugme.getAttribute("data-category");
    portfolioItems.forEach(item=>{
        item.style.display="none";
    })
    
    portfolioItems.forEach(item=>{

        let itemKategorija=item.getAttribute('data-category');

        if(kategorija==='sve')
            item.style.display='block';
        else if(itemKategorija.includes(''+kategorija)){
            item.style.display='block';
        }
    })
}
const openModal =()=>{
    let overlay=document.querySelector('.overlay');
    let popupModal=document.querySelector('.popup-modal');

    overlay.style.display='block';
    popupModal.style.display='block';
}
const closeModal=()=>{
    let overlay=document.querySelector('.overlay');
    let popupModal=document.querySelector('.popup-modal');

    overlay.style.display='none';
    popupModal.style.display='none';
}