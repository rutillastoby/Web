//FUNCIONALIDAD PRINCIPAL

$(document).ready(function(){
    // Botón de menu
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('#menu').toggleClass('open');
        $('#menuTitle').toggleClass('open');                
    });

    // Cerrar menu al pulsar fuera del mismo
    $('#menu').click(function(){
        $(this).toggleClass('open');
        $('#nav-icon').toggleClass('open');
        $('#menuTitle').toggleClass('open');                
    }).children().click(function(e) {
        //No cerrar si se pulsa en el propio menu
        return false;
    });

   //-----------------------------------------------------------------

    /**
    * Cambiar el tamanno de la cabecera (topbar) al subir al inicio de la pagina
    * normal<->mini
    */
    function changeHeaderSize(){
        if(window.pageYOffset>0)
            $('#menu, header, #banner360').addClass('mini');
        else
            $('#menu, header, #banner360').removeClass('mini');
    }
    //Inicializacion
    changeHeaderSize();
    //Al hacer scroll 
    window.onscroll = function() {changeHeaderSize()}

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
});