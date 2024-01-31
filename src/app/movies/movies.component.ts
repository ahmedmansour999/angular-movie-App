import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { RouterLink } from '@angular/router';
import { About3Component } from '../about3/about3.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [ApiImgPipe , RouterLink , About3Component],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {


  movies : any[] = [] ;


  constructor(private api : ApiServiceService ){}



  ngOnInit(): void {


   this.api.getAll().subscribe( items => this.movies = items.results )

   console.log(this.movies);


  }




}
