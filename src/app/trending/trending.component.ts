import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { RouterLink } from '@angular/router';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { About3Component } from '../about3/about3.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [RouterLink , ApiImgPipe , About3Component ],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {


  movies : any[] = [] ;


  constructor(private api : ApiServiceService ){}



  ngOnInit(): void {


   this.api.getAllmovies().subscribe( items => this.movies = items.results )

   console.log(this.movies);



  }

}
