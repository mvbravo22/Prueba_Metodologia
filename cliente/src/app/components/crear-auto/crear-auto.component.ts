import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { Auto } from 'src/app/models/auto';
//importamos a los servicios generados como guardar, editar, eliminar. 
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-crear-auto',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css']
})
export class CrearAutoComponent implements OnInit {
//declaracion del grupo de formulario.
  autoForm: FormGroup;
 
  titulo = 'Crear auto';
   id: string | null;
  constructor( private fb: FormBuilder, private router: Router, private _autoService: AutoService, private aRouter: ActivatedRoute ) {
   //Se hace la validacion del campo sea requerido.
    this.autoForm=this.fb.group({
      placa:['',Validators.required],
      marca:['',Validators.required],
      modelo:['',Validators.required],
      color:['',Validators.required],
      kilometraje:['',Validators.required],
      nacientos:['',Validators.required],
      foto:['',Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
    this.esEditar();
  }

  
//llamar a cada una de los atributos  que se hayan identado en la vista para darle un valor.
  agregarAuto() {

    const AUTO: Auto = {
      placa: this.autoForm.get('placa')?.value,
      marca: this.autoForm.get('marca')?.value,
      modelo: this.autoForm.get('modelo')?.value,
      color: this.autoForm.get('color')?.value,
      kilometraje: this.autoForm.get('kilometraje')?.value,
      nacientos: this.autoForm.get('nacientos')?.value,
      foto: this.autoForm.get('foto')?.value,
     
     
    }
// control que si el "id", es diferente a nulo lo que va hacer es editar el auto
    if(this.id !==null){
      //editamos
      
      this._autoService.editarAuto(this.id , AUTO ).subscribe(data =>{
        alert("EL auto fue actualizado correctamrente");
        
        this.router.navigate(['/']);
        
      }, error => {
        console.log(error);
        this.autoForm.reset();
      })
      //en caso contrario se agrega un nuevo auto.
    }else{
      //agregamos
      console.log(AUTO);
      this._autoService.guardarAuto(AUTO).subscribe(data => {
        alert('El auto fue registrado con exito!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.autoForm.reset();
      })

    }

   
  }
// se va obtener el auto lo va editar
    esEditar(){

      if(this.id !== null) {
        this.titulo = 'Editar auto';
        console.log("hasta aqui todo bien ");
        this._autoService.obtenerAuto(this.id).subscribe(data => {this.autoForm.setValue({
          placa:data.placa,
          marca:data.marca,
          modelo:data.modelo,
          color:data.color,
          kilometraje:data.kilometraje,
          nacientos:data.nacientos,
          foto:data.foto,
        })});
        
      
       
      }
    }
  
  }




