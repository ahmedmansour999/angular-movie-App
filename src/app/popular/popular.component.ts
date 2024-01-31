import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [ApiImgPipe , SlickCarouselModule ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {

  movies : any[] = [] ;



  constructor( private Api : ApiServiceService , private router : Router ){}




  ngOnInit(): any {
    this.Api.getAllmovies().subscribe(data => this.movies = data.results) ;

  }

  sendId(id : number){
    this.router.navigate(['details' , id])
  }



  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 922,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




}
