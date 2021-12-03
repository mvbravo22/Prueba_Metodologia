import { NgModule } from '@angular/core';
//importamos esta herramienta para crear formularios reactivos.
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAutoComponent } from './components/crear-auto/crear-auto.component';
import { ListarAutoComponent } from './components/listar-auto/listar-auto.component';

//conectar con servidor.
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrearAutoComponent,
    ListarAutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
