import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  album: {};

  @Input() userId: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getAlbums().subscribe(
      data => this.album = data
    )
  }
}
