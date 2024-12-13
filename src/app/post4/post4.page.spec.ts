import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post4Page } from './post4.page';

describe('Post4Page', () => {
  let component: Post4Page;
  let fixture: ComponentFixture<Post4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Post4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
