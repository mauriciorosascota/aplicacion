import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post3Page } from './post3.page';

describe('Post3Page', () => {
  let component: Post3Page;
  let fixture: ComponentFixture<Post3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Post3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
