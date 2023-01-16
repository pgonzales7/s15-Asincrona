import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsinComponent } from './asin.component';

describe('AsinComponent', () => {
  let component: AsinComponent;
  let fixture: ComponentFixture<AsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
