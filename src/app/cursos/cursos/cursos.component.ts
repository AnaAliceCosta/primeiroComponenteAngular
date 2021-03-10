import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal:string;
  cursos: string[];

  constructor(private cursoService: CursosService) { 
    
    this.nomePortal =  'www.anaalicecosta.com.br'
    this.cursos = cursoService.getCursos();

  }


}
