/**
 * EJERCICIO 11 - Clase Cuenta
 * ---------------------------------------------------------------------------
 * El saldo no debe poder modificarse directamente desde afuera de la clase:
 * por eso es `private`. Solo se modifica a través de depositar/retirar.
 */
export class Cuenta {
    public numero: number;
    public titular: string;
    private saldo: number;

    constructor(numero: number, titular: string, saldoInicial: number = 0) {
        if (saldoInicial < 0){
            throw new Error("el saldo no puede ser negativo")
        }
        this.numero = numero
        this.titular = titular
        this.saldo = saldoInicial
    }

    depositar(monto: number): void {
        if (monto > 0){
           this.saldo +=  monto
        } else {
            throw new Error("no se puede depositar un monto negativo")
        }
    }

    retirar(monto: number): void {
       if(monto <= 0) {
            throw new Error("el monto a retirar debe ser mayor a 0")
       }else if (monto > this.saldo){ 
            throw new Error("saldo insuficiente")
       } else {
        this.saldo -= monto
       }
    }

    consultarSaldo(): number {
        // TODO
        return this.saldo
    }
}
