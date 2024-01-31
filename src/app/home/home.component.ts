import { BodyComponent } from './../body/body.component';
import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ApiImgPipe } from '../pipes/api-img.pipe';
import { AllTrendComponent } from '../all-trend/all-trend.component';
import { PopularComponent } from '../popular/popular.component';
import { TvComponent } from '../tv/tv.component';
import { VedioComponent } from '../vedio/vedio.component';
import { PeopleComponent } from '../people/people.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { About1Component } from '../about1/about1.component';
import { About2Component } from '../about2/about2.component';
import { About3Component } from '../about3/about3.component';
import { About4Component } from '../about4/about4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    AllTrendComponent,
    PopularComponent,
    TvComponent,
    VedioComponent,
    PeopleComponent,
    SubscribeComponent,
    About1Component,
    About2Component,
    About3Component,
    About4Component,
    BodyComponent
  ],
})
export class HomeComponent {}
