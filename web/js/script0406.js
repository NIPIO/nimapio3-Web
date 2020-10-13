var texto = '';
var instrumentos = '';
var lenguajeSeleccionado = '';
var textoTrabajo = '';
var cerroSidebar = false;
var isopen = false;
var toAdd = document.createDocumentFragment();
////////////////////DATOS////////////////////
imagenes = [
      {
        imagen: "./img/js.webp",
        abrev: 'js',
        texto: 'El lenguaje de programación que utilizo para el frontend. Tengo experiencia en el uso de librerías como Jquery, uso servidores del lado del cliente como NodeJs (y su node package manager) y el framework con el que desarrollo es Angular (tanto Js como 8 en adelante).',
        helper: 'Angular, Typescript, NodeJs, Jquery'
      },
      {
        imagen: "./img/html.png",
        abrev: 'html',
        texto: 'La principal herramienta para la construcción y estructura de un sitio web. Fue el primer lenguaje (de marcado) que aprendí y gracias a ello comencé como desarrollador. Pieza elemental para el órden y organización del frontend.',
        helper: 'Visual Studio Code'
      },
      {
        imagen: "./img/css.png",
        abrev: 'css',
        texto: 'CSS es el lenguaje de diseño que uso para estructurar y maquetar mis proyectos. Utilizo CSS plano y Bootstrap principalmente para el desarrollo responsive.',
        helper: 'LESS'
      },
      {
        imagen: "./img/php.png",
        abrev: 'php',
        texto: 'Uso PHP para desarrollar backend que permitan la conexión con bases de datos, desarrollar APIs que serán consumidas por el frontend, para realizar peticiones HTTP, creación y apertura de archivos locales. Tengo experiencia en Symfony (2.0 en adelante), y realicé algunos trabajos con Laravel y Codegniter.',
        helper: '[APIs]: Swagger, Nelmio, Insomnia, Postman'
      },
      {
        imagen: "./img/mysql.png",
        abrev: 'mysql',
        texto: 'Es el sistema de gestión de bases de datos relacional preferido para almacenar datos. Lo utilizo siempre -o casi siempre- que desarrolle proyectos en PHP. Tengo experiencia utiliando Workbench, pero mi cliente favorito es HeidiSQL.',
        helper: 'Workbench, HeidiSQL'
      },
       {
        imagen: "./img/ionic.png",
        abrev: 'ionic',
        texto: 'Ionic es el framework que utilizo para el desarrollo Mobile tanto para Android como para Ios. Utiliza Cordova para construir la aplicación y Android Studio para el desarrollo. He realizado varias aplicaciones con el fin de perfeccionarme como freelance en el desarrollo mobile.',
        helper: 'Cordova, Andorid Studio'
      },
];

trabajos = [
      {
        imagen: "./img/mobile.png",
        abrev: "0",
        texto: 'Mobile',
      },
      {
        imagen: "./img/web.png",
        abrev: "1",
        texto: 'Web',
      }
];

mobile = [
      // {
      //   srcVideo: "./video/scanner.mp4",
      //   descripcion: 'Este scanner accede a componentes nativos del telefóno (cámara, contactos y calendario) y permite trabajar con sus funcionalidades. Permite navegar por un mapa y realizar peticiones a un sitio web. Los datos scaneados se guardan en un historial que accede al almacenamiento del telefono.',
      // },
      // {
      //   // srcVideo: "./video/sonidos.mp4",
      //   srcVideo: "./video/sonidos.mp4",
      //   descripcion: 'Una aplicación simple pero práctica: una botonera de sonidos.',
      // },
      // {
      //   srcVideo: "./video/scanner.mp4",
      //   descripcion: 'Tienda',
      // },
      // {
      //   srcVideo: "./video/scanner.mp4",
      //   descripcion: 'Sonidos',
      // }
];
web = [
      {
        srcVideo: "./img/hlc.jpg",
        descripcion: 'Hasta la china fue un proyecto desarrollado con Bootstrap, Flexbox y Jquery',
        link: 'https://www.hastalachinaproduccion.com'
      }
      ,
      {
        srcVideo: "./img/wasabi.jpg",
        descripcion: 'Wasabi es un e-commerce con carrito de compra, conectado a Mercado Pago, y con un panel de administración para que el cliente pueda cargar productos, categorías, cambiar precios y también ver las compras que le realizaron.',
        link: 'http://www.wasabiimpresiones.com'
      }
];
////////////////////FIN DATOS////////////////////

var skills, oppSide;
var tabOut = {
    left: false,
    right: false
}

//APARICION CON EFECTO RETARDADO AL INCIIAL LA PAGINA//
$("#title").fadeTo(1000, 1);
$("#subtitle").fadeTo(1000, 1);
$("#navbar").delay(2000).fadeTo(2000, 1);
$(".sidebarTab h5").delay(2000).fadeTo(2000, 1);


//////////////////////////NAV IZQUIERO//////////////////////////
//CARGA LAS IMAGENES DE LOS LENGUAJES.
for (var i = 0; i < imagenes.length; i++) {
    var img = document.createElement('IMG');
    img.src = imagenes[i].imagen
    img.className = 'projectImg';
    img.id = imagenes[i].abrev + 'img';
    if (window.innerWidth < 380) {
        img.setAttribute('onclick', "detallesLenguaje('" + imagenes[i].abrev + "')")
    }
    $("#sidebar-left div#lenguajes").append(img)
}

function detallesLenguaje(lenguaje) {
        //SE PREGUNTA SI FUE CERRADO ANTES EL SIDEBAR, ASÍ SE OCULTA EL TEXTO QUE HAYA QUEDADO ABIERTO (Y APARECEN AL INICIO SOLO LOS ICONOS)
        if (!cerroSidebar) {
            if (lenguajeSeleccionado == lenguaje ) {
                //SI CLICKEA 2 VECES EL MISMO LENGUAJE, EL TEXTO SE OCULTA
                $('#textoLenguajes').hide(350, function() {
                    $(this).html("").show(100);
                        if (window.innerWidth > 700) {
                            $('#textoLenguajes').fadeOut(350, function() {
                                $("#lenguajes").css("transform", "translateY(0%)");
                                $("#lenguajes").css("width", "95%"); 
                        		 if (window.innerWidth <1500) {
                        			$("#lenguajes").css("height", "50%");                         
                        		}
                            });
                        }
                    lenguajeSeleccionado = '';
                });
                return;
            }
            for (var i = 0; i < imagenes.length; i++) {
                if (window.innerWidth > 700) {
                    $('#textoLenguajes').fadeOut(350, function() {
                        $("#lenguajes").css("transform", "translateY(-20px)");                         
                        $("#lenguajes").css("width", "80%");                         
                        $("#lenguajes").css("height", "30%");                         
                        $(".projectImg").css("height", "100%");                         
                        $(".projectImg").css("max-width", "30%");                         
                        $("#lenguajes").css("margin", "0 auto");                         
                    });
                } else {
                  $('#textoLenguajes').fadeOut(350, function() {
                        $("#textoLenguajes").css("margin", "10% auto");                         
                    });
                }
                //SETEA LOS TEXTOS QUE APARECEN DEPENDIENDO DEL LENGUAJE.
                if(lenguaje == imagenes[i].abrev) {
                    texto = imagenes[i].texto
                    instrumentos = imagenes[i].helper
                    lenguajeSeleccionado = imagenes[i].abrev
                }
            }
            //SE MUESTRA UN SIMBOLO + QUE DA UN POCO MÁS DE INFORMACIÓN
            $('#textoLenguajes').fadeOut(350, function() {
                $(this).html(texto).fadeIn(350);    
                if (lenguajeSeleccionado != 'html' && lenguajeSeleccionado != 'css') {
                    $(this).append(' <i class="fa fa-plus" title="Frameworks/Librerias/Software: ' + instrumentos + '"></i>')
                } else if (lenguajeSeleccionado == 'css') {
                    $(this).append(' <i class="fa fa-plus" title="Compilador: ' + instrumentos + '"></i>')
                } else if (lenguajeSeleccionado == 'html') {
                    $(this).append(' <i class="fa fa-plus" title="Editor de texto: ' + instrumentos + '"></i>')
                }

            });
        } else {
            //SI CERRÓ EL SIDE BAR, SE EJECUTA ESTA ACCION QUE OCULTA EL TEXTO.
            $('#textoLenguajes').hide(350, function() {
                    $(this).html("").show(100);
                        if (window.innerWidth > 700) {
                            $('#textoLenguajes').fadeOut(350, function() {
                                $("#lenguajes").css("transform", "translateY(0%)");                         
                            });
                        }
                    lenguajeSeleccionado = '';
                    cerroSidebar = false;
            });
        }

}
//////////////////////////FIN NAV IZQUIERO//////////////////////////


//////////////////////////NAV DERECHO//////////////////////////
var trabajos = document.getElementById("trabajos");
var body = document.getElementById("particles-js");
var modal = document.getElementById("myModal");
var modalConfirmacion = document.getElementById("myModalConfirmacion");
//close modal.
body.onclick = ()=>{closeModal()}
document.getElementsByClassName("close")[0].onclick = ()=>{closeModal()}
document.getElementsByClassName("sidebarTab")[0].onclick = ()=>{closeModal()}
document.getElementsByClassName("sidebarTab")[1].onclick = ()=>{closeModal()}



function openModal(ambiente) {
    if (isopen) {
        closeModal()
        return
    }
    isopen = true;
    if (ambiente.length < 2) { //ES MOBILE, ABRO MODAL DE CONFIRMACION.
        modalConfirmacion.style.display = "block";
        myModal. style.overflowY="scroll;" 
    }
    //CARGA LAS IMAGENES DE LOS TRABAJOS.
    //creo el fragmento
    for (var i = 0; i < ambiente.length; i++) {
        //creo el div
        var div = document.createElement('div');
        if(i==0) {
            div.className = 'carousel-item active video';        
        } else {
             div.className = 'carousel-item video';

        }
        if (ambiente.length > 2) { //ES MOBILE, ABRO MODAL DE CONFIRMACION.
            //creo el video y su source
            var multimedia = document.createElement('video');
            multimedia.controls = true;
            var sourceMP4 = document.createElement("source"); 
            sourceMP4.src = ambiente[i].srcVideo
            sourceMP4.type = "video/mp4";
            multimedia.appendChild(sourceMP4);
        } else {
            var multimedia = document.createElement('a');
            multimedia.href = ambiente[i].link;
            multimedia.target = '_blank';
            var img = document.createElement('img');
            img.src = ambiente[i].srcVideo
            img.style.width = '100%';
            multimedia.appendChild(img);
        }

        //creo el div que contiene el parrafo
        var divParrafo = document.createElement('div');
        //creo el parrafo
        var parrafo = document.createElement('p');
        divParrafo.style.background = 'black'
        divParrafo.style.marginTop = '-5px'
        parrafo.innerHTML = ambiente[i].descripcion
        divParrafo.append(parrafo)
        div.append(multimedia)
        div.append(divParrafo)
        
        //inserto el div con el vidoe y el parrafo en el fragment
        toAdd.appendChild(div);
    }
    //inserto el fragmento en e modal
    document.getElementsByClassName("carousel-inner")[0].appendChild(toAdd);

    //activo la aparicion del modal.
    modal.style.display = "block";
    modal.style.margin = 'auto';
    body.style.filter = 'blur(3px)';
    trabajos.style.filter =  'blur(3px)';
    modal.style.background = 'transparent';
}

function closeConfirmacion() {
    modalConfirmacion.style.display = "none"
    closeModal()

}
function closeModal() {
    //elimino todos los que fueron agregados cuando abrió el modal (si abre web no aparecen los del mobile (si lo abrió anteriormente))
    removeElementsByClass('carousel-item')
    modal.style.display = "none";
    body.style.filter = 'none';
    modalConfirmacion.style.display = "none";
    trabajos.style.filter =  'none';
    isopen = false;
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
//////////////////////////FIN NAV DERECHO//////////////////////////

//////////////////////////FLECHAS//////////////////////////


//COLOCA LA DISPOSICIÓN DE LAS FLECHAS DEPENDIENDO DE LA PANTALLA

if (window.innerWidth < 700) {
    $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
    $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
} else {
    $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
    $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
}

$(".sidebarTab").hover(function () {
    $("#sidebar-" + $(this).attr('id').substring(11)).css("background-color", "#090909");
}, function () {
    $("#sidebar-" + $(this).attr('id').substring(11)).css("background-color", "#090909");
}).click(function () {
    tabClick(tabOut[$(this).attr('id').substring(11)], $(this).attr('id').substring(11));
});


function tabClick(tabOutStatus, side) {
    if (side == "right") {
        oppSide = "left";
    } else {
        oppSide = "right";
    }
    if (tabOut[oppSide] == true) {
        tabClick(true, oppSide);
    }
    if (window.innerWidth > 700) {
        if (!tabOutStatus) {
            setTimeout(function(){
                if (side == 'right') {
                    $("#title").css("transform", "translateY(-74%)");         
                    $("#sidebarTab-" + side).css(side, (window.innerWidth - 16));
                } else {
                    $("#title").css("transform", "translateY(74%)");
                    $("#sidebarTab-" + side).css(side, (window.innerWidth - 16));
                }
                $("#sidebar-" + side).css(side, 0);
                $("#sidebarTab-" + side + " h5").fadeOut(500, 0);
                $("#arrow-" + side).html("<i class='fa fa-chevron-" + side + "' aria-hidden='true'></i>");
            }, 600);     
        } else { 
                cerroSidebar = true;
                detallesLenguaje()
                $("#sidebar-" + side).css(side, "-100%");
                if (side == 'right') {
                    $("#title").css("transform", "translateY(0%)");         
                } else {

                    $("#title").css("transform", "translateY(0%)");
                }
                $("#sidebarTab-" + side).css(side, "0px");
                $("#sidebarTab-" + side + " h5").fadeIn(500, 0);
                $("#arrow-" + side).html("<i class='fa fa-chevron-" + oppSide + "' aria-hidden='true'></i>");
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutStatus) {
            setTimeout(function(){
                //$("#title").css("transform", "translateY(-15%)");
                $("#sidebar-" + side).css("bottom", 0);
                $("#sidebar-" + side).css("height", "98%");
                $("#sidebarTab-" + side).css("bottom", (window.innerHeight - 20));
                $("#arrow-" + side).html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            }, 600);     
        } else {
            cerroSidebar = true;
            detallesLenguaje()
            //$("#title").css("transform", "translateY(-70%)");
            $("#sidebar-" + side).css("bottom", "0%");
            $("#sidebar-" + side).css("height", '0');
            $("#sidebarTab-" + side).css("bottom", '0');
            $("#arrow-" + side).html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
        }
        if (window.innerWidth < 360) {
            $("#navbar").fadeToggle(500);
        }
    }
    tabOut[side] = !tabOutStatus;
}


//////////////////////////FIN FLECHAS//////////////////////////

////////////////////////////////////////////////////PARTICLES JS////////////////////////////////////////////////////

//otro ej (DESCOMENTAR PARTICLES.JSON)     particlesJS.load('particles-js', 'particles.json', function () {});

        particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 150,
              "density": {
                "enable": true,
                "value_area": 500
              }
            },
            "color": {
             // "value": ["#60D4FF", "#CACF85", "#6F73D2", "#57A773"]
              "value": ["#6eb58f", "#6eb58f", "#6eb58f", "#6eb58f"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 15
              }
            },
            "opacity": {
              "value": 1,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 2.5,
                "opacity_min": 0.15,
                "sync": true
              }
            },
            "size": {
              "value": 2.5,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.15,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 110,
             // "color": "#33b1f8",
              "color": "#6eb58f",
              "opacity": 0.25,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4.6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
        var count_particles, stats, update;
        stats = new Stats;
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function() {
          stats.begin();
          stats.end();
          if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
          }
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);;
    
