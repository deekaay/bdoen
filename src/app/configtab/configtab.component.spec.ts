import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigtabComponent } from './configtab.component';

describe('ConfigtabComponent', () => {
  let component: ConfigtabComponent;
  let fixture: ComponentFixture<ConfigtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
