import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';

@Injectable({
  providedIn: 'root'
})
export class GibiService {

  private uri: string = "https://localhost:44393/api/gibis/"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Gibi[]>{
    return this.httpClient.get<Gibi[]>(this.uri)
  }

  delete(id: number): Observable<Gibi>{
    return this.httpClient.delete<Gibi>(this.uri + id)
  }

  post(gibi: Gibi): Observable<Gibi>{
    return this.httpClient.post<Gibi>(this.uri, gibi)
  }

  getById(id: number): Observable<Gibi>{
    const uri: string = `${this.uri}${id}`
    return this.httpClient.get<Gibi>(uri)
  }

  getByTitulo(titulo: string): Observable<Gibi[]>{
    const uri: string = `${this.uri}?titulo=${titulo}`;
    return this.httpClient.get<Gibi[]>(uri)
  }

  getByEditora(editora: string): Observable<Gibi[]>{
    const uri: string = `${this.uri}?editora=${editora}`;
    return this.httpClient.get<Gibi[]>(uri)
  }

  put(gibi: Gibi): Observable<Gibi>{
    const uri: string = this.uri + gibi.Id
    return this.httpClient.put<Gibi>(uri, gibi)
  }
}
