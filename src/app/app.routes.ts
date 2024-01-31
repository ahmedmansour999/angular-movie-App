import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AllTrendComponent } from './all-trend/all-trend.component';
import { PopularComponent } from './popular/popular.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { HomeComponent } from './home/home.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { About4Component } from './about4/about4.component';
import { MoviesComponent } from './movies/movies.component';
import { TrendingComponent } from './trending/trending.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { WishListComponent } from './wish-list/wish-list.component';

export const routes: Routes = [

  {path: 'home' , component : HomeComponent , title:'home' } ,

  {path:"about4" , component:About4Component , title:"About Us"} ,

  {path:"movies" , component:MoviesComponent , title:"movies"} ,

  {path:"trending", component:TrendingComponent , title:"trending"} ,

  {path:"tvSeries", component:TvSeriesComponent , title:"tvSeries"} ,

  {path:"wishList", component:WishListComponent , title:"WishList"} ,

  {path:"wishList/:id", component:WishListComponent , title:"WishList"} ,

  {path:'details/:id' , component: DetailsComponent , title:"Details"} ,

  {path:'tv-details/:id' , component: TvDetailsComponent , title:"Details"} ,

  {path:"actorDetails/:id" , component: ActorDetailsComponent , title:"details" } ,

  {path: '' , redirectTo: "home" , pathMatch:"full"} ,

  {path:"movies/details/:id" , redirectTo:"details/:id" , pathMatch:"full"} ,

  {path:"movies/home" , redirectTo:"home" , pathMatch:"full"} ,

  {path:"home/details/:id" , redirectTo:"details/:id" , pathMatch:"full" } ,

  {path:"popular/details/:id" , redirectTo:"details/:id" , pathMatch:"full"} ,

  {path:"Tv/tv-details/:id" , redirectTo:"tv-details/:id" , pathMatch:"full" } ,

  {path:'home/actorDetails/:id' , redirectTo:"actorDetails/:id" , pathMatch:"full" },

  {path:"home/about4" , redirectTo:"about4" , pathMatch:"full"} ,

  {path:"home/trending" , redirectTo:"trending" , pathMatch:"full"} ,

  {path:"home/wishList" , redirectTo:"wishList" , pathMatch:"full"} ,

  {path:"trending/details/:id" , redirectTo:"details/:id" , pathMatch:"full"} ,

  {path:"trending/home" , redirectTo:"home" , pathMatch:"full"} ,

  {path:"tvSeries/details/:id" , redirectTo:"details/:id" , pathMatch:"full"} ,

  {path:"tvSeries/home" , redirectTo:"home" , pathMatch:"full"} ,

  {path:"wishList/home/home" , redirectTo:"home" , pathMatch:"full"} ,


  {path:"details/:id/wishList/:id" , redirectTo:"wishList/:id" , pathMatch:"full"} ,



];
