import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ApiImgPipe } from '../pipes/api-img.pipe';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [SlickCarouselModule , ApiImgPipe] ,
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {


  tvChannels : any[] = [] ;


  constructor(private api : ApiServiceService , private router : Router){}


  ngOnInit(): void {
    this.api.getTv().subscribe(value => this.tvChannels = value.results) ;

  }

  sendId(id : number){
    this.router.navigate(['tv-details' , id])
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
