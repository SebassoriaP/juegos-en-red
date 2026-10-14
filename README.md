# TaleFor2 — Juegos en Red

Proyecto desarrollado para la asignatura **Juegos en Red** de la Universidad Rey Juan Carlos (URJC).

## Descripción

El proyecto consiste en desarrollar un videojuego cooperativo 2D de supervivencia, inspirado en las mecánicas de esquivar obstáculos de *Undertale*.

Dos jugadores deberán colaborar para sobrevivir durante 2 minutos dentro de una arena compartida, evitando diferentes patrones de obstáculos que aparecen a lo largo de la partida.

Ambos jugadores comparten una misma barra de salud, por lo que deberán coordinar sus movimientos, evitar recibir daño y aprovechar los objetos beneficiosos para conseguir la victoria.

El videojuego contará con una estética pixel-art sencilla, con el objetivo de facilitar la identificación de los personajes, obstáculos y elementos interactivos.

## Características principales

- **Cooperativo para dos jugadores:** ambos deberán colaborar para sobrevivir.
- **Salud compartida:** los jugadores disponen de 20 puntos de salud en conjunto.
- **Movimiento libre:** cada jugador puede desplazarse en cuatro direcciones dentro de una arena limitada.
- **Obstáculos variados:** diferentes tipos de obstáculos con efectos de daño, curación y ralentización.
- **Power-ups cooperativos:** objetos que pueden ser recogidos únicamente por el jugador correspondiente y que benefician a ambos.
- **Invulnerabilidad temporal:** después de recibir daño, el jugador dispone de 2 segundos de protección.
- **Patrones de ataque:** los obstáculos aparecen mediante diferentes patrones seleccionados aleatoriamente.
- **Supervivencia por tiempo:** los jugadores ganan si consiguen sobrevivir durante los 120 segundos de la partida.
- **Dificultad progresiva:** cada 40 segundos aumenta la velocidad de los obstáculos.

## Modalidades de juego

El desarrollo del videojuego se realizará progresivamente.

**Versión inicial — Multijugador local**

Los dos jugadores compartirán un mismo ordenador y teclado.

- Jugador 1: WASD.
- Jugador 2: flechas direccionales.

**Versión final — Multijugador en red**

El juego permitirá que ambos jugadores participen desde diferentes dispositivos conectados mediante red, manteniendo sincronizados los movimientos, la salud, los obstáculos y el estado de la partida.

## Documentación

El documento completo de diseño del videojuego (Game Design Document) se encuentra disponible en:

**[Consultar GDD](GDD.md)**

## Estado del proyecto

**Fase 1 — Diseño y documentación.**

Actualmente se han definido las mecánicas principales, las características y la estructura del videojuego. La implementación se realizará en las siguientes fases de la práctica.

## Presentación

La presentación de la Fase 1 se encuentra en el archivo
[TaleFor2 - GDD.pptx](TaleFor2%20-%20GDD.pptx).

[Ver presentación en Google Slides](https://docs.google.com/presentation/d/1kAnHR2WbEPPKEMs8aCVO1yCqv3uxVq8TCV9Wcp5TzAE/edit)