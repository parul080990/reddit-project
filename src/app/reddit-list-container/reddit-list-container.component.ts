import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../class';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-reddit-list-container',
  templateUrl: './reddit-list-container.component.html',
  styleUrls: ['./reddit-list-container.component.css'],
  providers: [DataServiceService]
})
export class RedditListContainerComponent implements OnInit {
  @Input('subreddit') subreddit:string;
  results: Result[];

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.fetchAPI(this.subreddit,'').subscribe(
      res => this.results = res
);
  }

  public onloadNextItems(evt){
    this.data.fetchAPI(this.subreddit,evt).subscribe(
      res => this.results = this.results.concat(res)
);

  }

}
