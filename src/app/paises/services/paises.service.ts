import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  private _baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  get regiones(): string[] {
    return [...this._regiones]
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {

    const url: string = `${this._baseUrl}/region/${region}?fields=name,alpha3Code`;
    return this.http.get<PaisSmall[]>(url)
  }

  getPaisesPorCodigo(codigo: string): Observable<Pais | null> {

    if (!codigo) {
      return of(null)
    }

    const url: string = `${this._baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }

}
