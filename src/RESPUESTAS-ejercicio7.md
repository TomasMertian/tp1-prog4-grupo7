# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?
`interface` está pensada principalmente para definir objetos. Permite declarar la misma interface más de una vez y TypeScript une sus propiedades automáticamente. Esto se llama declaration merging. También es clara para representar clases y entidades con campos definidos.


## ¿Qué permite hacer `type` que `interface` no?

`type` puede nombrar más clases de valores, no solamente objetos. Por ejemplo, puede representar un tipo primitivo, una unión de opciones, una tupla o un tipo construido a partir de otro.

Ejemplos:

```ts
type Legajo = number;
type Estado = "activo" | "inactivo";
type Coordenada = [number, number];

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?
Sí. Una interface se extiende con extends:

interface Persona {
  nombre: string;
}

interface Alumno extends Persona {
  legajo: number;
}

Un type se puede combinar con otro usando &:

type Persona = {
  nombre: string;
};

type Alumno = Persona & {
  legajo: number;
};

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Para representar Alumno elegiría interface, porque es un objeto con propiedades definidas y la sintaxis es fácil de leer. Además, si más adelante se necesita agregar campos o extenderlo desde otro modelo, resulta práctico. En este ejercicio, tanto interface como type funcionan igual porque describen la misma estructura.

