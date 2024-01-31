import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from './../service/api-service.service';
import { Component, Input } from '@angular/core';
import { ApiImgPipe } from "../pipes/api-img.pipe";
import { DomSanitizer } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { About3Component } from '../about3/about3.component';

@Component({
    selector: 'app-tv-details',
    standalone: true,
    templateUrl: './tv-details.component.html',
    styleUrl: './tv-details.component.css',
    imports: [ApiImgPipe , NgClass , SubscribeComponent , About3Component]
})
export class TvDetailsComponent {

  tvChannels : any ;
  tvVedios : any ;

  constructor(private  api : ApiServiceService , private activatedRoute : ActivatedRoute  , private sanitizer : DomSanitizer) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'] ;

    let tvVedioUrl = "" ;

    this.api.getOneTv(id).subscribe(value => this.tvChannels = value)
    console.log(this.tvChannels);

    this.api.tvVedio(id).subscribe(value =>
      { tvVedioUrl = value.results[0].key ;
      this.tvVedios = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${tvVedioUrl}`)

  }) ;

  }

}
