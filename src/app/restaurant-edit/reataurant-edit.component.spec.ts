import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReataurantEditComponent } from './reataurant-edit.component';

describe('ReataurantEditComponent', () => {
  let component: ReataurantEditComponent;
  let fixture: ComponentFixture<ReataurantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReataurantEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReataurantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
