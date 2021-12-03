// Aqui declaramos los atributos y constructor para uso general.
export class Auto{
 _id?: number;
 placa: string;
 marca: string;
 modelo: string;
 color: string;
 kilometraje: number;
 nacientos: number;
 foto:string;

 constructor(placa: string, marca:string, modelo:string, color: string, kilometraje:number, nacientos:number, foto:string ){
    this.placa=placa;
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.kilometraje=kilometraje;
    this.nacientos=nacientos;
    this.foto=foto;
 }

}