import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Pais, PaisSmall } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  pais?: Pais;
  fronteras: PaisSmall[] = [];

  cargando: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private pasisesService: PaisesService) { }

  ngOnInit(): void {

    this.regiones = this.pasisesService.regiones;

    // Cuando cambie la región
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(_ => {
          this.miFormulario.get('pais')?.reset('')
          this.cargando = true;
        }),
        switchMap(region => this.pasisesService.getPaisesPorRegion(region))
      )
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      })

    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(_ => {
          this.miFormulario.get('frontera')?.reset('')
          this.cargando = true;
        }),
        switchMap(codigo => this.pasisesService.getPaisesPorCodigo(codigo)),
        switchMap(pais => this.pasisesService.getPaisesPorCodigos(pais?.borders!))
      )
      .subscribe(paises => {
        // this.fronteras = pais?.borders || [];
        this.fronteras = paises;
        this.cargando = false;
      })


    // .pipe(
    //   tap(_ => this.miFormulario.get('frontera')?.reset('')),
    //   switchMap(pais => this.pasisesService.getPaisesPorCodigo(pais))
    // )
    // .subscribe(paises => {
    //   this.fronteras = paises;
    // })
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
