import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmxgooglemapComponent } from './amxgooglemap.component';

describe('AmxgooglemapComponent', () => {
  let component: AmxgooglemapComponent;
  let fixture: ComponentFixture<AmxgooglemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmxgooglemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmxgooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
