import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [SlickCarouselModule , ApiImgPipe , RouterLink] ,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  peoples : any[] = [] ;


  constructor( private Api : ApiServiceService ){} ;


  ngOnInit(): void {
    this.Api.getPeople().subscribe(value => this.peoples = value.results) ;

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
