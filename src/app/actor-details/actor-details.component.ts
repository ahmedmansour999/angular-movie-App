import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { About3Component } from '../about3/about3.component';
import { About1Component } from '../about1/about1.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'app-actor-details',
  standalone: true,
  imports: [SlickCarouselModule , ApiImgPipe  , About3Component , SubscribeComponent] ,
  templateUrl: './actor-details.component.html',
  styleUrl: './actor-details.component.css'
})
export class ActorDetailsComponent {

  actorCast : any ;
  actorCrow : any ;
  actor : any ;

  constructor(private activeRoute : ActivatedRoute , private peopleApi : ApiServiceService ) {}

  ngOnInit(): void {

    const id =  this.activeRoute.snapshot.params['id'] ;

    this.peopleApi.getActorMovie(id).subscribe(value => this.actorCast = value.cast)
    this.peopleApi.getActorMovie(id).subscribe(value => this.actorCrow = value.crew)
    this.peopleApi.getActorDetails(id).subscribe(value=> this.actor = value )

    console.log(this.actorCrow);




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
