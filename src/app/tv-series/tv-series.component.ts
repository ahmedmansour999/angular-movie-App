import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { About3Component } from '../about3/about3.component';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-series',
  standalone: true,
  imports: [About3Component , ApiImgPipe , RouterLink],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css'
})
export class TvSeriesComponent {


  movies : any[] = [] ;


  constructor(private api : ApiServiceService ){}



  ngOnInit(): void {


   this.api.getTv().subscribe( items => this.movies = items.results )

   console.log(this.movies);


  }

}
