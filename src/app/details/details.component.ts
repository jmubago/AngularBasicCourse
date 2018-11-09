import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DataService } from '../data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  showUser = false;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    )
  }

  public showUserAlbums() {
    this.showUser = !this.showUser;
  }
}
