import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DataService } from '../data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: {};
  album: number;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.album = params.id)
  }

  ngOnInit() {
    this.data.getphotos(this.album).subscribe(
      data => this.photos = data
    )
  }
}
