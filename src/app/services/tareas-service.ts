import { Service } from '@angular/core';

@Service()
export class TareasService {

    private  tareas=['Clase de Ionic', 'Taller de Angular','Node Js', 'Intro a Git'];

    obtenerTareas(){
        return this.tareas;
    }

    guardarTareas(tareaNueva:string){
        if (tareaNueva==="") {
            return
        }
        this.tareas.push(tareaNueva)

    }

    eliminar(index:number){
        this.tareas.splice(index,1);
    }

}
