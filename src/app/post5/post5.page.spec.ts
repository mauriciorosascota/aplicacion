import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post5Page } from './post5.page';

describe('Post5Page', () => {
  let component: Post5Page;
  let fixture: ComponentFixture<Post5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Post5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
