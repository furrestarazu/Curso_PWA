    for (var i=0; i<9; i++)
    {
        var casilla = document.createElement('div');
        casilla.id = i;
        casilla.className = "casillas";
        casilla.innerHTML = "<h2>X<h2>";
        document.getElementById("tablero").appendChild(casilla);
    }

    