# JavaScript

Javascript es un lenguaje de programación

## Comentarios

```javascript
// Esto es un comentario de línea. Puede ir en cualquier sitio y lo que quede a continuación hasta el fin de línea se entenderá como un comentario

/**
 * Esto es un comentario de bloque.
 * Admite múltiples líneas.
 * No es necesario poner el asterisco en cada línea, solo es estético.
 * No se admiten comentarios de bloque anidados.
 * El inicio del bloque lo dermina /**
 * El fin de bloque lo determina el asterisco y la barra inclinada como está en la siguiente línea.
 */
```

## Variables

Las variables son contenedores donde guardar valores (o referencias) en memoria durante el tiempo que dura la aplicación.

La forma de definir una variable es con una palabra reservada (var, let o const) y a continuación el nombre que le queramos poner.

```javascript
var miVariable; //Esta forma está deprecada pero aún la podemos encontrar

let otraVariable; //Esta es la forma que usaremos generalmente

const unaConstante; //Las constantes son un tipo especial de variables a las que, una vez le asignemos un valor, ya no podremos modificarlo
```

Podemos dar el nombre que queramos a las variables, pero siguiendo estas reglas:

- Puede contener letras, números, \_, y $.
- No puede empezar por un número.
- Se pueden usar mayúsculas y minúsculas pero teniendo en cuenta que son valores diferentes (case sensitive)
