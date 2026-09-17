/**
 * EJERCICIO 19 - Sistema de personajes
 * ---------------------------------------------------------------------------
 * Cada personaje ataca distinto:
 *   - Guerrero: ataque físico -> hace daño = this.ataque
 *   - Mago:     ataque mágico -> hace daño = round(this.ataque * 1.5)
 *   - Arquero:  ataque a distancia -> hace daño = round(this.ataque * 0.8)
 *
 * La vida de quien recibe el ataque nunca debe bajar de 0.
 */
export abstract class Personaje {
    constructor(
        public nombre: string,
        public vida: number,
        public ataque: number
    ) {}

    abstract atacar(objetivo: Personaje): void;
}

export class Guerrero extends Personaje {
    atacar(objetivo: Personaje): void {
      if (objetivo.vida >= this.ataque) {
        objetivo.vida -= this.ataque;
      } else {
        objetivo.vida = 0;
      }
    }
}

export class Mago extends Personaje {
    atacar(objetivo: Personaje): void {
        const daño = Math.round(this.ataque * 1.5);
        if (objetivo.vida >= daño) {
          objetivo.vida -= daño;
        } else {
          objetivo.vida = 0;
        }
}
}

export class Arquero extends Personaje {
    atacar(objetivo: Personaje): void {
        const daño = Math.round(this.ataque * 0.8);
        if (objetivo.vida >= daño) {
          objetivo.vida -= daño;
        } else {
          objetivo.vida = 0;
        }
    }
}
