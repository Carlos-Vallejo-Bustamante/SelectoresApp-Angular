import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  get regiones(): string[] {
    return [...this._regiones]
  }

  constructor() { }
}
