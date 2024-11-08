import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  // Primer método: obtiene una lista de personajes
  getCharacters(page: number = 1, limit: number = 10): Observable<{ items: ICharacter[], meta: any, links: any }> {
    const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<{ items: ICharacter[], meta: any, links: any }>(url, { headers }).pipe(
      map(response => response)
    );
  }

  // Segundo método: obtiene las transformaciones de un personaje específico
  getCharacterDetails(id: number): Observable<ICharacter> {
    const url = `${this.baseUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<ICharacter>(url, { headers }).pipe(
      map(response => response)
    );
  }
}
