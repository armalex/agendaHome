import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmxclickeventComponent } from './amxclickevent.component';

describe('AmxclickeventComponent', () => {
  let component: AmxclickeventComponent;
  let fixture: ComponentFixture<AmxclickeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmxclickeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmxclickeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
