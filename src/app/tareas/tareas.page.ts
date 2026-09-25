import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas-service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
  standalone: false,
})
export class TareasPage implements OnInit {

  titulo='Lista de tareas';
  listTareas: string[] = [];
  nuevaTarea: string = '';
  deshabilitar:boolean=true;

  constructor(private tareaService:TareasService) {  }

  ngOnInit() {
  }

  cargarTareas(){
    this.tareaService.obtenerTareas();
  }

  guardar(){
    if (this.nuevaTarea.trim() === "") {
      return;
    }
    this.listTareas.push(this.nuevaTarea);
    this.nuevaTarea = ''; // Resets the input field
  }
  
 

  eliminar(index:number){
    console.log("indice: ",index);
    this.listTareas.splice(index,1);
  }

}
