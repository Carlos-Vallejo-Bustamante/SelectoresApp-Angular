import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required]
  });

  regiones: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private pasisesService: PaisesService) { }

  ngOnInit(): void {

    this.regiones = this.pasisesService.regiones;

  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
