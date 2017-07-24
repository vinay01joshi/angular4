import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCourseComponent } from './udemy-course.component';

describe('UdemyCourseComponent', () => {
  let component: UdemyCourseComponent;
  let fixture: ComponentFixture<UdemyCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
