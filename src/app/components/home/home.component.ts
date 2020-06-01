import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSongs:any[]=[];

  constructor(private spotify: SpotifyService) {
   this.spotify.getNewReleases()
   .subscribe((res: any) => {
    this.newSongs= res;
  });
  }

  ngOnInit() {
  }

}
