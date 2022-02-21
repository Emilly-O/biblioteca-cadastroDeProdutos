import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';
import { GibiService } from 'src/app/services/gibi/gibi.service';

@Component({
  selector: 'app-gibi-index',
  templateUrl: './gibi-index.component.html',
  styleUrls: ['./gibi-index.component.css']
})
export class GibiIndexComponent implements OnInit {

  gibis: Gibi[];

  searchId: string;
  searchTitulo: string;
  searchEditora: string;

  constructor(private gibiService: GibiService, private router: Router) { 
    this.gibis = new Array<Gibi>();
    this.searchId = "";
    this.searchTitulo = "";
    this.searchEditora = "";
  }

  ngOnInit(): void {
  }

  goToCreate(): void{
    this.router.navigateByUrl('gibis/gibi-create')
  }

  clearList(): void{
    this.gibis = []
  }

  get(): void{

    this.clearList();

    if(this.searchId !== ""){
      const id: number = Number(this.searchId);
      this.getById(id);
      return;
    }
    else if(this.searchTitulo !== ""){
      this.getByTitulo(this.searchTitulo);
      return;
    }
    else if(this.searchEditora !== ""){
      this.getByEditora(this.searchEditora);
      return;
    }  
    else
    this.getAll();
}

  getById(id: number): void{
    this.gibiService.getById(id)
      .pipe(
        take(1))
        .subscribe(data =>{
          if(data !== null)
          this.gibis.push(data)
        })
  }

  getByTitulo(titulo: string): void{
    this.gibiService.getByTitulo(titulo)
    .pipe(
      take(1))
    .subscribe(data =>{
      this.gibis = data
    })
  }

  getByEditora(editora: string): void{
    this.gibiService.getByEditora(editora)
    .pipe(
      take(1))
    .subscribe(data =>{
      this.gibis = data
    })
  }

  goToEdit(id: number): void{
    this.router.navigate(["gibis/gibi-edit", id]);
  }

  getAll(){
    this.gibiService.getAll()
      .subscribe((doces)=> {
        this.gibis = doces
      })   
  }

  delete(id: number){
    this.gibiService.delete(id)
      .subscribe( () => {
        this.getAll()
      })
  }
}
