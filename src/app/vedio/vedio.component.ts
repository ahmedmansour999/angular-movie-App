import { forkJoin } from 'rxjs';
import { ApiServiceService } from './../service/api-service.service';
import { Component } from '@angular/core';
import { ApiImgPipe } from '../pipes/api-img.pipe';

@Component({
  selector: 'app-vedio',
  standalone: true,
  imports: [ApiImgPipe ],
  templateUrl: './vedio.component.html',
  styleUrl: './vedio.component.css'
})
export class VedioComponent {

  movie : any[] = [] ;
  vedio : any[] = [] ;

  constructor(private api : ApiServiceService){}


  ngOnInit(): void {
    this.api.getAllmovies().subscribe(value => {
      this.movie = value.results;

      const vedioObservables = this.movie.map(movie => this.api.vedio(movie.id));

      forkJoin(vedioObservables).subscribe(item => this.vedio = item)

    });

  }





}

