import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';
import { GibiService } from 'src/app/services/gibi/gibi.service';

@Component({
  selector: 'app-gibi-edit',
  templateUrl: './gibi-edit.component.html',
  styleUrls: ['./gibi-edit.component.css']
})
export class GibiEditComponent implements OnInit {

  gibi: Gibi;

  constructor(private router: Router, 
    private gibiService: GibiService, 
    private activateRoute: ActivatedRoute) { 
      this.gibi= new Gibi()
    }

  ngOnInit(): void {
    const id: number = Number(this.activateRoute.snapshot.paramMap.get("id"));
    this.getById(id)
  }

  goToIndex(): void{
    this.router.navigateByUrl('gibis/gibi-index')
  }

  getById(id: number): void{
    this.gibiService.getById(id)
      .pipe(
        take(1))
        .subscribe(data =>{
          this.gibi = data
        })
  }
  
  put(): void{
    this.gibiService.put(this.gibi)
      .pipe(
        take(1)
      )
      .subscribe()
      this.goToIndex();
  }

}
