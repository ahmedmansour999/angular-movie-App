import { RouterLink } from '@angular/router';
import { About3Component } from '../about3/about3.component';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { WishListService } from './../service/wish-list.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [ ApiImgPipe , About3Component , RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  FavMoves : any[] = [] ;

  @Input() id? : number ;

  constructor(private wishListMovie : WishListService){}

  ngOnInit(): void {

    this.wishListMovie.getWishList().subscribe(value => this.FavMoves = value)

  }


  removeMovie(id : number){

    this.wishListMovie.removeMovieFromWishList(id) ;

    this.wishListMovie.getWishList().subscribe(item => this.FavMoves = item)

  }


}
