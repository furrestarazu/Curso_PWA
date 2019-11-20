
var turno = 'X';
var puntosX = 0;
var puntosO = 0;
var cantidadJugadas = 0;

//document.getElementById("botonInicio").disabled = true;

function dibujarTablero() 
{
    for (let i=0; i<9; i++)
    {
        let casilla = document.createElement('div');
        casilla.id = i;
        casilla.className = "casillas";
        casilla.setAttribute('onclick',"escribirCasilla(this.id)");
        document.getElementById("tablero").appendChild(casilla);
    }
}


function mostrarInicio(mostrar)
{
    if(mostrar)
    {
        document.getElementById("inicio").className = "modal";
    }
    else
    {
        document.getElementById("inicio").className = "modal modalOff";
        document.getElementById("puntosX").innerHTML = "X: " + puntosX;
        document.getElementById("puntosO").innerHTML = "O: " + puntosO;
    }
}


function iniciarPartida(primeraVez)
{
    if(primeraVez)
    {
        mostrarInicio(false);
        dibujarTablero();
    }
    else
    {
        limpiarTablero();
        cantidadJugadas=0;
        mostrarInicio(false);
    }

    if(turno=='X')
    {
        document.getElementById("jugadaX").className = "imgShow";
    }
    else
    {
        document.getElementById("jugadaO").className = "imgShow";
    }

    document.getElementById("ganador").className="ganadorOff";
}


function escribirCasilla(id)
{
    if(cantidadJugadas<9)
    {
        if(turno=='X')
        {
            document.getElementById(id).className = "X";
            document.getElementById(id).innerHTML="<h2>X</h2>";
            document.getElementById(id).removeAttribute("onclick");
            document.getElementById("jugadaX").className = "imgHide";
            document.getElementById("jugadaO").className = "imgShow";
        }
        else
        {
            document.getElementById(id).className = "O";
            document.getElementById(id).innerHTML="<h2>O</h2>";
            document.getElementById(id).removeAttribute("onclick");
            document.getElementById("jugadaX").className = "imgShow";
            document.getElementById("jugadaO").className = "imgHide";
        }

        if(verificarJugada())
        {
            document.getElementById("ganador").className = "ganador";
            document.getElementById("ganador").innerHTML = "<h1>GANADOR: " + turno + "</h1>"; 
            document.getElementById("jugadaX").className = "imgHide";
            document.getElementById("jugadaO").className = "imgHide";
            incrementarPuntaje(turno);

            if(puntosX<1 && puntosO<1)
            {
                document.getElementById("botonInicio").setAttribute('onclick',"iniciarPartida(false)");
                document.getElementById("botonInicio").innerText = "REVANCHA!";
                document.getElementById("botonReinicio").className = "botonReinicio";
                document.getElementById("botonContinuar").className = "btnContinuar";
            }
            else
            {
                //mostrar copa
                if(turno=='X')
                {
                    document.getElementById("imagenCopa").src = "img/copaX.png";
                }
                else
                {
                    document.getElementById("imagenCopa").src = "img/copaO.png";
                }
                document.getElementById("campeon").className="modalGanador";
                document.getElementById("imagenCopa").className="modalGanador";

                puntosX=0;
                puntosO=0;
                cantidadJugadas=0;
                turno = 'X';
            }
        }
        
        cambiarTurno();
    }
}

function Continuar()
{
    mostrarInicio(true);
    document.getElementById("botonContinuar").className = "btnContinuarOff";
    document.getElementById("ganador").innerHTML="";
}

function cambiarTurno()
{
    if(turno=='X')
    {
        turno = 'O';
    }
    else
    {
        turno = 'X';
    }
}


function verificarJugada()
{
    cantidadJugadas++;

    if (cantidadJugadas<9)
    {
        // revisa verticales
        for (let i=0; i<3; i++) 
        {
            if(document.getElementById(i).innerHTML!="" && document.getElementById(i).innerHTML == document.getElementById(i+3).innerHTML && document.getElementById(i).innerHTML == document.getElementById(i+6).innerHTML)
            {
                document.getElementById(i).className ="ganado";
                document.getElementById(i+3).className ="ganado";
                document.getElementById(i+6).className ="ganado";
                return true;
            }
        }
    
        // revisa horizontales
        for (let i=0; i<7; i=i+3)
        {
            if(document.getElementById(i).innerHTML!="" && document.getElementById(i).innerHTML == document.getElementById(i+1).innerHTML && document.getElementById(i).innerHTML == document.getElementById(i+2).innerHTML)
            {
                document.getElementById(i).className ="ganado";
                document.getElementById(i+1).className ="ganado";
                document.getElementById(i+2).className ="ganado";
                return true;
            }
        }
        
        // revisa diagonal negativa
        if(document.getElementById(0).innerHTML!="" && document.getElementById(0).innerHTML == document.getElementById(4).innerHTML && document.getElementById(0).innerHTML == document.getElementById(8).innerHTML)
        {
            document.getElementById(0).className ="ganado";
            document.getElementById(4).className ="ganado";
            document.getElementById(8).className ="ganado";
            document.getElementById("ganador").className = "ganador"
            return true;
        }
    
        //revisa diagonal positiva
        if(document.getElementById(2).innerHTML!="" && document.getElementById(2).innerHTML == document.getElementById(4).innerHTML && document.getElementById(2).innerHTML == document.getElementById(6).innerHTML)
        {
            document.getElementById(2).className ="ganado";
            document.getElementById(4).className ="ganado";
            document.getElementById(6).className ="ganado"
            return true;
        }
    }
    else
    {
        document.getElementById("ganador").className = "ganador";
        document.getElementById("ganador").innerHTML = "<h1>EMPATE!!</h1>";
        document.getElementById("jugadaX").className = "imgHide";
        document.getElementById("jugadaO").className = "imgHide";
    }
}


function incrementarPuntaje(jugador)
{
    if(jugador=='X')
    {
        puntosX++;
        document.getElementById("puntosX").innerHTML = "X: " + puntosX;
    }
    else
    {
        puntosO++;
        document.getElementById("puntosO").innerHTML = "O: " + puntosO;
    }
}


function limpiarTablero() 
{
    for (let i=0; i<9; i++)
    {
        let casilla = document.getElementById(i);
        casilla.setAttribute("onclick","escribirCasilla(this.id)");
        casilla.innerHTML="";
        casilla.className = "casillas";
    }
}

function reiniciarPartida()
{
    location.reload();
}