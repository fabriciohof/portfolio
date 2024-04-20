//rolagem do navbar
$(document).ready(function(){
    $('nav a').click(function(){
        var target = $($(this).attr('href'));
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

// menu mobile

let botaoMenu = document.getElementById('botao-abrir')
let menu = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

botaoMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


function toggleBox(box) {
    box.classList.toggle('expandido');
}


if (window.innerWidth > 1023) {
    // Adicionar evento de clique apenas em dispositivos não móveis
    document.querySelectorAll('.habilidades-box').forEach(function(element) {
        element.addEventListener('click', function() {
        });
    });
}
