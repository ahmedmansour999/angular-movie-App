import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ApiServiceService } from './../service/api-service.service';
import { Component } from '@angular/core';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-trend',
  standalone: true,
  imports: [SlickCarouselModule , ApiImgPipe , RouterLink] ,
  templateUrl: './all-trend.component.html',
  styleUrl: './all-trend.component.css'
})
export class AllTrendComponent {

AllMovie : any[] = [] ;

constructor(private api : ApiServiceService , private router : Router){}

ngOnInit(): void {
 this.api.getAll().subscribe(value => this.AllMovie = value.results )
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
