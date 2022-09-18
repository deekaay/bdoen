import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RungpanelComponent } from './rungpanel.component';

describe('RungpanelComponent', () => {
  let component: RungpanelComponent;
  let fixture: ComponentFixture<RungpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RungpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RungpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
