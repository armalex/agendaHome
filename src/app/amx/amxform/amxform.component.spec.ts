import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AmxFormComponent } from './amxform.component';

describe('AmxformComponent', () => {
  let component: AmxFormComponent;
  let fixture: ComponentFixture<AmxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
