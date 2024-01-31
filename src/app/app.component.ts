import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { AllTrendComponent } from './all-trend/all-trend.component';
import { VedioComponent } from './vedio/vedio.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , NavbarComponent , FooterComponent , HomeComponent , PopularComponent , PeopleComponent  , TvComponent , AllTrendComponent , VedioComponent , DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'movieApp';
}
