import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrotabComponent } from './introtab.component';

describe('IntrotabComponent', () => {
  let component: IntrotabComponent;
  let fixture: ComponentFixture<IntrotabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrotabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
