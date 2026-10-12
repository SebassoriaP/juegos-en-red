# GDD - Juegos en Red

## Introducción

La idea para esta práctica es desarrollar un videojuego 2D de esquivar obstáculos, inspirado en juegos como *Undertale*. En este juego, dos jugadores deberán colaborar para esquivar distintos obstáculos que aparecerán en un pequeño espacio cerrado y sobrevivir durante 2 minutos.

La estética elegida será pixel-art, principalmente por su simpleza y sencillez.

## Mecánicas

- Habrá dos jugadores, uno representado con un corazón de color magenta y otro con un corazón de color cian.
- El jugador 1 se controla con las teclas WASD, mientras que el jugador 2 se controla con las teclas Arriba, Abajo, Derecha e Izquierda.
- Ambos jugadores comparten una barra de salud de 20 puntos y una caja que delimita sus movimientos.
- Durante la partida, los jugadores se enfrentan a distintos ataques en forma de obstáculos que deben esquivar.
- Los efectos de los obstáculos varían dependiendo del color:
  - **Blanco:** quita 1 punto de salud.
  - **Verde:** recupera 1 punto de la salud compartida, sin superar el máximo de 20.
  - **Azul oscuro:** ralentiza durante 3 segundos al jugador que lo toca.
  - **Naranja:** ralentiza durante 3 segundos al otro jugador.
  - **Rojo:** quita 2 puntos de salud.
- Los obstáculos que ralentizan reducen la velocidad de movimiento del jugador afectado en un 30%.
- Durante la partida aparecerán power-ups asociados al color de cada jugador. Cada jugador únicamente podrá recoger los power-ups correspondientes a su color. Al recoger uno, ambos jugadores aumentarán su velocidad de movimiento un 30% durante 5 segundos.
- Cuando un jugador recibe daño de un obstáculo, entra en modo invencible durante 2 segundos, en los que no puede volver a recibir daño. En el modo invencible, el corazón se torna translúcido.
- Los obstáculos aparecen mediante patrones que se suceden de forma aleatoria.
- La partida tendrá una duración de **120 segundos (2 minutos)**. Cada 40 segundos aumentará la dificultad, incrementando progresivamente la velocidad de los obstáculos.
- Cuando la salud compartida llega a 0, ambos jugadores pierden la partida.
- Los jugadores ganan la partida si consiguen mantener la salud compartida por encima de 0 hasta que finalice el tiempo establecido.
- Al terminar la partida se mostrará una pantalla de victoria o derrota, con las opciones de jugar de nuevo o volver al menú inicial.

## Multijugador

Inicialmente, el juego se desarrollará para dos jugadores en un mismo ordenador, compartiendo teclado y pantalla.

Posteriormente, se adaptará para que ambos jugadores puedan jugar desde diferentes ordenadores conectados mediante red, manteniendo sincronizados los movimientos, obstáculos, salud y tiempo restante de la partida.