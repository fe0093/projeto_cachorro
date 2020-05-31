// keypress --> no momento da tecla ser pressionada
// keyup --> no momento da tecla ser liberada
// keydown --> no momento da tecla ser afundada

// keypress = invocado para cada tecla pressionada

var distancia = 100;

$("#campo").keydown(function(evento){

    if (evento.which == 37) {
        $("#cachorro").css("margin-left", distancia);
        distancia = distancia - 10;
    }

    if (evento.which == 39) {
        $("#cachorro").css("margin-left", distancia);
        distancia = distancia + 10;
    }

    if (evento.which == 38) {
        $("#cachorro").css("margin-top", distancia);
        distancia = distancia - 10;
    }

    if (evento.which == 40) {
        $("#cachorro").css("margin-top", distancia);
        distancia = distancia + 10;
    }

});


