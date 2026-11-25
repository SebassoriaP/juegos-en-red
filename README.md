# TaleFor2 — Juegos en Red

Proyecto desarrollado para la asignatura **Juegos en Red** de la Universidad Rey Juan Carlos (URJC).

## Descripción

TaleFor2 es un videojuego cooperativo 2D de supervivencia, inspirado en las mecánicas de esquivar obstáculos de **Undertale**.

Dos jugadores deberán colaborar para sobrevivir durante 2 minutos dentro de una arena compartida, evitando los diferentes obstáculos que aparecen a lo largo de la partida.

Ambos jugadores comparten una misma barra de salud, por lo que deberán coordinar sus movimientos, evitar recibir daño y aprovechar los efectos beneficiosos para conseguir la victoria.

El videojuego cuenta con una estética pixel-art sencilla, con el objetivo de facilitar la identificación de los personajes y obstáculos.

## Características principales

- **Cooperativo para dos jugadores:** ambos deberán colaborar para sobrevivir.
- **Salud compartida:** los jugadores disponen de 20 puntos de salud en conjunto.
- **Movimiento libre:** ambos jugadores pueden desplazarse dentro de una arena limitada.
- **Obstáculos variados:** flechas de diferentes colores y barras móviles.
- **Efectos especiales:** daño, curación, ralentización y aceleración.
- **Invulnerabilidad temporal:** después de recibir daño, el jugador dispone de 2 segundos de protección.
- **Supervivencia por tiempo:** los jugadores ganan si sobreviven durante 120 segundos.
- **Dificultad progresiva:** aumenta la cantidad de flechas generadas conforme avanza la partida.
- **Interfaz:** barra de salud compartida y temporizador.
- **Escenas:** menú principal, partida, pausa, victoria y derrota.
- **Sonido:** música en el menú y efectos sonoros durante la partida.

## Tecnologías utilizadas

- JavaScript.
- Phaser 3.
- HTML y CSS.
- Vite.
- Node.js y npm.
- Aseprite.
- Git y GitHub.

## Instalación y ejecución

Desde la carpeta raíz del repositorio:

```bash
cd TaleFor2
npm install
npm run dev
```

Abrir en el navegador la dirección indicada por Vite.

## Controles

| Acción | Teclas |
|---|---|
| Jugador 1 (Magenta) | WASD |
| Jugador 2 (Cian) | Flechas direccionales |
| Iniciar partida | ENTER |
| Pausar o reanudar | ESC |
| Activar o desactivar sonido durante la partida | M |
| Volver al menú desde pausa o pantalla final | M |
| Volver a jugar desde la pantalla final | ENTER |

## Modalidades de juego

**Fase 2 — Multijugador local**

Los dos jugadores comparten un mismo ordenador, teclado y pantalla.

**Versión final — Multijugador en red**

Se plantea adaptar el videojuego para permitir que ambos jugadores participen desde diferentes dispositivos conectados mediante red.

## Documentación

El documento completo de diseño del videojuego se encuentra disponible en:

**[Consultar GDD](GDD.md)**

## Estado del proyecto

- Fase 1 — Diseño y documentación: completada.
- Fase 2 — Implementación del videojuego local: completada.
- Multijugador en red: pendiente.

## Integrantes — Grupo D

- Sebastián Soria.
- Benjamín Agüera.
- Marcos Varona.

## Presentación

- [Presentación de la Fase 1](TaleFor2%20-%20GDD.pptx).
- [Presentación de la Fase 2](TaleFor2%20-%20Fase%202.pptx).
