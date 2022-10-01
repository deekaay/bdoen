import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderpanelComponent } from './ladderpanel.component';

describe('LadderpanelComponent', () => {
  let component: LadderpanelComponent;
  let fixture: ComponentFixture<LadderpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadderpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadderpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
