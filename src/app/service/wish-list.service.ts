import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private movieList = new BehaviorSubject<any[]>([])


  constructor() {

    const storedMovie : any  = localStorage.getItem("wishList") ;
    if (storedMovie) {
      this.movieList.next(JSON.parse(storedMovie))
    }

  }


  getWishList(){

    return this.movieList.asObservable()

  }


  AddMovieToWishList(movie : any){

    const currentMovie = this.movieList.value || [];

    const oldMovie = currentMovie.find(item => movie.id === item.id)


    if (oldMovie) {

      const movieIndex = currentMovie.findIndex(item => movie.id === item.id )
      const UpdataList = currentMovie.splice(movieIndex , 1) ;
      localStorage.setItem("wishList" , JSON.stringify(UpdataList)) ;
      return this.movieList.next(UpdataList)

    }

    const movieList = [...currentMovie , movie] ;

    localStorage.setItem("wishList" , JSON.stringify(movieList)) ;

    return this.movieList.next(movieList)

  }


  removeMovieFromWishList(id: number) {
    const currentMovies = this.movieList.value;

    const movieIndex = currentMovies.findIndex(item => id === item.id);

    if (movieIndex !== -1) {
      currentMovies.splice(movieIndex, 1);
      localStorage.setItem("wishList", JSON.stringify(currentMovies));
      this.movieList.next(currentMovies);
    }
  }




}
