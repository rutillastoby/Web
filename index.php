<html>
    <?php include 'head.html'; ?>
    <body>
        <span id="titleTop" class="">Rutillas Toby</span>
        <!-- Logo -->
        <svg id="logoIndex" viewBox="0 0 1920 1920">
            <path fill="white" d="M0,0V1920H1920V0ZM1668.39,1475.07H1415.94v-175.3H1079.79l128.12,175.3H871.32L671.47,1201.59V949.15h42.07a126.23,126.23,0,0,0,0-252.45H250.73V444.26h568c197.52,0,357.63,160.11,357.63,357.63a356.48,356.48,0,0,1-97.5,245.43h337.09V872h252.45Z"/>
        </svg>
        <div id="containerBack"> 
            <div id="pano"></div>
        </div>
        <!-- Menu -->
        
        <!-- MARZIPANO -->
        <script src="js/marzipano/es5-shim.js"></script>
        <script src="js/marzipano/eventShim.js"></script>
        <script src="js/marzipano/requestAnimationFrame.js"></script>
        <script src="js/marzipano/marzipano.js"></script>
        <script src="js/marzipano/DeviceOrientationControlMethod.js"></script>

        <script>
            ///////////////////////////////////////////////////////////////////////////
            ///////////////////////////   MARZIPANO   /////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////
            'use strict';
            //1. VISOR DE IMAGENES
            var panoElement = document.getElementById('pano');
            /* Progresive controla que los niveles de resolución se cargan en orden, de menor 
            a mayor, para conseguir una carga mas fluida. */
            var viewer =  new Marzipano.Viewer(panoElement, {stage: {progressive: true}}); 

            // Register the custom control method.
            var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
            var controls = viewer.controls();
            controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

            //2. RECURSO
            var source = Marzipano.ImageUrlSource.fromString("img/2/{z}/{f}/{y}/{x}.jpg",           
            {cubeMapPreviewUrl: "img/2/preview.jpg", 
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
                yawSpeed: 0.1,         // Yaw rotation speed
                targetPitch: 0,        // Pitch value to converge to
                targetFov: Math.PI/2   // Fov value to converge to
            });
            // Movimiento infinito
            viewer.setIdleMovement(Infinity);
            // Empezar rotacion
            viewer.startMovement(autorotate); 

           

            deviceOrientationControlMethod.getPitch(function(err, pitch) {});
            controls.enableMethod('deviceOrientation');
        </script>
    </body>
</html>

