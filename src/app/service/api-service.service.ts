import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  Header : any = {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODg4NWNmNmRmYmM0OGRjOTBhOWFiMzBkNGQ1M2UzMiIsInN1YiI6IjY1YjE1YzMyOTljOTY0MDE3MjFmODZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z99SRKXepvhGcNdVal5bZlQiNb3i7XuNx9B-7swOQSk'
  };

  allApi = "https://api.themoviedb.org/3/trending/all/day?language=en-US" ;
  movieApi = "https://api.themoviedb.org/3/movie/popular?" ;
  peopleApi = "https://api.themoviedb.org/3/trending/person/day?language=en-US" ;
  tvApi = "https://api.themoviedb.org/3/trending/tv/day?language=en-US" ;
  vedioApi = "https://api.themoviedb.org/3/movie/";
  tvVedioApi ='https://api.themoviedb.org/3/tv/' ;
  oneMovie = "https://api.themoviedb.org/3/movie/" ;
  oneTv = 'https://api.themoviedb.org/3/tv/' ;
  actorMovie = 'https://api.themoviedb.org/3/person/' ;
  actorDetails = 'https://api.themoviedb.org/3/person/'

  constructor(private _httpClient : HttpClient) { }



  getAll () : Observable<any> {
    return this._httpClient.get(this.allApi , {
      headers: this.Header
    })
  }

  getOneMovie(id: any): Observable<any> {
    const url = `${this.oneMovie}${id}?language=en-US`;
    return this._httpClient.get(url,{
      headers: this.Header
    });
  }


  getAllmovies () : Observable<any> {
    return this._httpClient.get( this.movieApi ,{
      headers : this.Header
    })
  }

  getPeople () : Observable<any> {
    return this._httpClient.get(this.peopleApi, {
      headers: this.Header
    });
  }


  getTv() : Observable<any> {
    return this._httpClient.get(this.tvApi, {
      headers: this.Header
    });
  }

  getOneTv( id: number ): Observable<any> {
    const url = `${this.oneTv}${id}?language=en-US`;
    return this._httpClient.get(url,{
      headers: this.Header
    });
  }

  getActorMovie( id: number ): Observable<any> {
    const url = `${this.actorMovie}${id}/movie_credits?language=en-US`;
    return this._httpClient.get(url,{
      headers: this.Header
    });
  }
  getActorDetails( id: number ): Observable<any> {
    const url = `${this.actorDetails}${id}language=en-US`;
    return this._httpClient.get(url,{
      headers: this.Header
    });
  }

  vedio(id : number) : Observable<any> {
    const url = `${this.vedioApi}${id}/videos?language=en-US`;
    return this._httpClient.get( url , {
      headers : this.Header
    }) ;
  }


  tvVedio(id : number) : Observable<any> {
    const url = `${this.tvVedioApi}${id}/videos?language=en-US`;
    return this._httpClient.get( url , {
      headers : this.Header
    }) ;
  }


}




