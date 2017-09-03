# Información del repo adalab-intro-testing-tdd
Kata de práctica para la charla en Adalab Digital del 4 de septiembre de 2017

## Información general
Para llevar a cabo esta práctica, tienes dos opciones:
1. Realizarla online, a través de Codepen. Para ello, sigue los siguientes pasos:
  * Ir a https://codepen.io/islomar/details/PKLbzx/
  * Hack click sobre "Fork"
  * Si ya tienes una cuenta, lógate. Si no, puedes clicar sobre "Save anonymously"
  * Enhorabuena: ¡ya tienes una copia del fichero base sobre la que puedes trabajar!
2. Realizarla en un entorno local. Para ello, sigue los pasos descritos en el resto de este README.


## Entorno usado
* Atom
* Plugins:
  * platformio-ide-terminal
  * autosave

## Prerequisitos
El sistema debe tener **node** y **npm** instalados.


## Cómo preparar el entorno
* Ejecutar `npm install`


## Cómo ejecutar los tests
* `npm run test:watch`: ejecuta los tests en fondo, refrescándose automáticamente ante cambios
* `npm run test`: ejecuta los tests una única vez


## Docker
`docker run -t -i ubuntu:16.04 /bin/bash`

sudo apt-get update
sudo apt-get install nodejs npm -y
