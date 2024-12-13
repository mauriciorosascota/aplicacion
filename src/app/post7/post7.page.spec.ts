import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post7Page } from './post7.page';

describe('Post7Page', () => {
  let component: Post7Page;
  let fixture: ComponentFixture<Post7Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Post7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
