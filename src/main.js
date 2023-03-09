const port = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
let cont =0;

 function cambio(){
    if( cont==0) {
   
        document.getElementById('cont-menu').style.transform= 'translateX(-100%)';
        document.getElementById('cont-menu').style.position= 'relative';
        document.getElementById('btn-menu').style.position= 'absolute';
        //document.getElementById('cont-menu').style.= '1';
       cont=1;
    }
    else{
        document.getElementById('cont-menu').style.visibility= 'visible';
        document.getElementById('cont-menu').style.width= '100%';
        document.getElementById('btn-menu').style.position= 'absolute';
    }
       // document.getElementById('btn-menu').style.checked= "hidden";
   
  
}

port.addEventListener('click',cambio,true);
about.addEventListener('click',cambio,true);
contact.addEventListener('click',cambio,true);