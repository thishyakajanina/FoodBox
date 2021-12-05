import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartFoodComponent } from './addcart-food.component';

describe('addcartFoodComponent', () => {
  let component: AddcartFoodComponent;
  let fixture: ComponentFixture<AddcartFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
