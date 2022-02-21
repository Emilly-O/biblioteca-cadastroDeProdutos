import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Doce } from 'src/app/models/doce.models';
import { DoceService } from 'src/app/services/doce/doce.service';


@Component({
  selector: 'app-doce-index',
  templateUrl: './doce-index.component.html',
  styleUrls: ['./doce-index.component.css']
})
export class DoceIndexComponent implements OnInit {

  doces: Doce[];

  searchId: string;
  searchDescricao: string;

  constructor(private doceService: DoceService, private router: Router) {
    this.doces = new Array<Doce>();
    this.searchId = "";
    this.searchDescricao = "";
   }

  ngOnInit(): void {
  }

  goToCreate(): void{
    this.router.navigateByUrl('doces/doce-create')
  }

  clearList(): void{
    this.doces = []
  }

  get(): void{

    this.clearList();

    if(this.searchId !== ""){
      const id: number = Number(this.searchId);
      this.getById(id);
      console.log("getById");
      return;
    }
    else if(this.searchDescricao !== ""){
      this.getByDescricao(this.searchDescricao);
      console.log("getByDescricao")
      return;
    }
    else
    this.getAll();
}

  getById(id: number): void{
    this.doceService.getById(id)
      .pipe(
        take(1))
        .subscribe(data =>{
          if(data !== null)
          this.doces.push(data)
          console.log(data)
        })
  }

  getByDescricao(descricao: string): void{
    this.doceService.getByDescricao(descricao)
    .pipe(
      take(1))
    .subscribe(data =>{
      this.doces = data
    })
  }

  goToEdit(id: number): void{
    this.router.navigate(["doces/doce-edit", id]);
  }

  getAll(){
    this.doceService.getAll()
      .subscribe((doces)=> {
        this.doces = doces
        console.log(this.doces)
      })   
  }

  delete(id: number){
    this.doceService.delete(id)
      .subscribe( () => {
        this.getAll()
      })
  }
}
