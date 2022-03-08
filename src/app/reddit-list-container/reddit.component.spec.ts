import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditListContainerComponent } from './reddit-list-container.component';

describe('RedditComponent', () => {
  let component: RedditListContainerComponent;
  let fixture: ComponentFixture<RedditListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
