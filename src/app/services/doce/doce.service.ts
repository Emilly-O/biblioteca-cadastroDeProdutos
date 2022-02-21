import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doce } from 'src/app/models/doce.models';


@Injectable({
  providedIn: 'root'
})
export class DoceService {

  private uri: string = "https://localhost:44393/api/doces/"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Doce[]>{
    console.log("getAll-doce-service")
    return this.httpClient.get<Doce[]>(this.uri)
  }



  delete(id: number): Observable<Doce>{
    console.log("delete-doce-service")
    return this.httpClient.delete<Doce>(this.uri + id)
  }

  post(doce: Doce): Observable<Doce>{
    console.log("post-doce-service")
    return this.httpClient.post<Doce>(this.uri, doce)
  }

  getById(id: number): Observable<Doce>{
    console.log("getById-doce-service")
    const uri: string = `${this.uri}${id}`
    return this.httpClient.get<Doce>(uri)
  }

  getByDescricao(descricao: string): Observable<Doce[]>{
    const uri: string = `${this.uri}?descricao=${descricao}`;
    return this.httpClient.get<Doce[]>(uri)
  }

  put(doce: Doce): Observable<Doce>{
    console.log("put-doce-service-start")
    const uri: string = this.uri + doce.Id
    console.log(uri)
    return this.httpClient.put<Doce>(uri, doce)
  }
}
