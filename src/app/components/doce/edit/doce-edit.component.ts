import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Doce } from 'src/app/models/doce.models';
import { DoceService } from 'src/app/services/doce/doce.service';


@Component({
  selector: 'app-doce-edit',
  templateUrl: './doce-edit.component.html',
  styleUrls: ['./doce-edit.component.css']
})
export class DoceEditComponent implements OnInit {

  doce: Doce;

  constructor(private router: Router, 
    private doceService: DoceService, 
    private activateRoute: ActivatedRoute) { 
      this.doce = new Doce()
    }

  ngOnInit(): void {
    const id: number = Number(this.activateRoute.snapshot.paramMap.get("id"));
    console.log(id)
    this.getById(id)
  }

  goToIndex(): void{
    this.router.navigateByUrl('doces/doce-index')
  }

  getById(id: number): void{
    this.doceService.getById(id)
      .pipe(
        take(1))
        .subscribe(data =>{
          this.doce = data
          console.log(this.doce)
        })
  }
  
  put(): void{
    this.doceService.put(this.doce)
      .pipe(
        take(1)
      )
      .subscribe()
      this.goToIndex();
  }

}
