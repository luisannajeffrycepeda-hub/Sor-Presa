/* =========================================
   ELEMENTOS
========================================= */

const inicio =
    document.getElementById("inicio");

const jardinSeccion =
    document.getElementById("jardin-seccion");

const cartaSeccion =
    document.getElementById("carta-seccion");

const finalSeccion =
    document.getElementById("final-seccion");


const abrirBtn =
    document.getElementById("abrirBtn");

const continuarBtn =
    document.getElementById("continuarBtn");

const finalBtn =
    document.getElementById("finalBtn");


const floresContainer =
    document.getElementById("flores-container");


/* =========================================
   CAMBIAR PANTALLA
========================================= */

function cambiarPantalla(actual, siguiente) {

    actual.classList.remove("activa");

    setTimeout(() => {

        siguiente.classList.add("activa");

    }, 50);

}


/* =========================================
   CREAR UNA FLOR
========================================= */

function crearFlor(numero) {

    const flor =
        document.createElement("div");

    flor.classList.add("flor-codigo");


    /* Posición */

    const posiciones = [
        5,
        16,
        27,
        40,
        52,
        65,
        76,
        88
    ];

    const posicion =
        posiciones[
            numero % posiciones.length
        ];


    flor.style.left =
        posicion + "%";


    /* Tamaño */

    const escala =
        0.65 +
        Math.random() * 0.45;

    flor.style.transform =
        `scale(${escala})`;


    /* Inclinación */

    const inclinacion =
        -12 +
        Math.random() * 24;

    flor.style.setProperty(
        "--inclinacion",
        inclinacion + "deg"
    );


    const rotacion =
        -4 +
        Math.random() * 8;

    flor.style.setProperty(
        "--rotacion",
        rotacion + "deg"
    );


    /* Retraso */

    flor.style.animationDelay =
        `${numero * 0.13}s`;


    /* =================================
       TALLO
    ================================= */

    const tallo =
        document.createElement("div");

    tallo.classList.add("tallo");


    /* =================================
       HOJA
    ================================= */

    const hoja =
        document.createElement("div");

    hoja.classList.add("hoja");


    /* =================================
       CABEZA
    ================================= */

    const cabeza =
        document.createElement("div");

    cabeza.classList.add("cabeza");


    /* Pétalos */

    for (let i = 0; i < 6; i++) {

        const petalo =
            document.createElement("span");

        petalo.classList.add(
            "petalo",
            `p${i + 1}`
        );

        cabeza.appendChild(petalo);

    }


    /* Centro */

    const centro =
        document.createElement("span");

    centro.classList.add(
        "centro-flor"
    );

    cabeza.appendChild(centro);


    /* =================================
       CONSTRUIR FLOR
    ================================= */

    flor.appendChild(tallo);

    flor.appendChild(hoja);

    flor.appendChild(cabeza);

    floresContainer.appendChild(flor);

}


/* =========================================
   CREAR RAMO
========================================= */

function crearRamo() {

    floresContainer.innerHTML = "";


    /*
       Creamos 18 flores.

       Cada una aparece con
       un pequeño retraso.
    */

    for (let i = 0; i < 18; i++) {

        crearFlor(i);

    }

}


/* =========================================
   BOTÓN PRINCIPAL
========================================= */

abrirBtn.addEventListener(
    "click",
    () => {

        crearRamo();

        cambiarPantalla(
            inicio,
            jardinSeccion
        );

    }
);


/* =========================================
   CONTINUAR
========================================= */

continuarBtn.addEventListener(
    "click",
    () => {

        cambiarPantalla(
            jardinSeccion,
            cartaSeccion
        );

    }
);


/* =========================================
   FINAL
========================================= */

finalBtn.addEventListener(
    "click",
    () => {

        cambiarPantalla(
            cartaSeccion,
            finalSeccion
        );

    }
);