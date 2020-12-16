//FUNCIONALIDAD PRINCIPAL
$(document).ready(function(){
    console.log(`                                                                                                                                             
    @@@@@@@@@@@@@@@@@@@@@@@@@&                                     
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@                                   
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 
                      @@@@@@@@@@@@,                                
                       ,@@@@@@@@@@@                                
                       @@@@@@@@@@@        @@@@@@@@                
                  @@@@@@@@@@@@@@@         @@@@@@@@                
                  @@@@@@@@@@@@@@          @@@@@@@@                
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                
                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                
                     @@@@@@@@@@@          @@@@@@@@                
                       @@@@@@@@@@@        @@@@@@@@
    
    Rutillas Toby    
    `);

    //-----------------------------------------------------------------
    
    // Botón de menu
    $('#nav-icon').click(function(){ toggleMenu(); });
    // Cerrar menu al pulsar fuera del mismo
    $('#menu').click(function(){
        toggleMenu();        
    }).children().click(function(e) {
        //No cerrar si se pulsa en el propio menu
        return false;
    });

   //-----------------------------------------------------------------

    //Inicializacion
    changeHeaderSize();
    //Al hacer scroll o cambiar tamanno pantalla
    window.onscroll = function() {changeHeaderSize()}
    window.onresize = function() {changeHeaderSize()}
  
});


//////////////////////////////////////////////////////////////////
//                         FUNCIONES                            //
//////////////////////////////////////////////////////////////////

/**
 * Abrir/Cerrar Menu
 */
function toggleMenu(){
    $('#nav-icon').toggleClass('open');
    $('#menu').toggleClass('open');
    $('#menuTitle').toggleClass('open');    
}

function goToAnchor(anchor){
    var elementScroll = $(anchor).offset();
    $('html,body').scrollTop(elementScroll.top - (document.documentElement.scrollTop>10?150:50));
    toggleMenu();
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollTop>10?150:50);
}

//-----------------------------------------------------------------

/**
 * Cambiar el tamanno de la cabecera (topbar) al subir al inicio de la pagina
 * normal<->mini
 */
function changeHeaderSize(){
    if(window.pageYOffset<10 && !window.matchMedia('screen and (max-width: 700px)').matches)
        $('#menu, header, #banner360').addClass('maxi');
    else
        $('#menu, header, #banner360').removeClass('maxi');
}