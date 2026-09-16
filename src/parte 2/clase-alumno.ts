/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// import { Materia } from "../parte 3/ej20-universidad.js";

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
//TODO cambiar a type
export type Materia = {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad: number;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        return this.nombre + " " + this.apellido;
    }
    
    esMayorDeEdad(): boolean {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        // TODO: debe impedir edades inválidas.
        // edad < 0   -> throw new Error(...)
        // edad > 120 -> throw new Error(...)
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa");
        }
        if (edad > 120) {
            throw new Error("La edad no puede superar los 120 años");
        }
        this.edad = edad;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
        // TODO
        this.materias.push(materia)
    }

    quitarMateria(codigo: number): Materia | undefined {
        const materiaEncontrada = this.materias.find(m => m.codigo === codigo)

        if (!materiaEncontrada) {
            return undefined
        }

        this.materias = this.materias.filter(m => m.codigo !== codigo);

        return materiaEncontrada
    }

    estaInscripto(codigo: number): boolean {
        // TODO
        return this.materias.some(m => m.codigo === codigo)
        
    }

    cantidadMaterias(): number {
        // TODO
        return this.materias.length
    }

    getMaterias(): Materia[] {
        // TODO: devolver las materias sin exponer el arreglo interno
        // (devolver una copia, no la referencia original).
        return this.materias.slice()
    }
}
