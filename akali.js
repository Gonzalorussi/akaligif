
let estado_kunai = "off";

/* capturo el sonido */
let sonido_akali = document.querySelector("#akali_on");
let sonido_click = document.querySelector ("#akali_click");

/* capturar las cajas */

let akali = document.querySelector(".akali");
let akali_boton = document.querySelector(".akali_boton");

/* evento */
akali_boton.addEventListener("click",controlar_kunai)

/* funcion controlar kunai */

function controlar_kunai () {
if (estado_kunai=="off"){
    estado_kunai="on";
    sonido ()
akali.classList.add ("akali_activo")
}else{
    estado_kunai = "off"
    sonido ()
    akali.classList.remove("akali_activo")
}
}

/* funcion para manipular el sonido */

function sonido () {
    if(sonido_akali.paused){
        sonido_click.play()

        sonido_akali.play()
    }else{
        sonido_click.play()
        sonido_akali.pause()
}
}




