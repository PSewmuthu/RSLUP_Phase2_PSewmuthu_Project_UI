import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarentdashComponent } from './restuarentdash.component';

describe('RestuarentdashComponent', () => {
  let component: RestuarentdashComponent;
  let fixture: ComponentFixture<RestuarentdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestuarentdashComponent]
    });
    fixture = TestBed.createComponent(RestuarentdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
