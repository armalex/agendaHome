import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmxregisterComponent } from './amxregister.component';

describe('AmxregisterComponent', () => {
  let component: AmxregisterComponent;
  let fixture: ComponentFixture<AmxregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmxregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmxregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
