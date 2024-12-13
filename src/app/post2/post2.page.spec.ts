import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post2Page } from './post2.page';

describe('Post2Page', () => {
  let component: Post2Page;
  let fixture: ComponentFixture<Post2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Post2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
