[![Build Status](https://travis-ci.org/islomar/adalab-intro-testing-tdd.svg)](https://travis-ci.org/islomar/adalab-intro-testing-tdd)


# Información del repo adalab-intro-testing-tdd
* Kata de práctica para la charla en Adalab Digital del 4 de septiembre de 2017.
* Puedes encontrar los slides de la presentación aquí: https://speakerdeck.com/islomar/introduccion-al-testing-y-tdd

## Información general
Para llevar a cabo esta práctica, tienes dos opciones:
1. Realizarla **online, a través de Codepen**. Para ello, sigue los siguientes pasos:
  * Ir a https://codepen.io/islomar/details/PKLbzx/
  * Hack click sobre "Fork"
  * Si ya tienes una cuenta, lógate. Si no, puedes clicar sobre "Save anonymously"
  * Enhorabuena: ¡ya tienes una copia del fichero base sobre la que puedes trabajar!
2. Realizarla en un **entorno local**. Para ello, sigue los pasos descritos en el resto de este README.

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
* Los tests deben guardarse bajo la carpeta /test, con sufijo **Spec.js**
* `npm run test:watch`: ejecuta los tests en fondo, refrescándose automáticamente ante cambios
* `npm run test`: ejecuta los tests una única vez
* `npm run mocha`: ejecuta los tests y el feedback te lo da un gatete ^___^


## Integración continua
* Este repositorio está integrado con **TravisCI** (a través del fichero .travis.yml). Cada vez que se suba código al repositorio de GitHub, se ejecutarán automáticamente los tests en dicho servidor de integración continua, pudiendo ver el resultado de su ejecución en la parte superior del README (badge verde o rojo según si están pasando correctamente o no).
* Si has hecho un **fork de este repo**, tendrás que ir a tu cuenta de TravisCI, habilitar este repo y cambiar la URL incluída en la cabecera de este README (sustituir *islomar* por tu username de GitHub
  ).
