let nave = document.querySelector("#nav");

document.querySelector('.mmn').onclick = () =>{
    nave.classList.toggle('active');
    // searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}
window.onscroll = () =>{
    nave.classList.remove('active');
    // searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}

var x = 99;
function testIQ(){
    console.log(x); 
    var x =999;
}
testIQ()