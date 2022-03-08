import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditListContainerComponent } from './reddit-list-container/reddit-list-container.component';
import { RedditListComponent } from './reddit-list/reddit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditListContainerComponent,
    RedditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
