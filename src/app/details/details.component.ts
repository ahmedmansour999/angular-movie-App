import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { About3Component } from '../about3/about3.component';
import { WishListService } from '../service/wish-list.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ApiImgPipe, SubscribeComponent, About3Component, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  // @Input() id? : number  ;
  trendMovie: any;
  vedio: any;

  constructor(
    private MovieTrendApi: ApiServiceService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer ,
    private wishList : WishListService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    let VedioUrl = '';

    this.MovieTrendApi.getOneMovie(id).subscribe(
      (value) => (this.trendMovie = value)
    );
    console.log(this.trendMovie);

    this.MovieTrendApi.vedio(id).subscribe((value) => {
      const VedioUrl = value.results[0].key;
      this.vedio = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${VedioUrl}`
      );
      console.log(this.vedio);
    });
  }

  addToFav(movie : any) {

      this.wishList.AddMovieToWishList(movie) ;


  }
}
