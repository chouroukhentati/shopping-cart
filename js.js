function increase(id,p,idp,idpp){

    let inp1=document.getElementById(id)
    let val=inp1.value
    val++
    inp1.value=val
    console.log(val)
    //in price
    let sp=document.getElementById(idp)
    sp.innerHTML=p*val
    let total=document.getElementById(idpp)
    total.innerHTML=parseInt(total.innerHTML)+p
}
function decrease(id,p,idp,idpp){
     
    let inp2=document.getElementById(id)
    let val=inp2.value
    if (val>0){
    val--
    inp2.value=val
    let sp=document.getElementById(idp)
    sp.innerHTML=p*val
    console.log(val)
    console.log(sp)}
    let total=document.getElementById(idpp)
    total.innerHTML=parseInt(total.innerHTML)-p
}

function increase1(id,p,idp,idpp){

    let inp3=document.getElementById(id)
    let val1=inp3.value
    val1++
    inp3.value=val1
    console.log(val1)
    //in price
    let sp=document.getElementById(idp)
    sp.innerHTML=p*val1
    let total=document.getElementById(idpp)
    total.innerHTML=parseInt(total.innerHTML)+p

}
function decrease1(id,p,idp,idpp){
     
    let inp4=document.getElementById(id)
    let val1=inp4.value
    if (val1>0){
    val1--
    inp4.value=val1
    //dec price
    let sp=document.getElementById(idp)
    sp.innerHTML=p*val1
    console.log(val1)}
    let total=document.getElementById(idpp)
    total.innerHTML=parseInt(total.innerHTML)-p
}

    const removeBtn = document.getElementsByClassName('btn-outline-danger');
    
   
    
    for(let i=0;i<removeBtn.length;i++){
        removeBtn[i].addEventListener('click',function removing(){
            let divp=document.getElementById(`${i}`)
           
            divp.remove()
            

        })
    
    
    //accBtn[0].disabled = false;
    //accBtn[0].classList.add('accept-btn-vis');
    //accBtn[0].setProperty("disabled", false);
    //accBtn[0].style.setProperty("enable", true);

   
 }





/* const col=document.getElementsByClassName('fa');
for (let i=0;i<col.length;i++){
    col[i].addEventListener('click',function coloring() {

        let col1=document.getElementById(buttun`${i}`);
        col1.style.color = "red"
    })


*/ 

$ ( document).ready(function(){
  
  $ (".like").click(function(){
   
   $  (this).toggleClass("heart");
   
   
   
   
   
   });
});