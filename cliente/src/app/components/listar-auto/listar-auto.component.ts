import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//importamos el modelo
import { Auto } from 'src/app/models/auto';
//importamos el servicio 
import { AutoService } from 'src/app/services/auto.service';
@Component({
  selector: 'app-listar-auto',
  templateUrl: './listar-auto.component.html',
  styleUrls: ['./listar-auto.component.css']
})
export class ListarAutoComponent implements OnInit {
  //Arreglo de la lista de autos para guardar todos los atributos del modelo.
  listAutos: Auto[] = [];
  constructor(private _autoService: AutoService, private sanitizer: DomSanitizer) { }
//que llama en primera instacia que se abre a mostrar los datos.
  ngOnInit(): void {
    this.obtenerAutos();
  }
//esta funcion obtener auto llama a la funcion del servicio getAuto.
  obtenerAutos(){
    this._autoService.getAutos().subscribe(data => {
      console.log(data);
      this.listAutos = data;
    }, error =>{
      console.log(error);
    })
  }
//esta funcion llama al metodo del servicio cual obtiene el id y procede a eliminar.
  eliminarAuto(id: any) {
    this._autoService.eliminarAuto(id).subscribe( data => {
      alert('El producto fue eliminado con exito' );

      this.obtenerAutos();
    }, error => {
      console.log(error);
    })
  }

}
