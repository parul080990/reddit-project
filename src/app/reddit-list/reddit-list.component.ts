import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {

  @Input('results') results:Array<any>;
  @Output() loadNextItems: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public onscroll(list){

    if(list.scrollTop > list.scrollHeight-list.clientHeight) {
      this.loadNextItems.emit(this.results && this.results[this.results.length-1].name);
  }

  }

}
