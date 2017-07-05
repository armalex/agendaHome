import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmxtryitComponent } from './amxtryit.component';

describe('AmxtryitComponent', () => {
  let component: AmxtryitComponent;
  let fixture: ComponentFixture<AmxtryitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmxtryitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmxtryitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
