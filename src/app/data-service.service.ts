import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Result } from './class';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private http: HttpClient){}

  public fetchAPI(subreddit:string,before:string):Observable<Result[]>{

   let payload = JSON.stringify({q: 'puppies', limit: 5, sort: 'relevance'})

    return this.http.jsonp("https://www.reddit.com" +
    subreddit +
    "/.json?jsonp=JSONP_CALLBACK" + "&" + "limit=25"+"&" + "sort='top'" + "&" + "before=" + before,'callback').pipe(map((data: any) => {
        var posts:Result[] = [];
        let children = data.data.children;
        for(var i=0; i<children.length; i++) {
                let post = new Result();
                post.title = children[i].data.title;
                post.url = children[i].data.url;
                post.name = children[i].data.name;
                posts.push(post);
        }
        return posts;
    }));
  }
}
