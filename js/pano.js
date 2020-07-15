/*****************************************************************/
/*   SCRIPT PARA CARGAR IMAGEN 360 EN LA CABECERA DE LA PÁGINA   */
/*****************************************************************/

$( document ).ready(function() {
    //////////////// Marzipano ///////////////
    'use strict';

    //1. VISOR DE IMAGENES
    var panoElement = document.getElementById('pano');
    /* Progresive controla que los niveles de resolución se cargan en orden, de menor 
    a mayor, para conseguir una carga mas fluida. */
    var viewer =  new Marzipano.Viewer(panoElement, {stage: {progressive: true}}); 
    // Orientacion con inclinacion del dispositivo (giroscopio)
    var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
    var controls = viewer.controls();
    controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

    //2. RECURSO
    var source = Marzipano.ImageUrlSource.fromString("img/360/{z}/{f}/{y}/{x}.jpg",           
    {cubeMapPreviewUrl: "img/360/preview.jpg", 
    cubeMapPreviewFaceOrder: 'bdflru'});//(bdflru para establecer el orden de la capas de la imagen de preview)

    //3. GEOMETRIA 
    var geometry = new Marzipano.CubeGeometry([
    { tileSize: 256, size: 256, fallbackOnly: true  },
    { tileSize: 512, size: 512 },
    { tileSize: 512, size: 1024 },
    { tileSize: 512, size: 2048},
    ]);

    //4. VISTA
    //Limitadores de zoom min y max para vista vertical y horizontal
    var limiter = Marzipano.util.compose(
        Marzipano.RectilinearView.limit.vfov(1.898131111111111, 1.898131111111111),
        Marzipano.RectilinearView.limit.hfov(1.898131111111111, 1.898131111111111)
    );
    //Establecer estado inicial de la vista con el primer parametro
    var view = new Marzipano.RectilinearView({yaw: -1, pitch: 0, roll: 0, fov: Math.PI}, limiter);

    //5. ESCENA SOBRE EL VISOR
    var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true
    });

    //6.MOSTAR
    scene.switchTo({ transitionDuration: 2000 });

    //7. AUTOROTACION
    var autorotate = Marzipano.autorotate({
        yawSpeed: 0.06,         // Yaw rotation speed
        targetPitch: 0,        // Pitch value to converge to
        targetFov: Math.PI/2   // Fov value to converge to
    });
    // Movimiento infinito
    viewer.setIdleMovement(Infinity);
    // Empezar rotacion
    viewer.startMovement(autorotate); 
    
    //8. MOVIMIENTO CON ORIENTACION DISPOSITIVO
    deviceOrientationControlMethod.getPitch(function(err, pitch) {});
    controls.enableMethod('deviceOrientation');
});