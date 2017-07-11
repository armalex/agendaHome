import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmxcodedrivenformComponent } from './amxcodedrivenform.component';

describe('AmxcodedrivenformComponent', () => {
  let component: AmxcodedrivenformComponent;
  let fixture: ComponentFixture<AmxcodedrivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmxcodedrivenformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmxcodedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
