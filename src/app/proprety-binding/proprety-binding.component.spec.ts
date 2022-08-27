import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropretyBindingComponent } from './proprety-binding.component';

describe('PropretyBindingComponent', () => {
  let component: PropretyBindingComponent;
  let fixture: ComponentFixture<PropretyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropretyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropretyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
